<template>
    <div class="cms-nav">
        <div class="cmsNav cms-left">
            <ul>
                <li style="margin-left: 30px;" @click="dataShow(flag2)"> 
                    <i class="icon icon1"></i>
                    <span>数据统计</span>
                    <i class="icon icon8"></i>
                    <div class="menu" v-show="flag2">
                        <el-checkbox-group v-model="menuData" @change="handleChecked"> 
                            <el-checkbox label="飞行曲线"></el-checkbox>
                            <el-checkbox label="浮标投放信息"></el-checkbox>
                            <el-checkbox label="磁探探测目标"></el-checkbox>
                            <el-checkbox label="浮标探测目标"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </li>
                <li>
                    <i class="icon icon2"></i>
                    <div class="export" @click="load">报告导出</div>
                </li>
                <li @click="optionShow(flag4)">
                    <i class="icon icon3"></i>
                    <span>参数设置</span>
                     <i class="icon icon8"></i>
                    <div class="menuOption" v-show="flag4" style="height:260px">
                        <p @click="tudeShow(tudeShow)">经纬度设置</p>
                        <p @click="plane">飞机轨迹</p>
                        <p @click="submarine">潜艇轨迹</p>
                        <p @click="tiles">高程模型</p>
                        <p @click="bigTarget">大量目标</p>
                        <p @click="tiles06">精确地图</p>
                        <p @click="airSafe">航空安全管道</p>
                    </div>
                </li>
                <li @click="geshi(flag5)">
                     <i class="icon icon9"></i>
                    <span>地图格式</span>
                     <i class="icon icon8"></i>
                    <div class="menuOption" v-show="flag5" style="left:478px;height:265px;">
                        <el-radio-group v-model="mapType" size="small" @change="mapType1(mapType)">
                            <el-radio label="haitu">海图格式</el-radio>
                            <el-radio label="shp格式">shp格式</el-radio>
                            <el-radio label="GeoTiff">GeoTiff格式</el-radio>
                            <el-radio label="png格式">png格式</el-radio>
                            <el-radio label="jysl格式">军用矢量格式</el-radio>
