
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#hinge-msg {
  display: none;
  position: fixed;
  z-index: 1000000;
  top: 20px;
  font-size: 24px;
  left: 20px;
  color: rgb(142, 255, 251);
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
}
.cms-top span {
  pointer-events: all;
  cursor: pointer;
}
.foot {
  display: none;
}
.cesium-timeline-icon16 {
  height: 100px;
  padding: 0px;
  /* background: rgba(49, 172, 255, 0.89); */
  /* position:fixed !important;
    bottom: 30px !important; */
  background: url(../assets/icon4.png) no-repeat !important;
  left: 8px;
  background-size: 100% 100% !important;
  width: 13px;
  height: 15px;
}
.cesium-infoBox {
  top: 30px !important;
}
.cesium-infoBox-title {
  background: rgb(20, 73, 122) !important;
}
.vis-item-content {
  padding: 0px !important;
}
.vis-box {
  background: rgba(0, 0, 0, 0);
  border: none;
  color: rgba(0, 0, 0, 0);
  margin: 0px !important;
}
.infoContainer {
  position: fixed;
  top: 0;
  right: 20px;
  color: red;
}
#visualization {
  /* height: 500px; */
  width: 80% !important;
  top:20px;
  bottom: 48px;
  /* width: 80%; */
  position: absolute;
  z-index: 100000;
  /* padding-bottom: 27px; */
  /* background: red; */
}
#visualization .vis-timeline,#visualization .vis-vertical{
  border: none
}
/* .bottonContainer {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 160px;
  left: 20px;

  background-size: 100% 100% !important;
} */
setTime.icon-bigdiv {
  background: url(../assets/time_1.png) no-repeat !important;
  background-size: 100% 100% !important;
}
.bottonContainer button {
  margin: 0 5px;
  border: none;
  /* background: url(../assets/time_1.png) no-repeat!important; */
  background-size: 100% 100% !important;
  padding: 0px 0px;
  /* border:2px solid rgba(86, 176, 228, 0.774); */
  /* outline:2px solid #ffffff; */
  color: #ffffff;
}
.infoContainer {
  position: fixed;
  bottom: 0;
  left: 300px;
}
#mapElement {
  position: fixed;
  width: 100%;
  height: 100%;
}
.xdDate {
  position: absolute;
  /* bottom: 100px; */
  z-index: 100000;

  color: #ffffff;
}
.cesium-viewer-timelineContainer,
.cesium-viewer-zoomIndicatorContainer {
  /* width: 90%; */
  bottom: 30px;
  /* left: 5% !important; */
  overflow: hidden;
}
#xdsj {
    position: relative;
    width: calc(100% - 370px);
    overflow: hidden;
    margin: 0 auto;
    /* position: absolute; */
    height: 13px;
    /* left: 5% !important; */
    top: 15px;
    background-color: #2c9deab3;
    border-radius: 3px;
}
.time_bg {
  width: calc(100% - 20px);
  position: absolute;
  height: 100px;
  bottom: 0;
  background: url(../assets/time_bg.png) no-repeat;
  background-size: 100% 100%;
  z-index: 3;
  padding: 0 10px 0 11px;
  overflow: hidden;
}
#progress{
    width: 0%;
    background-color: #1fcbda;
    height: 13px;
    position: fixed;
    bottom: 59px;
    left: 192px;
}
.cesium-viewer-timelineContainer {
  position: fixed !important;
  z-index: 10000000 !important;
  left: 10px !important;
  right: 10px !important;
  width: 80%;
  height: 15px;
  margin: 0 auto;
  bottom:47px;
}
.cesium-timeline-main{
  border:none !important;
}
.cesium-timeline-bar {
  /* background: url(../assets/time_1.png) no-repeat !important; */
  background-size: 100% 100% !important;
  height: 15px;
  background: #2c9deab3 !important;
  border-radius: 3px;
}
.cesium-timeline-ticTiny{
background: none !important;
}
.cesium-timeline-ticSub{
  background: none !important;
}
.cesium-timeline-ticMain{
  background: none !important;
}
.cesium-timeline-ticLabel{
  display: none;
}
.line-chart {
  position: fixed !important;
  top: 80px;
  right: 0px;
}

.rangeSetterContainer {
  position: fixed;
}
.rangeSetterContainer input {
  padding: 2px;
}
.seamless-warp{
  position: fixed !important;
  bottom: 22%;
  right: 50px;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 222px;
}
.notify{
  background: url(../assets/notify.png) no-repeat;
  background-size: 100% 100%;
  width: 222px;
  height: 110px;
  position: relative;

}
.notify div{
    position: relative;
    top: 20px;
    left: 20px;
}
.notify div p{
  color:#ffffff;
  font-size:12px;
  margin: 10px 0;
}
.notify div p span:first-child{
  margin-right: 20px;
}
.MBCS{
  position: fixed !important;
  top: 60px;
  right: 45px;
  height: 237px;
  overflow: hidden;
  width: 300px;
  background: url(../assets/mbcs.png) no-repeat;
  background-size: 100% 100%;
}
.MBCS .close {
		position: absolute;
		top: 10px;
		right: 20px;
		padding: 0;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
    cursor: pointer;
    color: #fff;
  }
.MBCS .nav {
  	position: absolute;
    top: 0;
    font-size: 14px;
    font-weight: 500;
    left: 37%;
    width: 28%;
    height: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;
  }
  .MBCS .cont{
	  position: absolute;
    top: 58px;
    font-size: 14px;
    font-weight: 500;
    left: 15px;
    width: 70%;
    color: #fff;
  }
  .MBCS .cont ul {
    margin: 0;
    padding: 0;
  }
  .cont ul li {
    list-style: none;
    margin: 5px;
  }
  .cont ul li span:first-child{
    width: 80px;
    /* text-align: right; */
    /* margin-right: 20px; */
    display: inline-block;
  }

/* .icons{
    border: none;
}
.icon-Play{
    background: url(../assets/icon/Play.png) no-repeat!important;
    width: 12px;
    height: 12px;
} */
.time-label{
    width: 346px;
    height:168px;
    background: red;
    position: fixed;
    z-index: 100000000;
    background: url(../assets/icon/小标牌.png) no-repeat!important;
    pointer-events: none;
    display: flex;
    justify-content: flex-end;
}
.time-label ul{
    font-size:14px; 
    color: #37bdff;
    list-style: none;
    margin-top: 10px
}
.time-label ul span{
    font-size:12px; 
    color: #ffffff
}
.time-label ul li {
    margin: 5px
}
.events-btn{
    display: flex;
    justify-content: space-around;
}
.events-btn div{
  width: 70px;
	height: 35px;
	background: url(../assets/icon/按钮.png) no-repeat!important;
	background-size: 100% 100%!important;
	display: flex;
	font-size: 14px;
	justify-content: center;
	align-items: center;
	color:#8efffb;
	margin: 0 10px;
	cursor: pointer;
    pointer-events: all;
}
.time-label input{
    width: 125px;
    pointer-events: all;
    background: url(../assets/icon/login.png) no-repeat!important;
	  background-size: 100% 100%!important;
    padding: 2px;
    color: #8efffb;
    border: none;
    height: 24px;
    
}
.time-label .el-date-editor.el-input, .el-date-editor.el-input__inner{
   width: 130px !important;
}
.time-label .el-input--prefix .el-input__inner{
   padding: 0 !important;
}
.time-label .el-input--suffix .el-input__inner{
   padding-left: 22px !important;
}
.time-label .el-input__prefix{
  top: -8px !important;
  left:0 !important;
}
.timeLineZZ{
  position: fixed;
  background: #8fcdf7b3;
  height: 15px;
  z-index: 10000001;
  bottom: 47px;
  width: 80%;
  max-width: 80%;
}
.cesium-viewer-toolbar{
  top:110px;
  right:50px
}
</style>

<template>
  <div class="MapContainer">
    <login @login="login" v-if="!loginFs" v-show="loginF"></login>
    <gis-header :timeNow="timeNow"
      @flagType="flagType"
      @mapTool="maptool"
      @controller="controller"
      @events="events"
      @feijiPolygon="feijiPolygon"
      :WebSocketData="WebSocketData"
      :FBnum="FBnum"
      :eventsF="eventsF"></gis-header>
    <div id="mapElement">
      <div class="time_bg">
        <div id="timeDiv"></div>
         <div id="progress" :style="'width:'+ widthNum +''"></div>
         <div :style="setZZStyle" class="timeLineZZ"></div>
        <div id="visualization" :style="visStyle"></div>
        <span style="position: absolute;right:80px;color:#fff;top:40px">FPS : {{FPS}}</span>
        <p style="margin:35px 0 0 35px;color:#ffffff">当前播放倍数：{{getNum()}}</p>
      </div>
    </div>
    <div class="seamless-warp" id='mySeamless' style="background: rgba(8, 38, 93, 0.5)" v-show="eventsF">
      <div class="notifyDiv myMsgList" :data="notifyList"> 
        <div @click="toPosition(item)" :style="{'height':item.typeall === 'FBSJ'?'160px':'130px'}" class="notify" v-for="(item, i) in notifyList " :key="i">
          <div   v-if="item.typeall === 'FBSJ'" >
            <p>
              <span>事件</span><span style="color:#ffd400">浮标投放</span>
            </p>
            <p>
              <span>时间</span><span>{{item["sb"]?item["sb"].split('.')[0]:item["sb"]}}</span>
            </p>
            <p>
              <span>编号</span><span>{{item["fbbh"]}}</span>
            </p>
            <p>
              <span>经度</span><span class="fbtfJd">{{item["llcrswzjd"]}}</span>
            </p>
            <p>
              <span>纬度</span><span class="fbtfWd">{{item["llcrswzwd"]}}</span>
            </p>
          </div>
          <div  v-if="item.typeall === 'CTMBSJ'">
            <p>
              <span>事件</span><span style="color:#ffd400">磁探发现目标</span>
            </p>
            <p>
              <span>时间</span><span>{{item["mbsj"]?item["mbsj"].split('.')[0]:item["mbsj"]}}</span>
            </p>
            <p>
              <span>经度</span><span>{{item["mbjd"]}}</span>
            </p>
            <p>
              <span>纬度</span><span>{{item["mbwd"]}}</span>
            </p>
          </div>
          <div  v-if="item.typeall === 'FBMBSJ'">
            <p>
              <span>事件</span><span style="color:#ffd400">浮标发现目标</span>
            </p>
            <p>
              <span>时间</span><span>{{item["mbsj"]?item["mbsj"].split('.')[0]:item["mbsj"]}}</span>
            </p>
            <p>
              <span>经度</span><span>{{item["mbwzjd"]}}</span>
            </p>
            <p>
              <span>纬度</span><span>{{item["mbwzwd"]}}</span>
            </p>
          </div>
        </div> 
      </div>
    </div>
    <div v-show='eventType' class="time-label"  :style="{top: topNum + 'px', left: leftNum + 'px'}">
        <ul>
        <li style="color:#ffffff">事件时间：<input type='text' v-model="newEventDate"/></li>
        <li><p style="font-size:12px;color:red;">时间格式为：2019-04-25 13:30:30</p></li>
        <li style="color:#ffffff">事件内容：<input type='text' v-model="eventVal"/></li>
        <li class="events-btn">
            <div @click='eventConfirm'>确定</div>
            <div @click='eventCancel'>取消</div>
        </li>
        </ul>
    </div>
    <time-line
      @hingeMsgEvent="hingeMsgEvent"
      @timeDown="timeDown"
      @focus="focus"
      @fire="fire"
      @layerHandler="layerHandler"
      @closeSocket="closeSocket"
      @sendCommond="sendCommond"
      @forBackWard="forBackWard"
      @start="start"
      @chart="chart"
      @closeplay="closeplay"
      ref="timeLine"
    ></time-line>
    <map-tool v-show='toolF'></map-tool>
    <display-controller v-show='controllerF'></display-controller>

    <div id="hinge-msg">{{hingeMsg}}</div>
    <muen :dataInfo="dataInfo" :visible="visible" :type="type" @close="visible=false"></muen>
    <replay
      :gdFlag='gdFlag'
      ref="myreplay"
      :setTime="setTime"
      :dataInfo="dataInfo"
      :WebSocketData="WebSocketData"
      @uploading="uploading"
      :flagTypeList="flagTypeList" 
    ></replay>
    <info v-if="sleC" :dataInfo="buoyInfo" :visible="showInfo" @close="showInfo=false"></info>
    <selects-elm
      @buildSocket="buildSocket"
      ref="selectsElm"
      v-show="selectF"
      @cancel="selectCancel"
      @confirm="selectConfirm"
    ></selects-elm>
  </div>
