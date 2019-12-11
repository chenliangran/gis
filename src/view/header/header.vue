<template>
    <div class="cms-nav">
        <div class="cmsNav cms-left">
            <ul>
                <li style="margin-left: 30px;" @click="dataShow(flag2)"> 
                    <i class="icon icon1"></i>
                    <span>数据统计</span>
                    <i class="icon icon8"></i>
                    <div class="menu" v-show="flag2">
                        <p></p>
                        <p><input class="event-menu-checkbox" type="checkbox" name="item"><span data-type='飞行曲线'>✔</span><label>飞行曲线</label></p>
                        <p><input class="event-menu-checkbox" type="checkbox" name="item"><span data-type='浮标投放信息'>✔</span><label>浮标投放信息</label></p>
                        <p><input class="event-menu-checkbox" type="checkbox" name="item"><span data-type='磁探探测目标'>✔</span><label>磁探探测目标</label></p>
                        <p><input class="event-menu-checkbox" type="checkbox" name="item"><span data-type='浮标探测目标'>✔</span><label>浮标探测目标</label></p>
                    </div>
                </li>
                <li>
                    <i class="icon icon2"></i>
                    <div class="export" @click="load">报告导出</div>
                </li>
                <li @click="tudeShow(tudeShow)">
                    <i class="icon icon3"></i>
                    <span>经纬度设置</span>
                </li>
            </ul>
        </div>
        <div class="cms-middle">
            <ul>
                <li><i class="feiji"></i><span>1</span></li>
                <li><i class="fubiao"></i><span>{{FBnum}}</span></li>
                <li><span class="time">{{NowTime}}</span></li>
                <li><i class="group"></i><span>1</span></li>
            </ul>
        </div>
        <div class="cmsNav cms-right">
             <ul>
                <li @click="controller(flag1)"><i class="icon icon4"></i><span>图层控制</span></li>
                <li @click="tool(flag)"><i class="icon icon5"></i><span>绘图工具</span></li>
                <!-- <li @click="clip"><i class="icon icon6"></i><span>截屏</span></li> -->
<!--                <li style="margin-right: 30px;"><i class="icon icon7"></i><span>FPS信息：{{FPS}}</span></li>-->
            </ul>
        </div>
        <div id="dv" v-show="dvShow" :style="dvStyle" @dblclick="clipImg"></div>
        <el-dialog
                title="设置截取尺寸"
                :visible.sync="dialogVisible"
                width="20%"
                append-to-body
        >
            <el-row style="margin: 10px 0">
                <el-col :span="8"><span style="line-height: 32px">截取框长度</span></el-col>
                <el-col :span="8">
                    <el-input-number v-model="imgWidth" :min="100">
                    </el-input-number>
                </el-col>
                <el-col :span="8"></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"><span style="line-height: 32px">截取框宽度</span></el-col>
                <el-col :span="8">
                    <el-input-number v-model="imgHeight" :min="100">
                    </el-input-number>
                </el-col>
                <el-col :span="8"></el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="setXy">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog
                title="经纬度设置"
                :visible.sync="jwdVisible"
                width="30%"
                append-to-body
        >
            <el-button type="primary" @click="addDomain" style="margin-bottom: 10px">新增点</el-button>
            <el-button type="danger" @click="clearLine">清除连线</el-button>
            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                <el-col>
                    <el-form-item
                            v-for="(domain, index) in dynamicValidateForm.domains"
                            :label="`点迹${index+1}`"
                            :key="'点迹' + index"
                            :prop="'domains.' + index + '.value'"
                    >
                        <el-input style="width: 35%;margin-right: 10px" v-model="domain.jd">
                            <i slot="suffix">经度</i>
                        </el-input>
                        <el-input style="width: 35%;margin-right: 10px" v-model="domain.wd">
                            <i slot="suffix">纬度</i>
                        </el-input>
                        <el-button type="danger" @click.prevent="removeDomain(domain)">删除</el-button>
                    </el-form-item>
                </el-col>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="jwdVisible = false">取 消</el-button>
            <el-button type="primary" @click="drawPolygon">确 定</el-button>
          </span>
        </el-dialog>
   
    </div>
</template>

<script>