<!--                            <el-radio label="mercator">海图墨卡托投影</el-radio>-->
                        </el-radio-group>                      
                    </div>
                </li>
            </ul>
        </div>
        <div class="cms-middle">
            <ul>
                <li><i class="feiji"></i><span>1</span></li>
                <li><i class="fubiao"></i><span>{{FBnum}}</span></li>
                <li><span class="time">{{NowTime}}</span></li>
                <li><i class="group"></i><span>{{QTnum}}</span></li>
            </ul>
        </div>
        <div class="cmsNav cms-right">
             <ul>
                 <li @click="tyClick(flag5)" style="padding: 0 18px">
                     <i class="icon icon9"></i>
                     <span>投影方式</span>
                     <i class="icon icon8"></i>
                     <div class="menuOption" style="left:10px;height:270px;" v-show="tyShow">
                         <el-radio-group v-model="tyType" size="small" @change="tyChange(tyType)">
                              <el-radio label="mercator">墨卡托投影</el-radio>
                             <el-radio label="lanbote">兰伯特投影</el-radio>
                             <el-radio label="Bonner">伯纳投影</el-radio>
                             <el-radio label="StereoGraphic">球极平面投影</el-radio>
                             <el-radio label="Ronbinson">罗宾逊投影</el-radio>
                         </el-radio-group>
                     </div>
                 </li>
                <li style="padding: 0 18px" @click="planeLine"><i class="icon icon10"></i><span>飞行包线</span></li>
                <li style="padding: 0 18px" @click="controller(flag1)"><i class="icon icon4"></i><span>图层控制</span></li>
                <li style="padding: 0 18px" @click="tool(flag)"><i class="icon icon5"></i><span>绘图工具</span></li>
                <li style="padding: 0 18px" @click="events(flag3)"><i class="icon icon7"></i><span>事件悬浮面板</span></li>
                <!-- <li @click="clip"><i class="icon icon6"></i><span>截屏</span></li> -->
                <!--<li style="margin-right: 30px;"><i class="icon icon7"></i><span>FPS信息：{{FPS}}</span></li>-->
            </ul>
        </div>
        <el-dialog
            :visible.sync="planeVisible"
            width="60%"
            append-to-body
            top="21vh"
            class="planeDiv"
            >
            <div class="planeLine">
               <img src="../../assets/header/planeLine1.png" width="350px" height="200px" alt="1">
               <img src="../../assets/header/planeLine2.png" width="350px" height="200px" alt="2">
               <img src="../../assets/header/planeLine3.png" width="350px" height="200px" alt="3">
            </div>
        </el-dialog>
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
                :close-on-click-modal="false"
            >
                <div class="select-fs">
                    <span @click="selectFS('jwd')" :style="{'color':selectFs == 'jwd'?'red':'#eee','fontSize':'20px'}">经纬度格式（度）</span>
                    <span @click="selectFS('dfm')" :style="{'color':selectFs == 'dfm'?'red':'#eee','fontSize':'20px'}">经纬度格式（度分秒）</span>
                </div>
                <el-button style="margin-bottom: 15px" size="mini" type="danger" @click="clearLine">清除连线</el-button>
                <el-button style="margin-bottom: 15px" size="mini" type="danger" @click="query">查询</el-button>
                <div v-if="jwdType" style="max-height: 600px;overflow: auto">
                    <el-button size="mini" type="primary" @click="addDomain" style="margin-bottom: 10px">新增点</el-button>
                    <div class="demo-input-suffix" style="margin-left:7%;margin-bottom:15px">
                        航迹名称：
                        <el-input placeholder="请输入航迹名称"  v-model="hjName" style="width:40%;"> </el-input>
                    </div>
                    <el-form v-model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                        <el-col>
                            <el-form-item
                                    v-for="(domain, index) in dynamicValidateForm.domains"
                                    :label="`航迹点${index+1}`"
                                    :key="'航迹点' + index"
                                    :prop="'domains.' + index + '.value'"
                            >
                                 <el-input type='number' style="width: 35%;margin-right: 10px" v-model="domain.wd">
                                    <i slot="suffix">纬度</i>
                                </el-input>
                                <el-input type='number' style="width: 35%;margin-right: 10px;" v-model="domain.jd">
                                    <i slot="suffix">经度</i>
                                </el-input>
                               
                                <el-button type="danger" @click.prevent="removeDomain(domain)">删除</el-button>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </div>
                <div v-if="dfmType">
                    <div class="demo-input-suffix">
                        航迹名称：
                        <el-input placeholder="请输入航迹名称"  v-model="hjName" style="width:40%;"> </el-input>
                    </div>
                    <el-button size="mini" type="primary" @click="addDomain2" style="margin-bottom: 10px">新增点</el-button>
                    <el-form :model="dynamicValidateForm2" ref="dynamicValidateForm2" label-width="100px" class="demo-dynamic">
                        <el-col>
                            <li v-for="(domain, index) in dynamicValidateForm2.domains">
                                 <div style="margin: 5px 0">
                                    <span style="font-size: 16px;margin-right: 5px">纬度:{{index+1}}</span>
                                    <el-input size="small" style="width: 25%" type='number' v-model="domain.wd1"/>°
                                    <el-input size="small" style="width: 25%" type='number' v-model="domain.wd2"/>′
                                    <el-input size="small" style="width: 25%" type='number' v-model="domain.wd3"/>″
                                    <el-button size="small" type="danger" @click.prevent="removeDomain2(domain)">删除</el-button>
                                </div>
                                <div style="margin: 5px 0">
                                    <span style="font-size: 16px;margin-right: 5px">经度:{{index+1}}</span>
                                    <el-input size="small" style="width: 25%" type='number' v-model="domain.jd1"/>°
                                    <el-input size="small" style="width: 25%" type='number' v-model="domain.jd2"/>′
                                    <el-input size="small" style="width: 25%" type='number' v-model="domain.jd3"/>″
                                </div>
                            </li>
                        </el-col>
                    </el-form>
                </div>
            <span slot="footer" class="dialog-footer">
            <el-button @click="jwdVisible = false">取 消</el-button>
            <el-button type="primary" @click="drawPolygon">确 定</el-button>
          </span>
        </el-dialog>
         <el-dialog
                title="经纬度设置"
                :visible.sync="jingweiduVisible"
                width="50%"
                append-to-body
                :close-on-click-modal="false"
            >
             <el-table
                ref="singleTable"
                :data="tableData"
                border
                stripe
                 height="350"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%"> 
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form :model="props.row" label-position="left" inline class="demo-table-expand" v-for="(item,i) in props.row.hjds" >
                            <!-- <el-form-item label="序号" style="width:10%">
                                <span>{{ item.sx}}</span>
                            </el-form-item> -->
                             <el-form-item label="航迹点" style="width:10%">
                                <span>{{item.sx+1}}</span>
                            </el-form-item>
                            <el-form-item label="纬度" style="width:30%">
                                <el-input v-if="item.isOK" v-model="item.wd" style="width:100%;hight:100%"></el-input>
                                <span v-else @click="dbclick(item)">{{ item.wd}}</span>
                                <span></span>
                            </el-form-item>
                             <el-form-item label="经度" style="width:30%">
                                <el-input v-if="item.isOK" v-model="item.jd" style="width:100%;hight:100%"></el-input>
                                <span v-else @click="dbclick(item)">{{ item.jd }}</span>
                            </el-form-item>
                            <el-form-item style="width:15%" v-if="i===props.row.hjds.length-1">
                               <el-button type="primary" size="small" @click="drawPolygon1(props)">修改</el-button>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                label="航迹名称"
                prop="hjmc">
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                    </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="jingweiduVisible = false">取 消</el-button>
                <el-button type="primary" @click="jingweiduPolygon">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
                title="飞机轨迹"
                :visible.sync="feijiVisible"
                width="30%"
                append-to-body
                :close-on-click-modal="false"
            >
            <el-form :model="formInline" ref="formInline" label-width="100px" class="demo-dynamic" @submit.native.prevent>
                <el-form-item label="长度">
                    <el-input  type="number" v-model="formInline.len" placeholder="请输入飞机轨迹长度" @keyup.enter.native="feijiPolygon"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="feijiVisible = false">取 消</el-button>
            <el-button type="primary" @click="feijiPolygon">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog
                title="潜艇轨迹"
                :visible.sync="dunkerVisible"
                width="30%"
                append-to-body
                :close-on-click-modal="false"
            >
            <el-form :model="form" ref="form" label-width="100px" class="demo-dynamic" @submit.native.prevent>
                <el-form-item label="长度">
                    <el-input  type="number" v-model="form.len" placeholder="请输入潜艇轨迹长度" @keyup.enter.native="dunkerPolygon"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dunkerVisible = false">取 消</el-button>
            <el-button type="primary" @click="dunkerPolygon">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
