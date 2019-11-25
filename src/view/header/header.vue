<template>
    <div class="cms-nav">
        <div class="cmsNav cms-left">
            <ul>
                <li style="margin-left: 30px;" @click="dataShow(flag)"> 
                    <i class="icon icon1"></i>
                    <span>数据分析</span>
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
                <li><i class="zhinan"></i><span>N</span></li>
                <li><span class="time">{{NowTime}}</span></li>
                <li><i class="group"></i><span>{{groupNum}}</span></li>
            </ul>
        </div>
        <div class="cmsNav cms-right">
             <ul>
                <li @click="controller(flag1)"><i class="icon icon4"></i><span>图层控制</span></li>
                <li @click="tool(flag)"><i class="icon icon5"></i><span>绘图工具</span></li>
                <li @click="clip"><i class="icon icon6"></i><span>截屏</span></li>
                <li style="margin-right: 30px;"><i class="icon icon7"></i><span>FPS信息：{{FPS}}</span></li>
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
            <el-button type="primary" @click="addDomain">新增点</el-button>
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
	data() {
		return {
			dataInfo: {},
            name: '',
            FPS:0,
            flag:false,
            flag1:false,
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
            dynamicValidateForm: {
                domains: [{
                    jd: "",
                    wd:"",
                    key: ""
                }],
            }
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
        CurentTime(){ 
            var now = new Date();
            
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
			window.open(globalUrl.host+'/find/loadWordFile?fileName='+this.name)
		},
        clip(){
            this.dialogVisible = true;
            var redPolygon = window.Map.viewer.entities.add({
                name : 'Red polygon on surface',
                polygon : {
                    hierarchy : Cesium.Cartesian3.fromDegreesArray([-115.0, 37.0,
                        -115.0, 32.0,
                        -107.0, 33.0,
                        -102.0, 31.0,
                        -102.0, 35.0]),
                    material : Cesium.Color.RED
                }
            });
        },
        setXy(){
            this.dialogVisible = false;
            this.dvStyle.width = this.imgWidth + "px";
            this.dvStyle.height = this.imgHeight + "px";
            this.dvShow = true;
        },
        clipImg(){
            var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            // 更新canvas宽高
            $("#bg_canvas").attr("width", clientWidth);
            $("#bg_canvas").attr("height", clientHeight);
            $("#bg_canvas").hide();
            setTimeout(()=>{
                $("#bg_canvas").show();
                this.$nextTick(()=>{
                    clipScreenshots("bg_canvas",this.imgWidth,this.imgHeight);
                })
                this.dvShow = false
            },500)
        },
        dataShow(flag){
                      
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
            this.jwdVisible =true
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                jd: "",
                wd:"",
                key: Date.now()
            });
        },
        drawPolygon(){
            this.jwdVisible = false;
            let arr = [];
            this.dynamicValidateForm.domains.map(s=>{
                arr.push(Number(s.jd),Number(s.wd));
            })
            var redPolygon = window.Map.viewer.entities.add({
                 polygon : {
                     hierarchy : Cesium.Cartesian3.fromDegreesArray(arr),
                     material : Cesium.Color.BLUE.withAlpha(0.5)
                 }
            });
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
       this.showFPS().go();
       this.NowTime  = this.CurentTime();
        //   this.getAllDate()

     },
    watch: {
        WebSocketData: {
			handler:function(v) {
                console.log(v)
				v.map(item => {
					//浮标投放数据
					if(item.type == "FBTFSJ") {
						this.bulletinData = item.data
					}
				})
			},
			deep: true
		}
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
    .cms-nav .cms-left span{
        color: #27c1e9;;
        font-size: 12px;
        letter-spacing: 4px;
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
        background-color: #1a4283;
        padding: 0 20px;
        opacity: 0.7;
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
    .cms-middle ul li .zhinan{
        background: url(../../assets/header/zhinan.png);
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
        background: url(../../assets/header/group.png);   
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
</style>