</template>

<script>
let arrTime = []
// import { setInterval, setTimeout } from "timers";
import muen from "../view/rightMouse/muen.vue";
import timeLine from "../view/timeLine/index.vue";
import lineChart from "../view/lineChart/lineChart.vue";
import login from "../view/login/index.vue";
import selectsElm from "../view/selectElm/index.vue";
import event from "../view/event/event.vue";
import replay from "../view/replay/index.vue";
import info from "../view/infoTime/list.vue";
import gisHeader from "../view/header/header.vue";
import MapTool from "../view/toolbar/maptool.vue";
import DisplayController from "../view/toolbar/displayController.vue";
import { setInterval } from 'timers';
//import { connect } from 'http2';
const _ = require("lodash");

const CMap = require("../assets/map/CMap.js");

let socketController = null;

const keyMap = {
  lon: "zjjd",
  lat: "zjwd"
};

export default {
  name: "CMap",

  data: function() {
    return {
      setZZStyle:{
        left:0,
        width:0
      },
      gdFlag:false,
      fjlnglat: false,
      playFLAG: false,
      hingeMsg: "",
      sleC: false,
      setTime: "",
      loginFs: false,
      chartF: true,
      wsF: true,
      wsName: "",
      selectId: "",
      selectF: false,
      loginF: true,
      num: 1,
      action: "暂停",
      timeItemArr: [],
      newDate: "",
      timeline: "",
      playerCurrentTime: "",
      trackMode: false,
      dataBH: {},
      mouseInfo: {
        lon: 0,
        lat: 0
      },
      visStyle: {
        width: "500px",
        right: "0px",
        left: "0px"
      },
      times: "",
      allDate: {
        startT: "",
        endT: ""
      },
      dataInfo: {},
      visible: false,
      info: {},
      type: "",
      WebSocketData: {},
      buoyInfo: {},
      showInfo: false,
      toolF:true,
      controllerF:true,
      eventsF:true,
      FBnum: 0,
      widthNum:0,
      notifyList:[],
      notifyType:'',
      isShow:true,
      feijiCout:{},
      timeras:null,
      timerNew:null,
      timerFlag:true,
      timeNow:'',
      eventType:false,
      newEventDate:'',
      eventVal:'',
      topNum:0,
      leftNum:0,
      jiaciName:'',
      FPS:0,
      flagTypeList:[]
    };
  },

  props: {
    msg: String
  },
  components: {
    event,
    MapTool,
    selectsElm,
    lineChart,
    login,
    muen,
    replay,
    info,
    timeLine,
    DisplayController,
    gisHeader,
    
  },
  watch:{
    notifyList(data){  
      clearTimeout(this.timeras)
      $(".myMsgList").eq(0).fadeIn();
      $(".myMsgList").eq(1).fadeIn();
      
      if(this.timerFlag){
        
        if(this.timeras){
        }
        this.timeras = setTimeout(() => {
          $(".myMsgList").eq(0).fadeOut();
          $(".myMsgList").eq(1).fadeOut();
        }, 60000);
         if(this.timeras){
          setTimeout(()=>{
            this.eventsF = false
            
          },70000)
        }
      }
    }
  },
  updated:function () {  
      this.scrollToBottom();       
  },

  mounted() {
    this.showFPS().go();
    this.scrollToBottom();
    let that = this
    $('#mySeamless').on('mouseenter',() => {
      this.timerFlag = false
      if(this.timeras){
        clearTimeout(this.timeras)
        this.timeras = null
      }
     
      $(".myMsgList").eq(0).fadeIn();
      $(".myMsgList").eq(1).fadeIn();
    });
    $('#mySeamless').on('mouseleave',() => {
      this.timerFlag = true
      this.timeras = setTimeout(() => {
        $(".myMsgList").eq(0).fadeOut();
        $(".myMsgList").eq(1).fadeOut();
      }, 60000);
      if(this.timeras){
        setTimeout(()=>{
          this.eventsF = false
          
        },75000)
      }
     
    });
    
    document.onselectstart = function() {
      return false;
    };
    document.oncontextmenu = function() {
      return false;
    };
    $.get(`${globalUrl.host}/find/departmentName`, {}).then(data => {
      sessionStorage.setItem("ptData", JSON.stringify(data));
    });

    if (sessionStorage.getItem("user") != null) this.loginF = false;
    if (sessionStorage.getItem("selectEd")) {
      this.selectId = sessionStorage.getItem("selectEd");
      this.getAllDate();
    } else {
      this.selectF = true;
    }
    if (sessionStorage.getItem("groupNum") != null) {
      setTimeout(_ => {
        $.ajax({
          type: "post",
          // dataType: "json",
          url: `${globalUrl.host}/find/addToAGroup`,
          // contentType: "application/json;charset=UTF-8",//指定消息请求类型
          data: {
            name: sessionStorage.getItem("name"),
            sjId: sessionStorage.getItem("selectEd"),
            // ip:null,
            groupNum: sessionStorage.getItem("groupNum")
          }, //将js对象转成json对象
          success: function(data) {
            $.ajax({
              type: "get",
              // dataType: "json",
              url: `${globalUrl.host}/find/findSystemStatus`,
              // contentType: "application/json;charset=UTF-8",//指定消息请求类型
              data: {
                groupNum: sessionStorage.getItem("groupNum")
              }, //将js对象转成json对象
              success: function(data) {
                
                sessionStorage.setItem("groupType", data);
                that.num = data.fps;
                that.$refs["timeLine"].num = that.num;
                if (data.yxzt == 3) {
                  that.notifyList = []
                  that.gdFlag = false
                  that.num = data.fps
                  that.$refs.timeLine.playFlag = false;
                  that.playFLAG = false;
                  that.fjlnglat = true;
                  that.closeSocket();
                }
                if (data.yxzt == 2) {
                  // that.gdFlag = true
                  that.notifyList = []
                  that.num = data.fps
                  that.$refs.timeLine.playFlag = false;
                  that.playFLAG = false;
                }
                if (data.yxzt == 1) {
                  that.gdFlag = true
                  that.num = data.fps
                  that.$refs.timeLine.playFlag = true;
                  that.playFLAG = true;
                }
              }
            });
          }
        });
      }, 700);
    }
  },
  methods: {
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
    scrollToBottom() {
      this.$nextTick(() => {
        var container = this.$el.querySelector("#mySeamless");
        container.scrollTop = container.scrollHeight;
      })
    },
    // dataShow(){
    //   this.$refs["myreplay"].$refs['myterrace'].isShow = !this.$refs["myreplay"].$refs['myterrace'].isShow;
    // },
    getNum(){
      // console.log(this.num)
      if(this.num == 0)return 1
      if(this.num == -2)return "1/2"
      if(this.num == -4)return "1/4"
      if(this.num == -8)return "1/8"
      if(this.num == -16)return "1/16"
      return this.num
    },
    setZZ(){
      this.setZZStyle.left=Number($('.cesium-viewer-timelineContainer').css('margin-left').split('px')[0])+10+'px'
      
    },
    setZZTime(){
      this.setZZStyle.width=Math.ceil($(".cesium-timeline-icon16").css('left').split('px')[0])+10+'px'

    },
    eventConfirm(){
      let that = this
      window.onresize = function() {
          // that.visWidth = viewer.timeline.lastWidth
          setTimeout(() => {
            that.setZZ()
            that.$refs["timeLine"].timeLabelF = false;
            that.$refs["timeLine"].timeline.redraw();
            that.$refs["timeLine"].startXd();
            setTimeout(() => {
                  $('.vis-box').each((i,v) => {
                      // v.style.top = '22px !important'
                      $(v).css('cssText','top:22px !important;left:'+$(v).css('left'))
                  })
              },1000)
          }, 300);
          
        };
        that.eventType =false;
        that.$refs["timeLine"].eventConfirm({
            nr:that.eventVal,
            sj:new Date(that.newEventDate),
            sjid:sessionStorage.getItem('selectEd')
        })

        
        // let params = {
        //     nr:that.eventVal,
        //     sj:new Date(that.newEventDate),
        //     sjid:sessionStorage.getItem('selectEd')
        // }
    //     $.ajax({
    //     type: "post",
    //     dataType: "json",
    //     url: `${globalUrl.host}/find/addSDSJ`,
    //     contentType: "application/json;charset=UTF-8",//指定消息请求类型
    //     data: JSON.stringify(params),//将js对象转成json对象
    //     success: function (data) {
    //         that.timeLabelF = false
    //             $.get(`${globalUrl.host}/find/findEventListForRex`, {
    //             sjid: sessionStorage.getItem('selectEd')
    //         }).then(data => {
    //             sessionStorage.setItem('allData',JSON.stringify(data))
    //             let dataArr = [];
    //             let viewer = window["Map"].viewer;
    //             for (let item of data.FBSJ) {
    //                 dataArr.push({
    //                     data: item,
    //                     // id: item["jcxxid"],
    //                     content: "<span class='icon1'></span>",
    //                     start: item["sb"].split(".")[0],
    //                     types: "浮标投放"
    //                 });
    //             }
    //             for (let item of data.CTMBSJ) {
    //                 dataArr.push({
    //                     data: item,
    //                     // id: item["mbsj"],
    //                     content: "<span class='icon2'></span>",
    //                     start: item["mbsj"].split(".")[0],
    //                     types: "目标探测"
    //                 });
    //             }
    //             for (let item of data.FBMBSJ) {
    //                 dataArr.push({
    //                     data: item,
    //                     // id: item["mbsj"],
    //                     content: "<span class='icon2'></span>",
    //                     start: item["mbsj"].split(".")[0],
    //                     types: "目标探测"
    //                 });
    //             }
    //             for (let item of data.SDSJ) {
    //                 // console.log(that.toDate(item["sj"]));
    //                 dataArr.push({
    //                     data: item,
    //                     // id: item["mbsj"],
    //                     content: "<span class='icon3'></span>",
    //                     start: that.toDate(item["sjs"]),
    //                     types: "手动事件"
    //                 });
    //             }

  
    //             that.$refs["timeLine"].timeItemArr = dataArr;  
    //             // console.log(that.timeItemArr)
    //             that.$refs["timeLine"].timeline.setItems(that.$refs["timeLine"].timeItemArr)  
    //             setTimeout(() => {
    //                 $('.vis-box').each((i,v) => {
    //                     // v.style.top = '22px !important'
    //                     $(v).css('cssText','top:22px !important;left:'+$(v).css('left'))
    //                 })
    //             },1000)

    //             window.onresize = function() {
    //               // that.visWidth = viewer.timeline.lastWidth
    //               setTimeout(() => {
    //                 that.setZZ()
    //                 that.$refs["timeLine"].timeLabelF = false;
    //                 that.$refs["timeLine"].timeline.redraw();
    //                 that.$refs["timeLine"].startXd();
    //                 setTimeout(() => {
    //                       $('.vis-box').each((i,v) => {
    //                           // v.style.top = '22px !important'
    //                           $(v).css('cssText','top:22px !important;left:'+$(v).css('left'))
    //                       })
    //                   },1000)
    //               }, 300);
                 
    //             };
    //             that.eventType =false;

    //         })
    //     }
    // });
    },
    eventCancel(){
       this.eventType =false;
    },
    flagType(type){
      this.flagTypeList = type;
    },
    maptool(flag){
      this.toolF = flag;
    },
    controller(flag){
      this.controllerF = flag;
    },
    tudeShow(flag){
       this.tudeF = flag;
    },
    events(flag3){
       this.eventsF = flag3
    },
    feijiPolygon(len){
     
    },
    timeDown() {
      window.Map.FlyCompare.ClearPath();
      this.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
    },
    uploading(data) {
      //this.setVisItem(data.time);
    },
    /**
     * lkr
     * 时间线
     */
    //---------------------------------------------分割线---------------------------------------------------//
    /**
     * 关键事件提示事件
     */
    hingeMsgEvent(data) {
      this.hingeMsg = data;
      $("#hinge-msg").fadeIn();
      setTimeout(() => {
        $("#hinge-msg").fadeOut();
      }, 2000);
    },

     bSort(arr) {
      var len = arr.length;
      for (var i = 0; i < len-1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            // 相邻元素两两对比，元素交换，大的元素交换到后面
            if (new Date(arr[j].sb?arr[j].sb:arr[j].mbsj).getTime() > new Date(arr[j+1].sb?arr[j+1].sb:arr[j+1].mbsj).getTime()) {
                 var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
              }
        }
      }
      return arr;
    },

    setVisItem(time) {
      let that = this;
      let y = [];

      if (that.$refs["timeLine"].timeItemArr.length > 0) {
        // console.log(this.$refs["timeLine"].timeItemArr)
        y = that.$refs["timeLine"].timeItemArr.filter(item => {
          // let timeBuoy = item.start
          //   ? item.data["sb"]
          //   : item.data["mbsj"];
          return new Date(item.start).getTime() == new Date(time).getTime();
        });
      }

      if (y.length > 0) {
        // window["Map"].viewer.clock.currentTime = Cesium.JulianDate.fromDate(
        //   new Date(y[0].start)
        // );
        // that.$refs["timeLine"].timeline.focus(y[0].id);
        // that.$refs["timeLine"].timeline.setSelection(y[0].id);
        window.Map.FlyCompare.ClearPath();
        that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
        this.newDate = "00:00:00";
        setTimeout(() => {
            $('.vis-box').each((i,v) => {
                // v.style.top = '22px !important'
                $(v).css('cssText','top:22px !important;left:'+$(v).css('left'))
            })
        },1000) 
        $.get(`${globalUrl.host}/find/triggerSocket`, {
          startTime: new Date(y[0].start),
          name: sessionStorage.getItem("groupNum"),
          id: this.selectId
        }).then(data => {});
      }
    },
    /**
     * 折线图显隐控制事件
     */
    chart() {
      this.chartF = !this.chartF;
    },

    selectCancel() {
      this.selectF = false;
    },
    /**
     * 选择数据框确认事件
     */
    selectConfirm() {
       
      this.selectF = false;
      let that = this;
      let pos = this.$refs["selectsElm"].pos;

      setTimeout(() => {
        window.Map.Tool.FlyTo([Number(pos.jd), Number(pos.wd), 4000000]);
      }, 300);
      //window.Map.Tool.FlyTo([Number(pos.jd),Number(pos.wd),4000000])
      this.selectId = sessionStorage.getItem("selectEd");
      if (sessionStorage.getItem("groupNum") != null) {
        setTimeout(_ => {
          $.ajax({
            type: "post",
            // dataType: "json",
            url: `${globalUrl.host}/find/addToAGroup`,
            // contentType: "application/json;charset=UTF-8",//指定消息请求类型
            data: {
              name: sessionStorage.getItem("name"),
              sjId: sessionStorage.getItem("selectEd"),
              // ip:null,
              groupNum: sessionStorage.getItem("groupNum")
            }, //将js对象转成json对象
            success: function(data) {
              $.get(`${globalUrl.host}/find/findFJloclan`, {
                //time:null,
                sjid: this.selectId
              }).then(data => {
                   if(data != ""){
                        window.Map.Tool.FlyTo([Number(data.zjjd), Number(data.zjwd), 2000000]);
                   }else{
                        window.Map.Tool.FlyTo([109.998287,18.073213, 2000000]);
                   }
              });
              $.ajax({
                type: "get",
                // dataType: "json",
                url: `${globalUrl.host}/find/findSystemStatus`,
                // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                data: {
                  groupNum: sessionStorage.getItem("groupNum")
                }, //将js对象转成json对象
                success: function(data) {
                  sessionStorage.setItem("groupType", data);
                  that.num = data.fps;
                  that.$refs["timeLine"].num = that.num;
                  if (data.yxzt == 3) {
                    that.notifyList = []
                    that.gdFlag = false
                    that.num = data.fps
                    that.$refs.timeLine.playFlag = false;
                    that.playFLAG = false;
                    that.fjlnglat = true;
                    that.closeSocket();
                  }
                  if (data.yxzt == 2) {
                    that.gdFlag = true
                    that.num = data.fps
                    that.$refs.timeLine.playFlag = false;
                    that.playFLAG = false;
                  }
                  if (data.yxzt == 1) {
                    that.gdFlag = true
                    that.num = data.fps
                    that.$refs.timeLine.playFlag = true;
                    that.playFLAG = true;
                  }
                }
              });
            }
          });
        }, 300);
      }
      this.getAllDate();
    },
    /**
     * 登录事件
     */
    login() {
      this.loginFs = true;
      this.selectF = true;
      this.loginF = false;
      this.$refs["selectsElm"].ptData = JSON.parse(
        sessionStorage.getItem("ptData")
      );
    },
    /**
     * 快进快退事件
     * @param { String } type 事件类型
     */
    forBackWard(type) {
      console.log(this.num)
      if (type == "enter") {
        
        if (this.num == 1) {
          this.num = 2;
        } else if (this.num == -2) {
          this.num = 1;
        } else if (this.num < 1) {
          this.num = this.num / 2;
        } else {
          this.num = this.num * 2;
        }
      } else {
        console.log(this.num)
        if (this.num == 1) {
          this.num = -2;
        } else if (this.num == 2) {
          this.num = 0;
        } else if (this.num > 1) {
          this.num = this.num / 2;
        } else {
          this.num = this.num * 2;
        }
      }
      this.num = this.num
      if(this.num < -16){
        this.num = -16
        return
      }
      if(this.num > 64){
        this.num = 64
        return
      }
      console.log(this.num)
      this.$refs["timeLine"].num = this.num;
      $.get(`${globalUrl.host}/find/fastAndSlow`, {
        multiple: this.num,
        name: sessionStorage.getItem("groupNum")
      }).then(data => {
        //    this.action = true
        // this.allDate.startT = this.toDate(data.startTime);
        // this.allDate.endT = this.toDate(data.endTime);
        // console.log(this.allDate)
        // this.init()
        // this.buildSocket()
      });
    },
    /**
     * 开始事件
     */
    start() {
      let that = this;

      if (socketController == null) {
        // this.buildSocket(true);
      } else {
       console.log(new Date(that.allDate.startT))
        this.$refs.timeLine.playFlag = true;
        this.playFLAG = true;
        $.get(`${globalUrl.host}/find/triggerSocket`, {
          startTime: new Date(that.allDate.startT),
          name: sessionStorage.getItem("groupNum"),
          id: that.selectId
        }).then(data => {
          $.get(`${globalUrl.host}/find/fastAndSlow`, {
            multiple: 0,
            name: sessionStorage.getItem("groupNum")
          }).then(data => {
            // window.Map.viewer.clock.shouldAnimate = true;
            window["Map"].viewer.entities.removeAll();
            window.Map.AddCompare("feiji", {
              id: "plane_1",
              name: "平台飞机",
              position: that.fjposData,
              zjjd: that.fjposData[0],
              zjwd: that.fjposData[1]
            });
            window.Map.FlyCompare.ClearPath();
            that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
            window["Map"].viewer.clock.currentTime = Cesium.JulianDate.fromDate(
              new Date(that.allDate.startT)
            );
            that.setZZTime()

            that.action = "暂停";
            that.num = 1;
            that.$refs["timeLine"].num = that.num;
          });
        });
      }
    },
    closeplay() {

      this.playFLAG = true;
    },
    toDate(str) {
      var date = new Date(str).toJSON();

      return new Date(+new Date(date) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    },
    /**
     * 获取开始结束时间
     */
    getAllDate() {
      this.sleC = true;
      console.log("getAllDate");

      $.get(`${globalUrl.host}/find/findEventListForRex`, {
        //time:null,
        sjid: this.selectId
      }).then(data => {
        this.dataBH = data;
      });
      $.get(`   ${globalUrl.host}/find/findStartTimeAndEndTime`, {
        id: this.selectId
      }).then(data => {
        this.allDate.startT = this.toDate(data.startTime);
        this.allDate.endT = this.toDate(data.endTime);
        this.$refs["timeLine"].allDate.startT = this.toDate(data.startTime);
        this.$refs["timeLine"].allDate.endT = this.toDate(data.endTime);
        this.init();
        // this.buildSocket()
      });
    },

    smDate(data) {
      return (data + "").length > 1 ? data : "0" + data;
    },
    /**
     * 初始化整个时间轴
     */
    initTimeLine() {
      let that = this;
      let viewer = window["Map"].viewer;
      let notifyList=[] ;
      let notifyType='';

      $(".cesium-viewer-bottom").hide();

      this.initCesiumTime(viewer);
     
      // $.get(`${globalUrl.host}/find/findnewEventList`, {
      //   id: this.selectId
      // }).then(data => {
      //   console.log(data);
      let dataArr = [];
      sessionStorage.setItem("allData", JSON.stringify(this.dataBH));

      //-----------------初始化时间轴所需数据
      // that.notifyType = 'FBSJ'
      // that.notifyList = this.dataBH.FBSJ

      for (let item of this.dataBH.FBSJ) {
        item.typeall = 'FBSJ'
        dataArr.push({
          data: item,
          // id: item["jcxxid"],
          content: "<span class='icon1'></span>",
          start: item["sb"].split(".")[0],
          types: "浮标投放"
        });
      }
      // that.notifyType = 'FBSJ'
      notifyList = [...notifyList,...this.dataBH.FBSJ] 
      
      // that.notifyType = 'CTMBSJ'
      // that.notifyList =  this.dataBH.CTMBSJ
      for (let item of this.dataBH.CTMBSJ) {
        item.typeall = 'CTMBSJ'
        dataArr.push({
          data: item,
          // id: item["mbsj"],
          content: "<span class='icon2'></span>",
          start: item["mbsj"].split(".")[0],
          types: "目标探测"
        });
      }
      notifyList =  [...notifyList,...this.dataBH.CTMBSJ] 
      // 
      // that.notifyType = 'FBMBSJ'
      that.notifyList =  this.dataBH.FBMBSJ
      for (let item of this.dataBH.FBMBSJ) {
        item.typeall = 'FBMBSJ'
        dataArr.push({
          data: item,
          // id: item["mbsj"],
          content: "<span class='icon2'></span>",
          start: item["mbsj"].split(".")[0],
          types: "目标探测"
        });
      }
      notifyList = [...notifyList,...this.dataBH.FBMBSJ] 

      if(notifyList.length != that.notifyList.length){
          // that.notifyList = notifyList
          // let arr = notifyList
          
          that.notifyList = that.bSort(notifyList)
          that.eventsF = true
      }

      // that.notifyType = 'SDSJ'
      // that.notifyList =  this.dataBH.SDSJ
      for (let item of this.dataBH.SDSJ) {
        // console.log(that.toDate(item["sj"]));
        dataArr.push({
          data: item,
          // id: item["mbsj"],
          content: "<span class='icon3'></span>",
          start: that.toDate(item["sjs"]),
          types: "手动事件"
        });
      }
      //-----------------
      this.$refs["timeLine"].timeItemArr = dataArr;
      this.$refs["timeLine"].initVis(
        viewer,
        this.$refs["timeLine"].timeItemArr
      );
      // });

      window.onresize = function() {
        // that.visWidth = viewer.timeline.lastWidth
        setTimeout(() => {
          that.$refs["timeLine"].timeLabelF = false;
          that.$refs["timeLine"].visStyle.width =
            viewer.timeline._lastWidth + "px";
          that.$refs["timeLine"].visStyle.right = $(
            ".cesium-viewer-timelineContainer"
          ).css("right");
          that.$refs["timeLine"].visStyle.left = $(
            ".cesium-viewer-timelineContainer"
          ).css("left");
          that.$refs["timeLine"].timeline.redraw();
          that.setZZ()
          that.$refs["timeLine"].startXd();
          setTimeout(() => {
                $('.vis-box').each((i,v) => {
                    // v.style.top = '22px !important'
                    $(v).css('cssText','top:22px !important;left:'+$(v).css('left'))
                })
            },1000)
        }, 300);
      };

     $(".cesium-viewer-timelineContainer").contextmenu(function(){
        that.eventType = true;
        that.getMousePos(event,that);
     })
    },

    getMousePos(event,that) {
        let e =  window.event;
        that.leftNum = e.clientX;
        that.topNum= e.clientY-163;
    },
    /**
     * @param {date} date 当前播放时间点
     * 获取当前播放时间之前所有数据事件
     */
    diffTime(date) {
      this.setTime = date;
      let that = this;
      $.get(`${globalUrl.host}/find/findEventListForRex`, {
        time: this.setTime,
        sjid: this.selectId
      }).then(data => {
        that.upateGis(data);
      });
    },
    /**
     * @param {object} data 当前播放时间之前所有数据
     * 刷新gis标绘事件
     */
    upateGis(data) {
      let that = this;
      let id = sessionStorage.getItem("selectEd")
      let ptData = JSON.parse(sessionStorage.getItem("ptData"))
      ptData.map(item => {
          if(item.id == id) {
              that.jiaciName = item.ptmc.slice(-7,-2)
              sessionStorage.setItem('jiaciName',that.jiaciName)
          }
      })
      that.FBnum = 0;
      let notifyList = [];
      that.notifyType = '';
      // debugger
      //window["Map"].viewer.entities.removeAll();
      let arr = [];
      if(window["Map"].viewer.entities.values.length){
        window["Map"].viewer.entities.values.map(s=>{
          if(s.type != "fksbq"){
            arr.push(s.id)
          }
        })
      }
      arr.map(t=>{
        window["Map"].viewer.entities.removeById(t)
      })

      window.Map.AddCompare("feiji", {
        id: "plane_1",
        name: "平台飞机",
        position: that.fjposData,
        zjjd: that.fjposData[0],
        zjwd: that.fjposData[1]
      });
      if (data["CTMBSJ"].length > 0) {
        that.notifyType = 'CTMBSJ';
               
        data["CTMBSJ"].map((item, i) => {
          item.typeall = 'CTMBSJ'
          dealCtSJMB(item, i,that);
        });
        notifyList = [...notifyList,...data["CTMBSJ"]]
      }
      if (data["FBSJ"].length > 0) {
        that.notifyType = 'FBSJ';
        
        data["FBSJ"].map(item => {
          item.typeall = 'FBSJ'
          dealFbSJ(item,that);
        });
       notifyList = [...notifyList,...data["FBSJ"]]
      }
      if (data["FBMBSJ"].length > 0) {
        that.notifyType = 'FBMBSJ';
        
        data["FBMBSJ"].map(item => {
          item.typeall = 'FBMBSJ'
          dealFbSJMb(item);
        });
        notifyList = [...notifyList,...data["FBMBSJ"]]

        // setTimeout(() =>{
        //   debugger
        //   that.notifyType = '';
        //   that.notifyList = [];
        // },60000)
      }
      if(notifyList.length != that.notifyList.length){
        // that.notifyList = notifyList
        // for (var i = notifyList.length - 1; i > 0; i--) {
        //     for (var j = 0; j < i; j++) {
        //       if (notifyList[j].sb?notifyList[j].sb:notifyList[j].mbsj > notifyList[j+1].sb?notifyList[j+1].sb:notifyList[j+1].mbsj) {
        //         [notifyList[j], notifyList[j + 1]] = [notifyList[j + 1], notifyList[j]];
        //       }
        //     }
        //   }
        // console.log(that.bSort(notifyList))
        that.notifyList = that.bSort(notifyList)
        that.eventsF = true
      }
     
      // 处理浮标数据
      function dealFbSJ(item,that) {
        // console.log(item);
        // console.log(Number(item['fbsswzjd1']),Number(item['fbsswzwd1']))    
        if (item["jcxxid"] != "0") {
           that.FBnum = ++that.FBnum;
           let FBLX = '';
            if(item.fblx=="被动全向"){
              FBLX = 'L'
            }
            if(item.fblx=="被动定向"){
              FBLX = 'D'
            }
            if(item.fblx=="主动全向"){
              FBLX = 'R'
            }
            if(item.fblx=="海噪声浮标"){
              FBLX = 'A'
            }
            if(item.fblx=="温深浮标"){
              FBLX = 'B'
            }
           window.Map.Detector.Add({
            id: "detector_" + item["fbbh"],
            positions: [Number(item["llcrswzjd"]), Number(item["llcrswzwd"])],
            R: 2000,
            origin: item,
            type:FBLX
          });

        }
      }

      // 处理浮标目标数据
      function dealFbSJMb(item) {
        //1号文件中置信度低于100的不要显示了，增加置信度判断功能  （1号文件就是浮标目标数据）
          let FbId = "detector_" + item["jcxxid"];
          let fbbhName = ''
          if(item.dwfbxh1 != '0'){
            fbbhName = item.dwfbxh1.slice(-3)+'/'
          }
          if(item.dwfbxh2 != '0'){
            fbbhName = fbbhName + item.dwfbxh2.slice(-3)+'/'
          }
          if(item.dwfbxh3 != '0'){
            fbbhName = fbbhName + item.dwfbxh3.slice(-3)+'/'
          }
          if(item.dwfbxh4 != '0'){
            fbbhName = fbbhName + item.dwfbxh4.slice(-3)+'/'
          }
          if(item.dwfbxh5 != '0'){
            fbbhName = fbbhName+item.dwfbxh5.slice(-3)+'/'
          }
          if(item.dwfbxh6 != '0'){
            fbbhName = fbbhName+item.dwfbxh6.slice(-3)+'/'
          }
          let link = {
            id: "Link_1",
            positions: [Number(item["mbwzjd"]), Number(item["mbwzwd"])],
            origin: item,
            fbbh:fbbhName
          };
          window.Map.Detector.LinkOn(FbId, link); 
      }

      // 处理磁探数据
      function dealCtSJMB(item, i,that) {
        if(Number(item.mbzxd) < 100){
            return;
        }
        window.Map.AddCtTarget({
          id: "citan_" + item["mbbh"],
          positions: [Number(item["mbjd"]), Number(item["mbwd"])],
          origin: item,
          name:sessionStorage.getItem('jiaciName')
        });
      }
    },
    /**
     * @param {object} viewer cesium viewer对象
     * 初始化cesium 时间线
     */
    initCesiumTime(viewer) {
      let that = this;
      let startTime = Cesium.JulianDate.fromDate(new Date(this.allDate.startT));
      this.timeNow = new Date(this.allDate.startT).getTime();
      let stopTime = Cesium.JulianDate.fromDate(new Date(this.allDate.endT));
      this.timelineT(viewer);
      viewer.timeline.zoomTo(startTime, stopTime);
      let nowTime = "00:00:00"
      let totleTime = that.countDate(this.allDate.startT,this.allDate.endT)
      this.progress(nowTime,totleTime)
      // console.log(viewer.timeline)
      
      viewer.timeline.addEventListener(
        "setzoom",
        function(e) {
          let a = new Cesium.JulianDate.toDate(viewer.clock.startTime).getTime(),
              b = new Cesium.JulianDate.toDate(viewer.timeline._endJulian).getTime(),
              c = new Cesium.JulianDate.toDate(viewer.clock.stopTime).getTime(),
              d = new Cesium.JulianDate.toDate(viewer.timeline._startJulian).getTime()
              if(a != d||b != c){
                viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime);
              }
          
              

        },
        false
      );
      // viewer.clock.shouldAnimate = true;
      // console.log(startTime,stopTime)
      viewer.clock.startTime = startTime;
      viewer.clock.stopTime = stopTime;

      that.setZZ();
      let wait = 0;

      viewer.timeline.addEventListener(
        "mouseup",
        function(e) {
           console.log(wait)
            if(wait == 0){
                let end = new Date(that.allDate.endT),
                    start = new Date(that.allDate.startT),
                    s = end.getTime() - start.getTime()
                let a = e.pageX-Number($("#visualization").css('margin-left').split('px')[0]).toFixed(2),
                    b = $(".cesium-timeline-bar").css('width').split('px')[0],
                    zhTime = new Date(start.getTime()+(parseInt((a/b).toFixed(3)*s)))
                    console.log(new Cesium.JulianDate.toDate(viewer.clock.currentTime),zhTime)
                    that.newEventDate = zhTime  
                    that.eventType = false
                
                    window.Map.FlyCompare.ClearPath();
                    that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
                    that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
                     $.ajax({
                        type: "get",
                        // dataType: "json",
                        url: `${globalUrl.host}/find/findSystemStatus`,
                        // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                        data: {
                            groupNum: sessionStorage.getItem("groupNum")
                        }, //将js对象转成json对象
                        success: function(data) {
                            if(data.yxzt == 1){
                            $.get(`${globalUrl.host}/find/triggerSocket`, {
                                startTime: zhTime,
                                name: sessionStorage.getItem("groupNum"),
                                id: that.selectId
                            }).then(data => {
                                that.playFLAG = true;
                                that.$refs.timeLine.playFlag = true;
                                that.setZZTime()
                                that.diffTime(zhTime);
                                // that.num = 0;
                                // that.$refs["timeLine"].num = that.num;
                            });
                            }else if(data.yxzt == 2){
                            $.get(`${globalUrl.host}/find/triggerSocket`, {
                                startTime: zhTime,
                                name: sessionStorage.getItem("groupNum"),
                                id: that.selectId
                            }).then(data => {
                                that.playFLAG = true;
                                that.$refs.timeLine.playFlag = true;
                                that.setZZTime()
                                that.diffTime(zhTime);
                                $.get(`${globalUrl.host}/find/pauseAndStart`, {
                                name: sessionStorage.getItem("groupNum")
                                }).then(data => {
                                window.Map.viewer.clock.shouldAnimate = false;
                                });
                                // that.num = 0;
                                // that.$refs["timeLine"].num = that.num;
                            });
                            }
                        }
                    })
                    wait = 2;
            }else{ 
                setInterval(()=>{
                    if(wait > 0){
                        wait--;
                    }else{
                        wait = 0;
                    }                  
                },1000)              
                that.$message('请不要频繁点击跳转！')
                
            }

        //   let end = new Date(that.allDate.endT),
        //     start = new Date(that.allDate.startT),
        //     s = end.getTime() - start.getTime()
        //   let a = e.pageX-Number($("#visualization").css('margin-left').split('px')[0]).toFixed(2),
        //       b = $(".cesium-timeline-bar").css('width').split('px')[0],
        //       zhTime = new Date(start.getTime()+(parseInt((a/b).toFixed(3)*s)))
        //     console.log(new Cesium.JulianDate.toDate(viewer.clock.currentTime),zhTime)
        //     that.newEventDate = zhTime
            
        //     that.eventType = false
          
        //   window.Map.FlyCompare.ClearPath();
        //   that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
        //   that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
        //    $.ajax({
        //       type: "get",
        //       url: `${globalUrl.host}/find/findSystemStatus`,
        //       data: {
        //         groupNum: sessionStorage.getItem("groupNum")
        //       }, //将js对象转成json对象
        //       success: function(data) {
        //         if(data.yxzt == 1){
        //           $.get(`${globalUrl.host}/find/triggerSocket`, {
        //             startTime: zhTime,
        //             name: sessionStorage.getItem("groupNum"),
        //             id: that.selectId
        //           }).then(data => {
        //             that.playFLAG = true;
        //             that.$refs.timeLine.playFlag = true;
        //             that.setZZTime()
        //             that.diffTime(zhTime);
        //           });
        //         }else if(data.yxzt == 2){
        //           $.get(`${globalUrl.host}/find/triggerSocket`, {
        //             startTime: zhTime,
        //             name: sessionStorage.getItem("groupNum"),
        //             id: that.selectId
        //           }).then(data => {
        //             that.playFLAG = true;
        //             that.$refs.timeLine.playFlag = true;
        //             that.setZZTime()
        //             that.diffTime(zhTime);
        //             $.get(`${globalUrl.host}/find/pauseAndStart`, {
        //               name: sessionStorage.getItem("groupNum")
        //             }).then(data => {
        //               window.Map.viewer.clock.shouldAnimate = false;
        //             });
        //           });
        //         }
        //       }
        //    })

        },
        false
      );

      this.startXd();

      that.progress(nowTime,totleTime)
      this.dqsjd = this.allDate.startT
      // setInterval(()=>{
        var dfTime = (viewer.clock.currentTime.dayNumber - startTime.dayNumber)*86400 + (viewer.clock.currentTime.secondsOfDay - startTime.secondsOfDay)
        if(viewer.clock.currentTime.dayNumber != viewer.clock.startTime.dayNumber){
          dfTime =  "00:00:00";
          that.progress(dfTime,totleTime)
          
        } else {
          that.timeNow = (new Date(that.allDate.startT).getTime()/1000 + Number(dfTime.toFixed(0)))*1000;
          that.progress(that.formatSeconds(dfTime),totleTime)
          
        }
      // },1000)
    },
    formatSeconds(s) {
        // var secondTime = parseInt(value);// 秒
        // var minuteTime = 0;// 分
        // var hourTime = 0;// 小时
        // if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
        //   //获取分钟，除以60取整数，得到整数分钟
        //   minuteTime = parseInt(secondTime / 60);
        //   //获取秒数，秒数取佘，得到整数秒数
        //   secondTime = parseInt(secondTime % 60);
        //   //如果分钟大于60，将分钟转换成小时
        //   if(minuteTime > 60) {
        //     //获取小时，获取分钟除以60，得到整数小时
        //     hourTime = parseInt(minuteTime / 60);
        //     //获取小时后取佘的分，获取分钟除以60取佘的分
        //     minuteTime = parseInt(minuteTime % 60);
        //   }
        // }
        // var result = "" + parseInt(secondTime);
        //
        // if(minuteTime > 0) {
        //   result = "" + parseInt(minuteTime) + ":" + result;
        // }
        // if(hourTime > 0) {
        //   result = "" + parseInt(hourTime) + ":" + result;
        // }
        // return result;
        var t;
        if(s > -1){
            var hour = Math.floor(s/3600);
            var min = Math.floor(s/60) % 60;
            var sec = s % 60;
            if(hour < 10) {
                t = '0'+ hour + ":";
            } else {
                t = hour + ":";
            }

            if(min < 10){t += "0";}
            t += min + ":";
            if(sec < 10){t += "0";}
            t += sec.toFixed(0)
        }
        return t;
    },
    progress(nowTime,totleTime){
      let progressTime = "";
        progressTime += '<span>'+ nowTime +'</span> / <span>'+ totleTime+'</span>'
        $("#timeDiv")
        .empty()
        .append(progressTime);
    },
    /**
     * 开始计算相对时间
     */
    startXd() {
      let that = this,
        str = "";
      let startTimes = this.allDate.startT;

      $(".cesium-timeline-ticLabel").each((i, item) => {
        if (i != 0) {
          let left =
            Number(
              $(item)
                .css("left")
                .substring(0, $(item).css("left").length - 2)
            ) +
            40 +
            "px";

          that.countDate(startTimes, that.dateReplace($(item).html()));
          str += `<span class='xdDate' style='left:${left}'>
                    ${that.countDate(
                      startTimes,
                      that.dateReplace($(item).html())
                    )}
                </span>`;
        } else {
          let left =
            Number(
              $(item)
                .css("left")
                .substring(0, $(item).css("left").length - 2)
            ) +
            40 +
            "px";
          str += `<span class='xdDate' style='left:${left}'>
                    00:00:00
                </span>`;
        }
        // console.log(that.dateReplace($(item).html()),i)
      });
      $("#xdsj")
        .empty()
        .append(str);
      // console.log($(".cesium-timeline-ticLabel"))
    },

    dateReplace(str) {
      return str.replace(/([^\u0000-\u00FF])/g, function(e) {
        if (e != "日") {
          return "-";
        } else {
          return "";
        }
      });
    },
    /**
     * @param {string} date1 开始时间 格式 'xx-xx-xx xx:xx:xx'
     * @param {string} date2 结束时间 格式 'xx-xx-xx xx:xx:xx'
     * 计算两个时间相差多少小时分秒
     */
    countDate(date1, date2) {
      // var date1= '2015/05/01 00:00:00';  //开始时间
      // var date2 = new Date();    //结束时间
      var date3 = new Date(date2).getTime() - new Date(date1).getTime(); //时间差的毫秒数
      //------------------------------
      //计算出相差天数
      var days = Math.floor(date3 / (24 * 3600 * 1000));

      //计算出小时数
      var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000));
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000));
      //计算相差秒数
      var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      var seconds = Math.round(leave3 / 1000);
      if (days > 0) {
        hours += days * 24;
      }
      // console.log(this.smDate(hours)+":"+this.smDate(minutes)+":"+this.smDate(seconds))
      if (this.smDate(seconds) < 0) return "";
      return (
        this.smDate(hours) +
        ":" +
        this.smDate(minutes) +
        ":" +
        this.smDate(seconds)
      );
    },

    /**
     * 设置时间线时间显示格式
     */
    timelineT(viewer) {
      // viewer.animation.viewModel.dateFormatter = localeDateTimeFormatter
      // viewer.animation.viewModel.timeFormatter = localeTimeFormatter
      viewer.timeline.makeLabel = function(time) {
        return localeDateTimeFormatter(time);
      };

      // Date formatting to a global form
      function localeDateTimeFormatter(datetime, viewModel, ignoredate) {
        var julianDT = new Cesium.JulianDate();
        Cesium.JulianDate.addHours(datetime, 8, julianDT);
        var gregorianDT = Cesium.JulianDate.toGregorianDate(julianDT);
        var objDT;
        if (ignoredate) objDT = "";
        else {
          objDT = new Date(
            gregorianDT.year,
            gregorianDT.month - 1,
            gregorianDT.day
          );
          objDT =
            gregorianDT.year +
            "年" +
            objDT.toLocaleString("zh-cn", { month: "short" }) +
            gregorianDT.day +
            "日";
          if (viewModel || gregorianDT.hour + gregorianDT.minute === 0)
            return objDT;
          objDT += " ";
        }
        return (
          objDT +
          Cesium.sprintf(
            "%02d:%02d:%02d",
            gregorianDT.hour,
            gregorianDT.minute,
            gregorianDT.second
          )
        );
      }
    },
    /**
     * 关闭ws事件
     */
    closeSocket() {
      let that = this;
      that.fjlnglat = true;
      
      
      $.get(`${globalUrl.host}/find/stopScoket`, {
        name: sessionStorage.getItem("groupNum")
      }).then(data => {
       
        
        this.playFLAG = false;
        this.$refs.timeLine.playFlag = false;
        window.Map.viewer.clock.shouldAnimate = false;
        // socketController = null;
        // this.wsF = true;
        window["Map"].viewer.entities.removeAll();
        window.Map.AddCompare("feiji", {
          id: "plane_1",
          name: "平台飞机",
          position: that.fjposData,
          zjjd: that.fjposData[0],
          zjwd: that.fjposData[1]
        });
        let nowTime = "00:00:00"
        let totleTime = that.countDate(this.allDate.startT,this.allDate.endT)
        this.progress(nowTime,totleTime)
        this.dqsjd = this.allDate.startT
        that.notifyList = []
        that.gdFlag = false
        //  window.Map.viewer.clock.shouldAnimate = false;
        window.Map.viewer.clock.currentTime = Cesium.JulianDate.fromDate(
          new Date(this.allDate.startT)
        );
        that.setZZTime()
        setTimeout(() => {
          this.setZZStyle.width='0px'
        },200)
      });
    },
    /**
     * @param {object} data 时间轴Item数据
     * 点击获取时间轴Item数据
     */
    clickItem(data) {
      this.buoyInfo = data[0].data;
      this.showInfo = true;
    },
    /**
     * @param {object} id 时间轴Item数据ID
     * 设置时间轴Item获取焦点事件
     */
    setTimeFocus(id) {
      this.timeline.focus(id);
      this.timeline.setSelection(id);
    },

    //---------------------------------------------分割线---------------------------------------------------//

    init() {
      let that = this;
      window["Map"] = CMap.Init("mapElement", {});

      console.log('window.Map',window.Map)
      this.bindEvents();
      

      let selectName = JSON.parse(sessionStorage.getItem("ptData")).filter(
        item => {
          return item.id == sessionStorage.getItem("selectEd");
        }
      );

      $.get(`${globalUrl.host}/find/findFJloclan`, {
        //time:null,
        sjid: this.selectId
      }).then(data => {
        this.fjposData = [Number(data.zjjd), Number(data.zjwd), 5000];
        
        console.log(data);
        window.Map.AddCompare("feiji", {
          id: "plane_1",
          name: "平台飞机",
          position: that.fjposData,
          zjjd: that.fjposData[0],
          zjwd: that.fjposData[1]
        });
      });

      // this.buildSocket();

      setTimeout(() => {
        this.initTimeLine();
        window.Map.Tool.FlyTo([110.468746, 17.076428, 2000000]);
      }, 300);
    },

    /**
     * 初始化ws事件
     */
    buildSocket(type) {
      const _this = this;
      let WQGJList = [] 
      console.log('打开ws')
      // window.Map.viewer.clock.shouldAnimate = true;

      // if (socketController) this.closeSocket();

      let host = globalUrl.host.replace("https://", "").replace("http://", "");

      socketController = new WebSocket(`ws://${globalUrl.ws}/webSocket`);

      socketController.onopen = function(e) {
        console.log("Connection to server opened");
      };

      socketController.onmessage = function(e) {
        if (_this.wsF) {
          _this.wsName = e.data;
          sessionStorage.setItem("name", e.data);
          _this.wsF = false;
        } else {
          //  window.Map.viewer.clock.shouldAnimate = true;
          _this.WebSocketData = JSON.parse(e.data);

          //console.log(JSON.parse(e.data)[0].LKR);
          let data = JSON.parse(e.data)[0].LKR;
          if (data) {
            _this.num = data.fps;
            // _this.$refs["timeLine"].num = _this.num;
            if (data.yxzt == 3) {
              
              _this.$refs.timeLine.playFlag = false;
              _this.playFLAG = false;
              _this.fjlnglat = true;
              _this.closeSocket();
            }
            if (data.yxzt == 2) {
              _this.gdFlag = true
              _this.$refs.timeLine.playFlag = false;
              _this.playFLAG = false;
            }
            if (data.yxzt == 1) {
              _this.gdFlag = true
              _this.$refs.timeLine.playFlag = true;
              _this.playFLAG = true;
            }
          } else {
            _this.dealMessage(JSON.parse(e.data));
            let dataList = JSON.parse(e.data)
        //    console.log(JSON.parse(e.data))
            let wqgj_tem_xt=[]
            let wqgj_tem_bt=[]
            let dyc=true;
            let sfywq=false
            dataList.map(item=>{
                if(item.type == "WQGJ"){
                    sfywq=true
                    if(WQGJList.length ==0){
                        WQGJList = item.data
                    }else{
                        dyc=false;                      
                       item.data.map(index=>{
                           let _falg=true;
                           WQGJList.map(list =>{    
                            if(list.mc == index.mc){
                                    wqgj_tem_xt.push(index)
                                    _falg=false;
                                    return;                               
                                }       
                          
                            }) 
                            if(_falg){
                                wqgj_tem_bt.push(index)
                            }
                       })
                 
                    }
                   
                }
            }) 
            if(!sfywq){
                if(WQGJList.length>0){
                        WQGJList.map(item=>{
                            window["Map"].viewer.entities.removeById(item.mc)
                        })
                    }
            }
            if(!dyc){
            let _ls_data=[]
            if(WQGJList.length > 0){
                WQGJList.map(item=>{
                    let _f_f=true;
                    if(wqgj_tem_xt.length > 0){
                        wqgj_tem_xt.map(_item=>{
                            if(item.mc!=_item.mc){
                                _f_f=false;
                            }
                        })
                        if(!_f_f){
                            _ls_data.push(item)
                        }
                       
                    }

                })
                    //删除
                    if(_ls_data.length >0){
                        _ls_data.map(item=>{
                            // window["Map"].entities.removeById(item.mc)
                            window["Map"].viewer.entities.removeById(item.mc)
                        })
                    }
                    
            
            }
            WQGJList=wqgj_tem_xt
            WQGJList.push(...wqgj_tem_bt)

            }
            
          }
        }
      };
    },

    /**
     * ws数据处理事件
     */
    dealMessage(data) {
    //   console.log(data)
      const _this = this;
      let notifyList = [];
      let id = sessionStorage.getItem("selectEd")
      let ptData = JSON.parse(sessionStorage.getItem("ptData"))
      ptData.map(item => {
          if(item.id == id) {
              _this.jiaciName = item.ptmc.slice(-7,-2)
              sessionStorage.setItem('jiaciName',_this.jiaciName)
          }
      })
      if (data.length == 0) return;

      //--------------比对出当前播放时间
      let date = "";
      if (data[0].data["sb"]) {
        date = data[0].data["sb"].split(".")[0];
      } else if (data[data.length - 1]["data"]) {
        date = data[data.length - 1]["data"].split(".")[0];
      } else if (data[0].data["sjbq"]) {
        date = data[0].data["sjbq"].split(".")[0];
      } else if (data[0].data["sb"]) {
        date = data[0].data["sb"].split(".")[0];
      }
      //--------------
      if (!date) return;
      if (this.fjlnglat) {
        let datas = [
          Number(data[0].data.zjjd),
          Number(data[0].data.zjwd),
          5000
        ];

        window.Map.Tool.FlyTo([datas[0], datas[1], 2000000]);
        this.fjlnglat = false;
      }
      let newDate = date;
          arrTime = []
          window["Map"].viewer.clock.currentTime = Cesium.JulianDate.fromDate(
            new Date(date)
          );
          let totleTime = _this.countDate(_this.allDate.startT,_this.allDate.endT)
          let startTime = Cesium.JulianDate.fromDate(new Date(_this.allDate.startT));
          var dfTime = (window["Map"].viewer.clock.currentTime.dayNumber - startTime.dayNumber)*86400 + (window["Map"].viewer.clock.currentTime.secondsOfDay - startTime.secondsOfDay)
          if(window["Map"].viewer.clock.currentTime.dayNumber != window["Map"].viewer.clock.startTime.dayNumber){
            dfTime =  "00:00:00";
            _this.progress(dfTime,totleTime)
            
          } else {
            _this.timeNow = (new Date(_this.allDate.startT).getTime()/1000 + Number(dfTime.toFixed(0)))*1000;
            _this.progress(_this.formatSeconds(dfTime),totleTime)
            
          }
          this.setZZTime()
          
        // }
      if (this.newDate != newDate) {
        
        this.dqsjd = newDate
        try {
            _this.$refs["myreplay"].$refs['myterrace'].setLineOption(data[0].data);
        } catch (e){

        }

        let y = [];
        this.newDate = newDate;
        //--------------------------比对当前播放时间之前所有数据
        let a = this.dataBH.CTMBSJ.filter(item => {
          let date1 = newDate;
          let date2 = item["mbsj"].split(".")[0];
          //console.log(new Date(date1).getTime(),new Date(date2).getTime())
          if (new Date(date1).getTime() > new Date(date2).getTime())
            return item;
        });
        let b = this.dataBH.FBSJ.filter(item => {
          let date1 = newDate;
          let date2 = item["sb"].split(".")[0];

          if (new Date(date1).getTime() > new Date(date2).getTime())
            return item;
        });
        let c = this.dataBH.FBMBSJ.filter(item => {
          let date1 = newDate;
          let date2 = item["mbsj"].split(".")[0];

          if (new Date(date1).getTime() > new Date(date2).getTime())
            return item;
        });
        let d = this.dataBH.SDSJ.filter(item => {
          let date1 = newDate;
          let date2 = item["sjs"].split(".")[0];

          if (new Date(date1).getTime() > new Date(date2).getTime())
            return item;
        });
        //--------------------------


        //-----------------------比对浮标信息框状态
        let ztData = {};
         _this.FBnum = 0;
        data.map(item => {
          if (item.type.indexOf("FBTFSJ") != -1) {
            for (let key in item.data) {
              if (key.indexOf("fbxh") != -1) {
                let num = key.split("fbxh")[1];
                ztData[item.data[key]] = item.data["fbzt" + num];
              }
            }
          }
        });
        b.map(item => {
          if (ztData.hasOwnProperty(item.fbbh)) {
            item.fbzt = ztData[item.fbbh];
          } else {
            item.fbzt = "成活";
          }
        });
        //---------------------------
        this.$refs["myreplay"].updtea({ a, b, c, d });
        if (a.length > 0) {
           _this.notifyType = 'CTMBSJ';
           
          a.map((item, i) => {
            item.typeall = 'CTMBSJ'
            dealCtSJMB(item, i,_this);
          });
          notifyList = [...notifyList,...a]
          
        }
        if (b.length > 0) {
          _this.notifyType = 'FBSJ';
           
          b.map(item => {
            _this.FBnum = ++_this.FBnum
            item.typeall = 'FBSJ'
            dealFbSJ(item,_this);
          });
          notifyList =  [...notifyList,...b]

        }
        if (c.length > 0) {
          _this.notifyType = 'FBMBSJ';
          
          c.map(item => {
            
            item.typeall = 'FBMBSJ'
            dealFbSJMb(item);
          });
         notifyList =  [...notifyList,...c]
        }
        if(notifyList.length != _this.notifyList.length){
          // _this.notifyList = notifyList
          // for (var i = notifyList.length - 1; i > 0; i--) {
          //   for (var j = 0; j < i; j++) {
          //     if (notifyList[j].sb?notifyList[j].sb:notifyList[j].mbsj > notifyList[j+1].sb?notifyList[j+1].sb:notifyList[j+1].mbsj) {
          //       [notifyList[j], notifyList[j + 1]] = [notifyList[j + 1], notifyList[j]];
          //     }
          //   }
          // }
          _this.notifyList = _this.bSort(notifyList)
          _this.eventsF = true
        }
        
        // 处理浮标数据
        function dealFbSJ(item,_this) {
          if (window.Map.viewer.entities.getById("detector_" + item["fbbh"]))
            return;
          if (item["jcxxid"] != "0") {
            if (Number(item["llcrswzjd"]) && Number(item["llcrswzwd"])) {
              _this.FBnum = ++_this.FBnum;
              let FBLX = '';
              if(item.fblx=="被动全向"){
                FBLX = 'L'
              }
              if(item.fblx=="被动定向"){
                FBLX = 'D'
              }
              if(item.fblx=="主动全向"){
                FBLX = 'R'
              }
              if(item.fblx=="海噪声浮标"){
                FBLX = 'A'
              }
              if(item.fblx=="温深浮标"){
                FBLX = 'B'
              }
              window.Map.Detector.Add({
                id: "detector_" + item["fbbh"],
                positions: [
                  Number(item["llcrswzjd"]),
                  Number(item["llcrswzwd"])
                ],
                R: 2000,
                origin: item,
                type: FBLX,
                blink:true
              });
            }
          }
        }
        //武器轨迹
        function dealWqgj(s) {    
          s.map(t=>{
            let entity = window.Map.viewer.entities.getById(t.mc);
            if(entity){
              entity.position =new Cesium.CallbackProperty(function(){
                return Cesium.Cartesian3.fromDegrees(Number(t.jd),Number(t.wd))
              },false)
            } else {
              window.Map.viewer.entities.add({
                id:t.mc,
                position:Cesium.Cartesian3.fromDegrees(Number(t.jd),Number(t.wd)),
                type:'wqgj',
                label:{
                  text:t.mc,
                  font:'16px bold',
                  fillColor:Cesium.Color.BLUE,
                  pixelOffset:new Cesium.Cartesian2(10,20)
                },
                billboard:{
                  image:'/static/image/junbiao/daodan.png',
                  width:30,
                  height:30,
                  rotation:Cesium.Math.toRadians(Number(360 - Number(t.hjj || t.hx)))
                }
              })
            }
          })
        }
        // 处理浮标目标数据
        function dealFbSJMb(item) {
          //1号文件中置信度低于100的不要显示了，增加置信度判断功能  （1号文件就是浮标目标数据）
          if (window.Map.viewer.entities.getById("detector_" + item["fbbh"]))
          return;
          if (Number(item["mbwzjd"]) && Number(item["mbwzwd"])) {
            _.forEach(item, (v, k) => {
              if (k.indexOf("dwfbxh") != -1) {
                var FbId = "detector_" + item[k];
                let fbbhName = ''
                if(item.dwfbxh1 != '0'){
                  fbbhName = item.dwfbxh1.slice(-3)+'/'
                }
                if(item.dwfbxh2 != '0'){
                  fbbhName = fbbhName + item.dwfbxh2.slice(-3)+'/'
                }
                if(item.dwfbxh3 != '0'){
                  fbbhName = fbbhName + item.dwfbxh3.slice(-3)+'/'
                }
                if(item.dwfbxh4 != '0'){
                  fbbhName = fbbhName + item.dwfbxh4.slice(-3)+'/'
                }
                if(item.dwfbxh5 != '0'){
                  fbbhName = fbbhName+item.dwfbxh5.slice(-3)+'/'
                }
                if(item.dwfbxh6 != '0'){
                  fbbhName = fbbhName+item.dwfbxh6.slice(-3)+'/'
                }
                let link = {
                  id: "Link_" + FbId,
                  positions: [Number(item["mbwzjd"]), Number(item["mbwzwd"])],
                  origin: item,
                  fbbh:fbbhName,
                  blink:true
                };
                window.Map.Detector.LinkOn(FbId, link);
              }
            });
          }
        }

        // 处理磁探数据
        function dealCtSJMB(item,i,_this) {
          if(Number(item.mbzxd) < 100){
                return;
            }
          if (window.Map.viewer.entities.getById("citan_" + item["mbbh"]))
            return;
          if (Number(item["mbjd"]) && Number(item["mbwd"])) {
            window.Map.AddCtTarget({
              id: "citan_" + item["mbbh"],
              positions: [Number(item["mbjd"]), Number(item["mbwd"])],
              origin: item,
              name:sessionStorage.getItem('jiaciName'),
              blink:true
            });
          }
        }



      let Fbtfs = [];//浮标发布数据缓存 12-4
      _.forEach(data, item => { 
                    
        switch (item.type) {
          // 飞机
          case "FJ":
            //   刘川修改
            dealFeiji(item.data);
            _this.feijiCout = item.data;
            break;

          // 挂弹信息
          case "GDXX":
            // console.log("GDXX");
            break;
          // 潜艇信息
          case "QT":
            dealQT(item.data);
            // console.log('潜艇信息:',item)
            break;
          case "MC":
            dealMc(item.data);
            break;
          case "XMC":
            dealXMc(item.data);
            break;
          case "FBMBSJ":
            dealFbSJMb(item.data);
            break;
            // 处理浮标投放数据 12-4
          case "FBTFSJ":
                dealFbtfsj(item.data)
            break;
          case "FBTFSJ2":
                dealFbtfsj(item.data)
            break;
          case "FBTFSJ3":
                dealFbtfsj(item.data)
            break;
          case "FBTFSJ4":
                dealFbtfsj(item.data)
            break;
          case "WQGJ":
            dealWqgj(item.data)
            break;
        }
      });

        // 处理浮标投放数据 12-4 
      function dealFbtfsj(item){
          if(item){
            window.Map.Detector.Update(item)
            let ent = window.Map.viewer.entities;
            _.forEach(item, (v,k)=>{
                  if((k.indexOf('fbxh') != -1) && (v !== '0')){
                      Fbtfs.push(v)
                    ent.values.map(s=>{
                      if(s.id == ("detector_" + v)){
                        let index = k.slice(4)
                        let jd = item["fbsswzjd" + index];
                        let wd = item["fbsswzwd" + index];
                        s.position =new Cesium.CallbackProperty(function(){
                          return Cesium.Cartesian3.fromDegrees(Number(jd),Number(wd),0)
                        },false)
                        // s.position =Cesium.Cartesian3.fromDegrees(Number(jd),Number(wd),0)

                      }
                    })
                  }
              })
          }
      }

      Fbtfs = _.map(Fbtfs,(id)=>{
          return "detector_" + id
      })
        window.Map.Detector.Lights(Fbtfs)
      }

      /**------------------------------------------------------------------------------------------- */
       

      //   刘川修改
      //   处理飞机

      function dealFeiji(item) {
        if (window.Map.Tool.GetId("plane_1")) {
          window.Map.FlyCompare.Update(
            "plane_1",
            [Number(item[keyMap.lon]), Number(item[keyMap.lat]), 5000],
            item,
            function(e) {
              if (_this.visible == true && _this.type == "飞机") {
                _this.dataInfo = e;
              }
            }
          );
        } else {
          window.Map.AddCompare("feiji", {
            id: "plane_1",
            name: _this.FeijiName,
            position: [Number(item[keyMap.lon]), Number(item[keyMap.lat])]
          });
        }
      }

      // 处理潜艇
      function dealQT(item) {
        if (window.Map.Tool.GetId("subMarine_1")) {
          window.Map.FlyCompare.Update(
            "subMarine_1",
            [Number(item["jd"]), Number(item["wd"]), 5000],
            item,
            function(e) {},
            item.hx
          );
        } else {
          window.Map.AddCompare("qianting", {
            origin: item,
            id: "subMarine_1",
            name: "潜艇",
            position: [Number(item["jd"]), Number(item["wd"])]
          });
        }

        // window.Map.AddSubmarine({
        //     id:'subMarine_1',
        //     positions:[item['经度'],item['纬度']],
        //     angle:item['航向'],
        //     origin:item
        // })
      }

      function dealMc(items) {
        _.forEach(items, item => {
          if (window.Map.Tool.GetId(item.mcmc)) {
            window.Map.FlyCompare.Update(
              item.mcmc,
              [Number(item["jd"]), Number(item["wd"]), 0],
              item.data,
              function(e) {
                if (_this.visible == true && _this.type == "飞机") {
                  _this.dataInfo = e;
                }
              },
              item.hx
            );
          } else {
            window.Map.AddCompare("unknow", {
              origin: item,
              id: item.mcmc,
              name: item.mcmc,
              position: [Number(item["jd"]), Number(item["wd"])]
            });
          }
        });
      }

      function dealXMc(items) {

        _.forEach(items, item => {
          if (window.Map.Tool.GetId(item.cm)) {
            window.Map.FlyCompare.Update(
              item.cm,
              [Number(item["jd"]), Number(item["wd"]), 0],
              item,
              function(e) {},
              0
            );
          } else {
            window.Map.AddCompare("minchuan", {
              origin: item,
              id: item.cm,
              name: item.cm,
              position: [Number(item["jd"]), Number(item["wd"]), 0]
            });
          }
        });
      }

      // 处理浮标目标数据
      // function dealFbSJMb(item) {
      //   console.log(item,"++++++++++++++++++++++++++");
      //   //1号文件中置信度低于100的不要显示了，增加置信度判断功能  （1号文件就是浮标目标数据）
      //   if(item.zxd >0){
      //   let FbId = "detector_" + item["jcxxid"];
      //   if (item["mbwzjd"] && item["mbwzwd"]) {
      //       let fbbhName = ''
      //       if(item.dwfbxh1 != '0'){
      //         fbbhName = item.dwfbxh1.slice(-3)+'/'
      //       }
      //       if(item.dwfbxh2 != '0'){
      //         fbbhName = fbbhName + item.dwfbxh2.slice(-3)+'/'
      //       }
      //       if(item.dwfbxh3 != '0'){
      //         fbbhName = fbbhName + item.dwfbxh3.slice(-3)+'/'
      //       }
      //       if(item.dwfbxh4 != '0'){
      //         fbbhName = fbbhName + item.dwfbxh4.slice(-3)+'/'
      //       }
      //       if(item.dwfbxh5 != '0'){
      //         fbbhName = fbbhName+item.dwfbxh5.slice(-3)+'/'
      //       }
      //       if(item.dwfbxh6 != '0'){
      //         fbbhName = fbbhName+item.dwfbxh6.slice(-3)+'/'
      //       }
      //
      //       let link = {
      //         id: item.jcxxid,
      //         positions: [Number(item["mbwzjd"]), Number(item["mbwzwd"])],
      //         origin: item,
      //         fbbh:fbbhName
      //       };
      //       window.Map.Detector.LinkOn(FbId, link);
      //     }
      //   }
      // }
    },
    sendCommond(param) {
      console.log(this.fjlnglat);
      let that = this;
      $.ajax({
        type: "get",
        // dataType: "json",
        url: `${globalUrl.host}/find/findSystemStatus`,
        // contentType: "application/json;charset=UTF-8",//指定消息请求类型
        data: {
          groupNum: sessionStorage.getItem("groupNum")
        }, //将js对象转成json对象
        success: function(data) {
          sessionStorage.setItem("groupType", data);
          that.num = data.fps;
          that.$refs["timeLine"].num = that.num;
          if (data.yxzt == 3) {
            that.notifyList = []
            that.gdFlag = false
            that.num = data.fps
            that.fjlnglat = true;
            that.playFLAG = true;
            $.get(`${globalUrl.host}/find/triggerSocket`, {
              startTime: new Date(that.allDate.startT),
              name: sessionStorage.getItem("groupNum"),
              id: that.selectId
            }).then(data => {
              $.get(`${globalUrl.host}/find/fastAndSlow`, {
                multiple: 0,
                name: sessionStorage.getItem("groupNum")
              }).then(data => {
                // window.Map.viewer.clock.shouldAnimate = true;
                window["Map"].viewer.entities.removeAll();
                window.Map.AddCompare("feiji", {
                  id: "plane_1",
                  name: "平台飞机",
                  position: that.fjposData,
                  zjjd: that.fjposData[0],
                  zjwd: that.fjposData[1]
                });
                window.Map.FlyCompare.ClearPath();
                that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
                window[
                  "Map"
                ].viewer.clock.currentTime = Cesium.JulianDate.fromDate(
                  new Date(that.allDate.startT)
                );
                that.setZZTime()
                that.action = "暂停";
                that.num = 1;
                that.$refs["timeLine"].num = that.num;
              });
            });
          }
          if (data.yxzt == 2) {
            that.gdFlag = true
            that.num = data.fps
            that.fjlnglat = false;
            $.get(`${globalUrl.host}/find/pauseAndStart`, {
              name: sessionStorage.getItem("groupNum")
            }).then(data => {
              window.Map.viewer.clock.shouldAnimate = false;
            });
          }
          if (data.yxzt == 1) {
            that.gdFlag = true
            that.num = data.fps
            that.fjlnglat = false;
            $.get(`${globalUrl.host}/find/pauseAndStart`, {
              name: sessionStorage.getItem("groupNum")
            }).then(data => {
              window.Map.viewer.clock.shouldAnimate = false;
            });
          }
          // console.log()
        }
      });
      // if (this.fjlnglat)this.fjlnglat = true
    },
    fire() {
      window.Map.FlyCompare.Fire("realid_1", [125, 25]);
    },
    focus(mode) {
      this.trackMode = !mode;

      let pos = window.Map.viewer.entities.getById("plane_1")._origin;
      window.Map.Tool.FlyTo([pos.zjjd, pos.zjwd, 2000000]);
    },
    layerHandler() {
      window.Map.testImageHandler();
    },
    /**
     * 绑定标绘信息框触发事件
     */
    bindEvents() {
      const _this = this;
      document.addEventListener("click", e => {
        _this.visible = false;
      });
      var handler = new Cesium.ScreenSpaceEventHandler(
        window.Map.viewer.scene.canvas
      );
      handler.setInputAction(function(click) {
          $(".rangeSetterContainer").remove()
        _this.visible = false;
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
      window.Map.Event.Listen("EntityClick", function(e) {
        _this.dataInfo = e;
        setTimeout(() => {
         
         
          switch (e.type) {
            case "detector":
              //浮标探测器
              _this.visible = true;
              _this.type = "浮标探测器";
              break;
            case "feiji":
              //飞机
              _this.visible = true;
              _this.type = "飞机";
              break;
            case "qianting":
              //潜艇
              _this.visible = true;
              _this.type = "潜艇";
              break;
            case "minchuan":
              //潜艇
              _this.visible = true;
              _this.type = "民船";
              break;
            default:
              _this.visible = false;
              break;
          }
        }, 300);
      });

      window.Map.Event.Listen("MouseMove", function(e) {
        if (e.gps) {
          _this.mouseInfo = e.gps;
        }
      });

      window.Map.Event.Listen("EntityRightClick", function(e) {
        if (e.type == "feiji" || e.type == "detector") {
          window.Map.Menu.setRange(e.id);
        }
      });
    },
    toPosition(item){
      var jd,wd;
      if(item.typeall === 'FBSJ'){
         jd = item["llcrswzjd"];
         wd = item["llcrswzwd"];
      }
      if(item.typeall === 'CTMBSJ'){
        jd = item["mbjd"];
        wd = item["mbwd"];
      }
      if(item.typeall === 'FBMBSJ'){
        jd = item["mbwzjd"];
        wd = item["mbwzwd"];
      }
      window.Map.Tool.FlyTo([jd, wd, 40000]);
    }
  },
   computed: {
      optionSingleHeight () {
          return {
                  //                       （什么都不设置默认的）
                  //  singleHeight: 40     （带停顿的）  
                  // direction: 0,          //（从上往下的）
                  // direction:2           （左右的）
                  step:1,                //（调整速度的）0
                  // hoverStop:false        (鼠标停留停止 离开继续运行（反之则停止）)
                 // limitMoveNum: 1 ,    //这个是修改moveSwitch()之前的使用方法，这里的数值指的是数据条数
                  singleHeight:160,   //单个停止高度（默认为零无缝）=>方向0/1
                  waitTime: 8000    //（停顿时间）

                  }
        }
      }
};
</script>