export default {
    props: ["WebSocketData","FBnum","timeNow"],
	data() {
		return {
			dataInfo: {},
            name: '',
            FPS:0,
            flag:true,
            flag1:true,
            flag2:false,
            groupNum:'',
            NowTime:'',
            jwdVisible:false,
            dvStyle:{
                width:'300px',
                height:'300px',
                position:'absolute',
                border: '1px solid red',
                zIndex: 999999
            },
            imgWidth:"300",
            imgHeight:"300",
            dialogVisible:false,
            dvShow:false,
            // FBnum:0,
            dynamicValidateForm: {
                domains: [{
                    jd: "",
                    wd:"",
                    key: ""
                }],
            },
            lineId:[],
            menuData:{
			  '飞行曲线':'',
			  '浮标投放信息':'',
              '磁探探测目标':'',
              '浮标探测目标':''
           },
            menuDataType1:true,
            menuDataType2:true,
            menuDataType3:true,
            menuDataType4:true
		}
	},
	methods: {
        groupNow(){
            let that = this
            let groupNowNum = JSON.parse(sessionStorage.getItem('groupNum'))
            let id = sessionStorage.getItem("selectEd")
            if(groupNowNum){
                that.groupNum = groupNowNum
                setTimeout(function(){
                    let id = sessionStorage.getItem("selectEd")
                    let ptData = JSON.parse(sessionStorage.getItem("ptData"))
                    ptData.map(item => {
                        if(item.id == id) {
                            that.name = item.ptmc
                        }
                    })
                },500)
            }else{
                $.get(`${globalUrl.host}/find/findAllGroupName`).then(data => {
                    if(data){
                        data.map(item=>{
                            if(groupNowNum == item.groupNum){
                                that.groupNum = item.groupNum
                                that.name = item.ptmc+"架次" 
                            }else{
                                that.isShow = false 
                            }     
                        })
                    }else{
                        that.isShow = false 
                    }
                });
            }


        },
        CurentTime(time){
            var now = new Date(time);
            
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate();            //日
            
            var hh = now.getHours();            //时
            var mm = now.getMinutes();          //分
            var ss = now.getSeconds();           //秒
            
            var clock = year + "年";
            
            if(month < 10)
                clock += "0";
            
            clock += month + "月";
            
            if(day < 10)
                clock += "0";
                
            clock += day + "日" + '\xa0\xa0\xa0\xa0';
            
            if(hh < 10)
                clock += "0";
                
            clock += hh + ":";
            if (mm < 10) clock += '0'; 
            clock += mm + ":"; 
            
            if (ss < 10) clock += '0'; 
            clock += ss; 
            return(clock); 
        },
       
		getDataInfo() {
            let id = sessionStorage.getItem("selectEd")
            $.get(globalUrl.host+'/find/getWordIOFromServer',{id: id}).then(data => {
				this.dataInfo = data.strings
				this.name = data.fileName
            })
		},
		load() {
			let id = sessionStorage.getItem("selectEd")
			window.open(globalUrl.host+'/find/loadWordFile?fileName='+id)
		},
        clip(){
            this.dialogVisible = true;
        },
        setXy(){
            this.dialogVisible = false;
            this.dvStyle.width = this.imgWidth + "px";
            this.dvStyle.height = this.imgHeight + "px";
            this.dvShow = true;
            this.$message('截屏框自由拖动，双击截屏框完成截屏');
        },
        clipImg(){
            var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            // 更新canvas宽高
            $("#bg_canvas").attr("width", clientWidth);
            $("#bg_canvas").attr("height", clientHeight);
            $("#bg_canvas").hide();
                $("#bg_canvas").show();
                this.$nextTick(()=>{
                    clipScreenshots("bg_canvas",this.imgWidth,this.imgHeight);
                })
                this.dvShow = false
        },
        dataShow(flag2){
           this.flag2 = !flag2;          
        },	
        tool(flag){
            this.flag = !flag;
            this.$emit("mapTool",this.flag)  
        },
        controller(flag1){
            this.flag1 = !flag1;
            this.$emit("controller",this.flag1)  
        },
        tudeShow(){
            this.jwdVisible =true;
            this.dynamicValidateForm.domains=[{jd: "", wd:"", key: ""}];
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                jd: "",
                wd:"",
                key: Date.now()
            });
        },
        drawPolygon(){
            const that =this;
            let flag =true;
            let arr = [];
            if(!this.dynamicValidateForm.domains.length){
                that.$message.error('点迹不能为空！');
                return false
            }
            this.dynamicValidateForm.domains.map(s=>{
                if(flag){
                    if(s.jd=== ''){
                        that.$message.error('经度不能为空！');
                        flag =false;
                        return
                    }
                    if(s.wd=== ''){
                        that.$message.error('纬度不能为空！');
                        flag =false;
                        return
                    }
                    arr.push(Number(s.jd),Number(s.wd));
                }
            })
            arr.push(Number(this.dynamicValidateForm.domains[0].jd),Number(this.dynamicValidateForm.domains[0].wd))
            if(flag){
                this.jwdVisible = false;
                let id = Math.random().toFixed(10);
                window.Map.viewer.entities.add({
                    polyline : {
                        positions : new Cesium.CallbackProperty(function(){
                            return Cesium.Cartesian3.fromDegreesArray(arr)
                        },false),
                        width : 5,
                        material : Cesium.Color.AQUAMARINE,
                    },
                    id:id
                });
                this.lineId.push(id)
            }
        },
        clearLine(){
            this.lineId.map(s=>{
                window.Map.viewer.entities.removeById(s)
            })
            this.lineId=[]
        },
        showFPS(){ 
            let _this = this
            var requestAnimationFrame =  
                window.requestAnimationFrame || //Chromium  
                window.webkitRequestAnimationFrame || //Webkit 
                window.mozRequestAnimationFrame || //Mozilla Geko 
                window.oRequestAnimationFrame || //Opera Presto 
                window.msRequestAnimationFrame || //IE Trident? 
                function(callback) { //Fallback function 
                    window.setTimeout(callback, 1000/60); 
                }; 
            var e,pe,pid,fps,last,offset,step,appendFps; 
    
            fps = 0; 
            last = Date.now(); 
            step = function(){ 
                offset = Date.now() - last; 
                fps += 1; 
                if( offset >= 1000 ){ 
                last += offset; 
                appendFps(fps); 
                fps = 0; 
                } 
                requestAnimationFrame( step ); 
            }; 
            //显示fps; 如果未指定元素id，默认<body>标签 
            appendFps = function(fps){ 

                _this.FPS = fps

                // if(!e) e=document.createElement('span'); 
                // pe=pid?document.getElementById(pid):document.getElementsByTagName('body')[0]; 
                // e.innerHTML = "fps: " + fps; 
                // pe.appendChild(e); 
            } 
            return { 
                setParentElementId :  function(id){pid=id;}, 
                go          :  function(){step();} 
            } 
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item)
            if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1)
            }
        },
    },
     mounted() {
        let that = this
        setInterval(function(){
            that.NowTime  = that.CurentTime(that.timeNow);
        },1000);
         var dv = document.getElementById('dv');
         var x = 0;
         var y = 0;
         var l = 0;
         var t = 0;
         var isDown = false;
//鼠标按下事件
         dv.onmousedown = function(e) {
             //获取x坐标和y坐标
             x = e.clientX;
             y = e.clientY;

             //获取左部和顶部的偏移量
             l = dv.offsetLeft;
             t = dv.offsetTop;
             //开关打开
             isDown = true;
             //设置样式
             dv.style.cursor = 'move';
         }
//鼠标移动
         window.onmousemove = function(e) {
             if (isDown == false) {
                 return;
             }
             //获取x和y
             var nx = e.clientX;
             var ny = e.clientY;
             //计算移动后的左偏移量和顶部的偏移量
             var nl = nx - (x - l);
             var nt = ny - (y - t);

             dv.style.left = nl + 'px';
             dv.style.top = nt + 'px';
         }
//鼠标抬起事件
         dv.onmouseup = function() {
             //开关关闭
             isDown = false;
             dv.style.cursor = 'default';
         }
        $(".event-menu-checkbox[type=checkbox]+span").click((e) => {
            console.log($(e.target).html())
            if($(e.target).html()){
                    $(e.target).html('')
                    if($(e.target).data('type') == "飞行曲线"){
                        this.menuDataType1 = false
                        delete this.menuData[$(e.target).data('type')]
                        this.$emit('flagType1',this.menuDataType1)
                    }
                   if($(e.target).data('type') == "浮标投放信息"){
                        this.menuDataType2 = false
                        delete this.menuData[$(e.target).data('type')]
                        this.$emit('flagType2',this.menuDataType2)
                    }
                    if($(e.target).data('type') == "磁探探测目标"){
                        this.menuDataType3 = false
                        delete this.menuData[$(e.target).data('type')]
                        this.$emit('flagType3',this.menuDataType3)
                    }
                    if($(e.target).data('type') == "浮标探测目标"){
                        this.menuDataType4 = false
                        delete this.menuData[$(e.target).data('type')]
                        this.$emit('flagType4',this.menuDataType4)
                    }
                    
            }else{
                    this.menuData[$(e.target).data('type')] = ''
                    $(e.target).html('✔')
                     if($(e.target).data('type') == "飞行曲线"){
                        this.menuDataType1 = true
                        this.$emit('flagType1',this.menuDataType1)
                    }
                   if($(e.target).data('type') == "浮标投放信息"){
                        this.menuDataType2 = true
                        this.$emit('flagType2',this.menuDataType2)
                    }
                    if($(e.target).data('type') == "磁探探测目标"){
                        this.menuDataType3 = true
                        this.$emit('flagType3',this.menuDataType3)
                    }
                    if($(e.target).data('type') == "浮标探测目标"){
                        this.menuDataType4 = true
                        this.$emit('flagType4',this.menuDataType4)
                    }
            }
        })
    },
    watch: {

        FBnum: {
           handler:function(v){
               //debugger
               this.FBnum = v
           },
           deep: true
        }
    
        //   this.getAllDate()

     }, 
    created() {
       this.getDataInfo();
       this.groupNow();
      
    }

}
</script>