import Params from "../../assets/map/params.js";
import ParamsQT from "../../assets/map/paramsQT.js";
import CMap from "../../assets/map/CMap.js"
export default {
    props: ["WebSocketData","FBnum","timeNow","eventsF","QTnum"],
	data() {
		return {
			dataInfo: {},
            name: '',
            FPS:0,
            flag:true,
            flag1:true,
            flag2:false,
            flag3:true,
            flag4:false,
            flag5:false,
            groupNum:'',
            NowTime:'',
            jwdVisible:false,
            feijiVisible:false,
            dunkerVisible:false,
            planeVisible:false,
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
            //FBnum:0,
            dynamicValidateForm: {
                domains: [{
                    jd: "",
                    wd:"",
                    key: ""
                }],
            },
            dynamicValidateForm2: {
                domains: [{
                    jd1: "",
                    jd2: "0",
                    jd3: "0",
                    wd1:"",
                    wd2:"0",
                    wd3:"0",
                    key: ""
                }],
            },
            lineId:[],
        //     menuData:{
		// 	  '飞行曲线':'',
		// 	  '浮标投放信息':'',
        //       '磁探探测目标':'',
        //       '浮标探测目标':''
        //    },
            menuData:['飞行曲线','浮标投放信息','磁探探测目标','浮标探测目标'],
            formInline: {
                len: ''
            },
            form: {
                len: ''
            },
            mapType:'haitu',
            tyType:"",
            selectFs:'jwd',
            jwdType:true,
            dfmType:false,
            hjName:'',
            tableData:[],
            jingweiduVisible:false,
            handleCurrentData:{},
            tilesShow:false,
            tyShow:false,
            //QTnum:0
		}
	},
	methods: {
        handleChecked(menuData){
            this.$emit('flagType',this.menuData)
        },
        tyChange(s){
            window.Map.viewerImagery['shp格式'].show = false;
            window.Map.viewerImagery['GeoTiff'].show = false;
            window.Map.viewerImagery['png格式'].show = false;
            window.Map.viewerImagery['jysl格式'].show = false;
            window.Map.viewerImagery['lanbote'].show = false;
            window.Map.viewerImagery['Bonner'].show = false;
            window.Map.viewerImagery['mercator'].show = false;
            window.Map.viewerImagery['haitu'].show = false
            window.Map.viewerImagery['StereoGraphic'].show = false;
            if(s == "Ronbinson"){

            } else {
                window.Map.viewerImagery[s].show = true;
            }
        },
        mapType1(mapType){
            window.Map.viewerImagery['haitu'].show = false
            window.Map.viewerImagery['shp格式'].show = false
            window.Map.viewerImagery['GeoTiff'].show = false
            window.Map.viewerImagery['png格式'].show = false
            window.Map.viewerImagery['jysl格式'].show = false
           
            window.Map.viewerImagery[mapType].show = true  
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
        airSafe(){
            var airSafe = window.Map.viewer.entities.getById('航空安全管道');
            airSafe.show = !airSafe.show;
            if(airSafe.show){
                window.Map.Tool.FlyTo([110, 35, 4000000]);
            }
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
        planeLine(){
          this.planeVisible = !this.planeVisible
        },
        dataShow(flag2){
           this.flag2 = !flag2;   
           this.flag4 = false;     
           this.flag5 = false; 
           this.tyShow = false;   
        },
        optionShow(flag4){
            this.flag4 = !flag4; 
            this.flag2 = false;     
            this.flag5 = false; 
            this.tyShow = false;  
        },	
        geshi(flag5){
            this.flag5 = !flag5
            this.flag2 = false;     
            this.flag4 = false; 
            this.tyShow = false;  
        },
        tool(flag){
            this.flag = !flag;
            this.$emit("mapTool",this.flag)  
        },
        controller(flag1){
            this.flag1 = !flag1;
            this.$emit("controller",this.flag1)  
        },
        events(flag3){
            this.flag3 = !flag3;
            this.$emit("events",this.flag3)  
        },
        tyClick(){
             this.flag4 = false; 
            this.flag2 = false;     
            this.flag5 = false; 
            this.tyShow = !this.tyShow
        },
        tudeShow(){
            this.jwdVisible =true;
            this.dynamicValidateForm.domains=[{jd: "", wd:"", key: ""}];
            this. dynamicValidateForm2.domains=[{jd1: "",jd2: "0",jd3: "0",wd1:"",wd2:"0",wd3:"0",key: ""}];           
        },
        plane(){
            this.feijiVisible = true;
        },
        submarine(){
            this.dunkerVisible = true;
        },
        tiles(){
            this.tilesShow = true;
            if(this.tilesShow){

                // window.Map.viewer.scene.primitives.add(Tileset)
                window.Map.viewer.zoomTo(window.Map.Tileset._primitives[5])
                window.Map.Tileset._primitives[5].show = this.tilesShow
            }
           
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                jd: "",
                wd:"",
                key: Date.now()
            });
        },
        addDomain2(){
            this.dynamicValidateForm2.domains.push({
                jd1: "",
                jd2: "0",
                jd3: "0",
                wd1:"",
                wd2:"0",
                wd3:"0",
                key: Date.now()
            });
        },
        feijiPolygon(){
            if(!Number(this.formInline.len)){
                this.$message.error('飞机轨迹长度不能为空！');
                return false
            }
            if(!(Number(this.formInline.len) < 5000)){
                this.$message.error('飞机轨迹长度不能大于5000！');
                return false
            }
            window.Map.FlyCompare.ClearPath();
            Params.path.len = Number(this.formInline.len)
            this.feijiVisible = false;
        },
        dunkerPolygon(){
            if(!Number(this.form.len)){
                this.$message.error('潜艇轨迹长度不能为空！');
                return false
            }
            if(!(Number(this.form.len) < 5000)){
                this.$message.error('潜艇轨迹长度不能大于5000！');
                return false
            }
            window.Map.FlyCompare.ClearPath();
            ParamsQT.path.len = Number(this.form.len)
            this.dunkerVisible = false;
        },
        drawPolygon(){
            const that =this;
            if(that.hjName == ""){
                that.$message.error('航迹线名称不能为空！');
                return false
            }
            if(this.jwdType){
                let flag =true;
                let arr = [];
                let arrhjds=[];
                if(!this.dynamicValidateForm.domains.length){
                    that.$message.error('航迹点不能为空！');
                    return false
                }
                this.dynamicValidateForm.domains.map((s,index)=>{
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
                        let hjjwd = {
                            hjxid:null,
                            jd:Number(s.jd),
                            sx:index,
                            wd:Number(s.wd)
                        }
                        arrhjds.push(hjjwd)
                    }
                })
                arr.push(Number(this.dynamicValidateForm.domains[0].jd),Number(this.dynamicValidateForm.domains[0].wd))
                if(flag){
                    this.jwdVisible = false;
                    let id = Math.random().toFixed(10);
                    let entity = window.Map.viewer.entities.add({
                        position:Cesium.Cartesian3.fromDegrees(arr[0],arr[1]),
                        point: {
                            color: Cesium.Color.RED,    //点位颜色
                            pixelSize: 5               //像素点大小
                        },
                        label:{
                            show:true,
                            text:that.hjName,
                            font:'24px Helvetica',
                            fillColor:Cesium.Color.BLUE,
                            style: Cesium.LabelStyle.FILL,        //label样式
                            horizontalOrigin : Cesium.HorizontalOrigin.LEFT,//水平位置
                            verticalOrigin : Cesium.VerticalOrigin.CENTER,//垂直位置
                            pixelOffset:new Cesium.Cartesian2(10,20)  //偏移
                        },
                        polyline : {
                            positions : new Cesium.CallbackProperty(function(){
                                return Cesium.Cartesian3.fromDegreesArray(arr)
                            },false),
                            width : 5,
                            material : Cesium.Color.AQUAMARINE,
                        },
                        id:id,
                        type:"fksbq",
                        name:that.hjName
                    });
                    this.lineId.push(id)
                    window.Map.viewer.zoomTo(entity)//居中显示

                    let hjx = {
                        hjds:arrhjds,
                        hjmc:that.hjName,
                        id:null
                    }
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: `${globalUrl.host}/hjx/addHJX`,
                        contentType: "application/json;charset=UTF-8",//指定消息请求类型
                        data:JSON.stringify(hjx),//将js对象转成json对象
                        success: function (data) {
                            if(data == 0){
                                that.$message.error('保存航迹线失败！');
                            }
                            if(data == 1){
                                that.$message.success('保存航迹线成功！')
                            }
                            if(data == 2){
                                that.$message.error('航迹线名称重复！');
                            }
                        }
                    })
                }
            } else if(this.dfmType){
                let flag2 =true;
                let arr2 = [];
                let arrhjds2=[];
                if(!this.dynamicValidateForm2.domains.length){
                    that.$message.error('航迹点不能为空！');
                    return false
                }
                this.dynamicValidateForm2.domains.map((s,index)=>{
                    if(flag2){
                        if(s.jd1 === '' || s.jd2 === '' || s.jd3 === ''){
                            that.$message.error('经度不能为空！');
                            flag2 =false;
                            return
                        }
                        if(s.wd1 === '' || s.wd2 === '' || s.wd3 === ''){
                            that.$message.error('纬度不能为空！');
                            flag2 =false;
                            return
                        }
                        arr2.push(Number(s.jd1)  + Number(s.jd2/60) + Number(s.jd3/3600),Number(s.wd1) + Number(s.wd2/60) + Number(s.wd3/3600));
                        arrhjds2.push({
                            hjxid:null,
                            jd:Number(s.jd1)  + Number(s.jd2/60) + Number(s.jd3/3600),
                            sx:index,
                            wd:Number(s.wd1) + Number(s.wd2/60) + Number(s.wd3/3600)
                        })
                    }
                })

                let qd = this.dynamicValidateForm2.domains[0];
                arr2.push(Number(qd.jd1) + Number(qd.jd2/60) + Number(qd.jd3/3600),Number(qd.wd1) + Number(qd.wd2/60) + Number(qd.wd3/3600));
                if(flag2){
                    this.jwdVisible = false;
                    let id = Math.random().toFixed(10);
                    let entity = window.Map.viewer.entities.add({
                        position:Cesium.Cartesian3.fromDegrees(arr2[0],arr2[1]),
                        point: {
                            color: Cesium.Color.RED,    //点位颜色
                            pixelSize: 5               //像素点大小
                        },
                        label:{
                            show:true,
                            text:that.hjName,
                            font:'24px Helvetica',
                            fillColor:Cesium.Color.BLUE,
                            style: Cesium.LabelStyle.FILL,        //label样式
                            horizontalOrigin : Cesium.HorizontalOrigin.LEFT,//水平位置
                            verticalOrigin : Cesium.VerticalOrigin.CENTER,//垂直位置
                            pixelOffset:new Cesium.Cartesian2(10,20)  //偏移
                        },
                        polyline : {
                            positions : new Cesium.CallbackProperty(function(){
                                return Cesium.Cartesian3.fromDegreesArray(arr2)
                            },false),
                            width : 5,
                            material : Cesium.Color.AQUAMARINE,
                        },
                        id:id,
                        name:that.hjName
                    });
                    this.lineId.push(id)
                    window.Map.viewer.zoomTo(entity)//居中显示
                    let hjxS = {
                        hjds:arrhjds2,
                        hjmc:that.hjName,
                        id:null
                    }
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: `${globalUrl.host}/hjx/addHJX`,
                        contentType: "application/json;charset=UTF-8",//指定消息请求类型
                        data:JSON.stringify(hjxS),//将js对象转成json对象
                        success: function (data) {
                            if(data == 0){
                                that.$message.error('保存航迹线失败！');
                            }
                            if(data == 1){
                                that.$message.success('保存航迹线成功！')
                            }
                            if(data == 2){
                                that.$message.error('航迹线名称重复！');
                            }
                        }
                    })
                }
            }
        },
        drawPolygon1(data){
            
            console.log(data.row)
            let that = this
           $.ajax({
                type: "POST",
                dataType: "json",
                url: `${globalUrl.host}/hjx/addHJX`,
                contentType: "application/json;charset=UTF-8",//指定消息请求类型
                data:JSON.stringify(data.row),//将js对象转成json对象
                success: function (data) {
                    if(data == 0){
                        that.$message.error('保存航迹线失败！');
                    }
                    if(data == 1){
                        that.$message.success('保存航迹线成功！')
                    }
                    if(data == 2){
                        that.$message.error('航迹线名称重复！');
                    }
                }
            })
        },
        addHJX(){
            const that =this;
            if(that.hjName == ""){
                that.$message.error('航迹线名称不能为空！');
                    return false
            }
             if(that.jwdType){

                let flag =true;
                let arrhjds= [];
                if(!this.dynamicValidateForm.domains.length){
                    that.$message.error('航迹点不能为空！');
                    return false
                }
                this.dynamicValidateForm.domains.map((s,index)=>{
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
                        //arr.push(Number(s.jd),Number(s.wd));
                        let hjjwd = {
                            jd:s.jd,
                            sx:index,
                            wd:s.wd
                        }
                        arrhjds.push(hjjwd)
                    }
                })
                console.log(arrhjds)
                let hjx = {
                    hjds:arrhjds,
                    hjmc:that.hjName,
                    id:null
                }
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: `${globalUrl.host}/hjx/addHJX`,
                    contentType: "application/json;charset=UTF-8",//指定消息请求类型
                    data:JSON.stringify(hjx),//将js对象转成json对象
                    success: function (data) {
                       if(data == 0){
                            that.$message.error('保存航迹线失败！');
                        }
                        if(data == 1){
                            that.$message.success('保存航迹线成功！')
                        }
                        if(data == 2){
                            that.$message.error('航迹线名称重复！');
                        }
                    }
                })
             }else if(this.dfmType){
                let flag2 =true;
                let arr2hjds = [];
                if(!this.dynamicValidateForm2.domains.length){
                    that.$message.error('航迹点不能为空！');
                    return false
                }
                this.dynamicValidateForm2.domains.map((s,index)=>{
                    if(flag2){
                        if(s.jd1 === '' || s.jd2 === '' || s.jd3 === ''){
                            that.$message.error('经度不能为空！');
                            flag2 =false;
                            return
                        }
                        if(s.wd1 === '' || s.wd2 === '' || s.wd3 === ''){
                            that.$message.error('纬度不能为空！');
                            flag2 =false;
                            return
                        }
                        //arr2.push(Number(s.jd1)  + Number(s.jd2/60) + Number(s.jd3/3600),Number(s.wd1) + Number(s.wd2/60) + Number(s.wd3/3600));
                        let hjjwd = {
                            hjxid:null,
                            jd:Number(s.jd1)  + Number(s.jd2/60) + Number(s.jd3/3600),
                            sx:index,
                            wd:Number(s.wd1) + Number(s.wd2/60) + Number(s.wd3/3600)
                        }
                        arr2hjds.push(hjjwd)
                    }
                })
                 let hjx = {
                    hjds:arr2hjds,
                    hjmc:that.hjName,
                    id:null                  
                }
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: `${globalUrl.host}/hjx/addHJX`,
                    contentType: "application/json;charset=UTF-8",//指定消息请求类型
                    data:JSON.stringify(hjx),//将js对象转成json对象
                    success: function (data) {
                       if(data == 0){
                            that.$message.error('保存航迹线失败！');
                        }
                        if(data == 1){
                            that.$message.success('保存航迹线成功！');

                        }
                        if(data == 2){
                            that.$message.error('航迹线名称重复！');
                        }
                    }
                }) 
             }

        },
        jingweiduPolygon(){
            if(this.handleCurrentData == null || Object.keys(this.handleCurrentData).length == 0){
                this.jingweiduVisible = false;
                return;
            }
            if(this.handleCurrentData.id != ""){
                if(this.handleCurrentData.hjds.length >0){
                    let arr = []
                    this.handleCurrentData.hjds.map(item=>{
                        arr.push(Number(item.jd),Number(item.wd))
                    }) 
                    arr.push(Number(this.handleCurrentData.hjds[0].jd),Number(this.handleCurrentData.hjds[0].wd))
                    this.jwdVisible = false;
                    this.jingweiduVisible = false;
                    let id = Math.random().toFixed(10);
                    let entity = window.Map.viewer.entities.add({
                        position:Cesium.Cartesian3.fromDegrees(arr[0],arr[1]),
                        point: {
                            color: Cesium.Color.RED,    //点位颜色
                            pixelSize: 5               //像素点大小
                        },
                        label:{
                            show:true,
                            text:this.handleCurrentData.hjmc,
                            font:'24px Helvetica',
                            fillColor:Cesium.Color.BLUE,
                            style: Cesium.LabelStyle.FILL,        //label样式
                            horizontalOrigin : Cesium.HorizontalOrigin.LEFT,//水平位置
                            verticalOrigin : Cesium.VerticalOrigin.CENTER,//垂直位置
                            pixelOffset:new Cesium.Cartesian2(10,20)  //偏移
                        },
                        polyline : {
                            positions : new Cesium.CallbackProperty(function(){
                                return Cesium.Cartesian3.fromDegreesArray(arr)
                            },false),
                            width : 5,
                            material : Cesium.Color.AQUAMARINE,
                        },
                        id:id,
                        type:"fksbq",
                        name:this.handleCurrentData.hjmc
                    });
                    this.lineId.push(id)
                    window.Map.viewer.zoomTo(entity)//居中显示     
                }
            }
        },
        handleDelete(val,row){
            console.log(val,row)
            let that =this
            $.ajax({
                type: "get",
                dataType: "json",
                url: `${globalUrl.host}/hjx/deleteHJX`,
                contentType: "application/json;charset=UTF-8",//指定消息请求类型
                data:{
                    hjxid:row.id
                },
                success: function (data) {
                    if(data){
                        that.query();
                        window.Map.viewer.entities.values.map(s=>{
                            if(s.name == row.hjmc){
                                window.Map.viewer.entities.remove(s)
                            }
                        })
                    }else{
                        that.$message.error('删除失败！');
                    }
                }
            })
        },
        query(){
            let that =this
            $.ajax({
                type: "get",
                dataType: "json",
                url: `${globalUrl.host}/hjx/findHJX`,
                contentType: "application/json;charset=UTF-8",//指定消息请求类型
                success: function (data) {
                    that.jingweiduVisible = true
                    data.map(item=>{
                        item.hjds.map(index=>{
                            that.$set(index, 'isOK', false)
                        })
                        
                    })
                    that.tableData = data
                    console.log( that.tableData )
                }
            })
        },
        handleCurrentChange(val){
            this.handleCurrentData = val
        },
        
        dbclick(row){
            row.isOK =!row.isOK
        },
        clearLine(){
            this.lineId.map(s=>{
                window.Map.viewer.entities.removeById(s) //删除
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
        removeDomain2(item) {
            var index = this.dynamicValidateForm2.domains.indexOf(item)
            if (index !== -1) {
                this.dynamicValidateForm2.domains.splice(index, 1)
            }
        },
        selectFS(str){
            this.selectFs = str;
            if(str == 'jwd'){
                this.jwdType = true;
                this.dfmType = false;
            }
            if(str == 'dfm'){
                this.jwdType = false;
                this.dfmType = true;
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
    },
    watch: {

        FBnum: {
           handler:function(v){
               this.FBnum = v
           },
           deep: true
        },
        QTnum:{
            handler:function(v){
               this.QTnum = v
           },
           deep: true
        },
        eventsF:{
            handler:function(v){
               this.flag3 = v
           },
           deep: true
        }
     }, 
    created() {
       this.getDataInfo();
       window.Map
    }

}
</script>

<style>
    .cms-nav {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 1;
        height: 85px;
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
        width: 137px;
        height: 220px;
        top: 53px;
        left: 29px;
        background-color: #102d58;
        text-align: left;
        /* padding-left: 20px; */
    }
     .cmsNav .menu .el-checkbox {
        cursor: pointer;
        margin-right: 0;
        width: 100%;
        padding-left: 20px;
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
    .menuOption{
        position: absolute;
        width: 117px;
        height: 157px;
        top: 53px;
        left: 323px;
        background-color: #102d58;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: left;
        padding-left: 20px;
    }
    .cms-nav .cms-left span{
        color: #27c1e9;;
        font-size: 12px;
        /* letter-spacing: 4px; */
        padding-left: 2px;
    }
    .cms-nav .cms-right span{
        color: #27c1e9;;
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
        cursor: pointer;
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
        background: url(../../assets/header/chilun.png);
        width: 19px;
        height: 19px;
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
    .cmsNav ul li .icon9{
        background: url(../../assets/header/ic_jieping.png);
        width: 17px;
        height: 17px;
    }
    .cmsNav ul li .icon10{
        background: url(../../assets/header/zhinanzhen.png);      
        width: 19px;
        height: 19px;
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
    /* .cmsNav ul li span{
        display: inline;
     } */
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
    .planeDiv .el-dialog{
        background: rgba(8, 38, 93, 0.6);
    }
    .planeLine{
        margin-bottom: 30px
    }
    .planeLine img{
       margin-right: 20px;
    }
    .planeDiv .el-dialog__body {
        padding: 30px 10px 30px 20px;
   }
    .el-radio__input{
       display:inline-flex !important;
     }
    li{
        list-style: none;
    }
    .el-form--inline .el-form-item {
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle !important;
        width: 25%;
        margin-bottom:0px !important;
    }
</style>