<style>
    .cms-nav {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 10;
        height: 86px;
        display: block;
        justify-content: flex-end;
        background: url(../../assets/header/nav.png) no-repeat;
        background-size: 100% 100%;
    }
    .cms-nav .cms-left{
       margin:0;
       float: left;
       text-align: center;
    }
    .cmsNav .menu{
        position: absolute;
        width: 134px;
        height: 210px;
        top: 53px;
        left: 29px;
        background-color: #102d58;
    }
    .menu{
        display: flex;
        justify-content: space-around;
        align-items: center
    }
    .menu p{
        color: #ffffff;
        font-size: 12px;
        position: relative;      
    }
    .event-menu-checkbox{
        display: none
    }
    .menu .event-menu-checkbox[type=checkbox]+span {
        display: flex;
        justify-content: center;
        align-items: center;
        /* border-radius: 12px; */
        width: 12px;
        height: 12px;
        font-size: 12px;
        border: 1px solid #8efffb;
        color: #8efffb;
        position: absolute;
        top: 19px;
        left: 10px;
        cursor: pointer;
    }
    .cms-nav .cms-left span{
        color: #27c1e9;;
        font-size: 12px;
        /* letter-spacing: 4px; */
        padding-left: 2px;
    }
    .cms-nav .cms-middle{
         margin:0;
         float: left;
         width: 28%;
         position: absolute;
         left: 35.4%;
    }
   .cmsNav ul{
        display: flex;
        padding: 0;
        margin: 0 auto;
        height: 52px;
    }
    .cms-middle ul{
        display: flex;
        margin: 0 auto;
        position: relative;
        justify-content: center;
    }
    .cms-middle ul li{
        position: relative;
        float: left;
        color: #80c1ed;
        list-style: none;
        margin: 0 10px;
        font-size: 12px;
        text-align: center;
        height: 52px;
        line-height: 52px;
    }
     .cms-middle ul li .time{
        border-right: 2px solid #29c7ee;;
        border-left: 2px solid #29c7ee;;
        padding: 0 15px;
        font-size: 16px;
        color: white;
    }
    .cms-middle ul li span{
        color: white;
    }
    .cmsNav ul li{
        float: left;
        color: #27c1e9;
        list-style: none;
        margin: 0 10px;
        font-size: 12px;
        text-align: center;
        height: 52px;
        line-height: 52px;
        background: url(../../assets/header/headerNav.png) no-repeat;
        background-size: 100% 100%;
        padding: 0 20px;
    }
    .cmsNav ul li .icon{
         display: inline-block;
        width: 16px;
        height: 15px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
        top: 2px;
        margin-right: 12px;   
    }
    .cmsNav ul li .icon1{
        background: url(../../assets/header/shuju.png);
    }
    .cmsNav ul li .icon2{
        background: url(../../assets/header/daochu.png);      
    }
    .cmsNav ul li .icon3{
        background: url(../../assets/header/dizhizhuanjingweidu.png);
        width: 17px;
        height: 17px;
    }
    .cmsNav ul li .icon4{
        background: url(../../assets/header/tuceng.png);   
        width: 18px;
        height: 17px;   
    }
    .cms-nav ul li .icon5{
        background: url(../../assets/header/biaohui.png);
    }
    .cmsNav ul li .icon6{
        background: url(../../assets/header/ic_jieping.png);      
    }
    .cmsNav ul li .icon7{
        background: url(../../assets/header/xinxi.png);      
    }
    .cms-middle ul li .feiji{
        background: url(../../assets/header/feiji.png);   
        display: inline-block;
        width: 19px;
        height: 18px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative; 
        top: 3px;
        margin-right: 5px;  
    }
    .cmsNav ul li .icon8{
        background: url(../../assets/header/jiantou.png);  
        width: 8px;
        height: 4px;
        top: -1px;
        margin-left: 9px;
        margin-right: 0;
    }
    .cms-middle ul li .fubiao{
        background: url(../../assets/header/fubiao1.png);
        display: inline-block;
        width: 22px;
        height: 18px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
        top: 3px;
        margin-right: 5px;      
    }
    .cms-middle ul li .group{
        background: url(../../assets/header/qianting1.png);   
        display: inline-block;
        width: 7px;
        height: 17px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative; 
        top: 3px;
        margin:0 10px;  
    }
    .cmsNav ul li span{
        display: inline;
     }
     .cmsNav ul li div{
        display: inline;
     }
    .cms-right{
        float: right;
        position: relative;
        color: white;
        margin:0;

    }
    .cmsNav li{
        cursor: pointer;
    }
</style>
