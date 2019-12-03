
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
  background: rgba(49, 172, 255, 0.89);
  /* position:fixed !important;
    bottom: 30px !important; */
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
  bottom: 10px;
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
  bottom:58px;
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
  bottom: 100px;
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
  bottom: 58px;
  width: 80%;

}
</style>

<template>
  <div class="MapContainer">
    
    
    <login @login="login" v-if="!loginFs" v-show="loginF"></login>
    <gis-header :timeNow="timeNow" @mapTool="maptool" @controller="controller" :WebSocketData="WebSocketData" :FBnum="FBnum"></gis-header>
    <div id="mapElement">
      <div class="time_bg">
        <div id="timeDiv"></div>
         <div id="progress" :style="'width:'+ widthNum +''"></div>
         <div :style="setZZStyle" class="timeLineZZ"></div>
        <div id="visualization" :style="visStyle"></div>
        <p style="margin:35px 0 0 35px;color:#ffffff">当前播放倍数：{{getNum()}}</p>
      </div>
    </div>
     <vue-seamless-scroll   id='mySeamless'  style="background: rgba(8, 38, 93, 0.5)"  :data="notifyList" :class-option="optionSingleHeight" class="seamless-warp">
        <div class="notifyDiv myMsgList" > 
          <div v-show='gdFlag' :style="{'height':item.typeall === 'FBSJ'?'160px':'130px'}" class="notify" v-for="(item, i) in notifyList " :key="i">
            <div v-show='gdFlag'  v-if="item.typeall === 'FBSJ'" >
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
                <span>经度</span><span>{{item["llcrswzjd"]}}</span>
              </p>
              <p>
                <span>纬度</span><span>{{item["llcrswzwd"]}}</span>
              </p>
            </div>
            <div v-show='gdFlag' v-if="item.typeall === 'CTMBSJ'">
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
            <div v-show='gdFlag' v-if="item.typeall === 'FBMBSJ'">
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
      </vue-seamless-scroll>
      <div v-show='eventType' class="time-label"  :style="{top: topNum + 'px', left: leftNum + 'px'}">
         <ul>
            <li style="color:#ffffff">事件时间：<el-date-picker
              v-model="newEventDate"
              type="datetime"
              placeholder="选择日期时间"
              align="right">
            </el-date-picker> </li>
            <li style="color:#ffffff">事件内容：<input type='text' v-model="eventVal"/></li>
            <li class="events-btn">
                <div @click='eventConfirm'>确定</div>
                <div @click='eventCancel'>取消</div>
            </li>
         </ul>
      </div>
    <!-- <div class="MBCS" v-show='isShow'>
        <div class="mbfj">
          <div style="width: 300px;height: 237px;">
            <div class="head-hidden"  @mousedown="draggerStart($event)"></div> 
            <div class="close" @click="isShow=false">
              x
            </div>
            <div class="nav">目标参数</div>
            <div class="cont">
                 <ul >
                    <li><span>经度</span><span>{{feijiCout['zjjd']}}</span></li>
                    <li><span>纬度</span><span> {{feijiCout['zjwd']}}</span></li>
                    <li><span>高度</span><span>{{feijiCout['gxqyg']}} 米</span></li>
                    <li><span>速度</span><span>{{feijiCout['ds']}} km/h</span></li>
                    <li><span>武器清单</span><span></span></li>
                 </ul>
            </div>
          </div>
        </div>
    </div> -->
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
    ></time-line>forBackWard
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
      leftNum:0
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
      console.log(data)
      
      clearTimeout(this.timeras)
      $(".myMsgList").eq(0).fadeIn();
      $(".myMsgList").eq(1).fadeIn();
      
      if(this.timerFlag){
           
        
        if(this.timeras){
  
          console.log(this.timeras)
        }
        this.timeras = setTimeout(() => {
          // console.log($("#myMsgList"))
          $(".myMsgList").eq(0).fadeOut();
          $(".myMsgList").eq(1).fadeOut();
        }, 60000);
      
      }
    }
  },
  mounted() {
    $('#mySeamless').on('mouseenter',() => {
      this.timerFlag = false
      if(this.timeras){
        clearTimeout(this.timeras)
        this.timeras = null
      }
      console.log(this.timeras)
     
      $(".myMsgList").eq(0).fadeIn();
      $(".myMsgList").eq(1).fadeIn();
    });
    $('#mySeamless').on('mouseleave',() => {
      this.timerFlag = true
      this.timeras = setTimeout(() => {
        // console.log($("#myMsgList"))
        $(".myMsgList").eq(0).fadeOut();
        $(".myMsgList").eq(1).fadeOut();
      }, 60000);
    });
    let that = this;
 
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
      // setTimeout(() => {
      //   this.setVisItem("2019-04-25 13:36:17")
      // },1000)
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
      }, 700);
    }
  },

  methods: {
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
      debugger
        let that = this
        let params = {
            nr:that.eventVal,
            sj:new Date(that.newEventDate),
            sjid:sessionStorage.getItem('selectEd')
        }
        $.ajax({
        type: "post",
        dataType: "json",
        url: `${globalUrl.host}/find/addSDSJ`,
        contentType: "application/json;charset=UTF-8",//指定消息请求类型
        data: JSON.stringify(params),//将js对象转成json对象
        success: function (data) {
            that.timeLabelF = false
                $.get(`${globalUrl.host}/find/findEventListForRex`, {
                sjid: sessionStorage.getItem('selectEd')
            }).then(data => {
                sessionStorage.setItem('allData',JSON.stringify(data))
                let dataArr = [];
                let viewer = window["Map"].viewer;
                for (let item of data.FBSJ) {
                    dataArr.push({
                        data: item,
                        // id: item["jcxxid"],
                        content: "<span class='icon1'></span>",
                        start: item["sb"].split(".")[0],
                        types: "浮标投放"
                    });
                }
                for (let item of data.CTMBSJ) {
                    dataArr.push({
                        data: item,
                        // id: item["mbsj"],
                        content: "<span class='icon2'></span>",
                        start: item["mbsj"].split(".")[0],
                        types: "目标探测"
                    });
                }
                for (let item of data.FBMBSJ) {
                    dataArr.push({
                        data: item,
                        // id: item["mbsj"],
                        content: "<span class='icon2'></span>",
                        start: item["mbsj"].split(".")[0],
                        types: "目标探测"
                    });
                }
                for (let item of data.SDSJ) {
                    // console.log(that.toDate(item["sj"]));
                    dataArr.push({
                        data: item,
                        // id: item["mbsj"],
                        content: "<span class='icon3'></span>",
                        start: that.toDate(item["sjs"]),
                        types: "手动事件"
                    });
                }

                that.timeItemArr = dataArr;  

                window.onresize = function() {
                  // that.visWidth = viewer.timeline.lastWidth
                  setTimeout(() => {
                    that.setZZ()
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

            })
        }
    });
    },
    eventCancel(){
       this.eventType =false;
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
                window.Map.Tool.FlyTo([Number(data.zjjd), Number(data.zjwd), 2000000]);
              
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
      debugger
      
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
        if (this.num == 1) {
          this.num = 1/2;
        } else if (this.num == 2) {
          this.num = 1;
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
        // console.log(new Date(that.allDate.startT))
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
   doubleClick(){
     debugger
     alert("1111")
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
          for (var i = notifyList.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
              if (notifyList[j].sb?notifyList[j].sb:notifyList[j].mbsj > notifyList[j+1].sb?notifyList[j+1].sb:notifyList[j+1].mbsj) {
                [notifyList[j], notifyList[j + 1]] = [notifyList[j + 1], notifyList[j]];
              }
            }
          }
          that.notifyList = notifyList
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

     $(".cesium-viewer-timelineContainer").dblclick(function(){
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
      that.FBnum = 0;
      let notifyList = [];
      that.notifyType = '';
      // debugger
      console.log(data)
      window["Map"].viewer.entities.removeAll();
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
        console.log(that.notifyList )
        notifyList = [...notifyList,...data["CTMBSJ"]]

        
      }

      console.log(that.notifyList)
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
        for (var i = notifyList.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
              if (notifyList[j].sb?notifyList[j].sb:notifyList[j].mbsj > notifyList[j+1].sb?notifyList[j+1].sb:notifyList[j+1].mbsj) {
                [notifyList[j], notifyList[j + 1]] = [notifyList[j + 1], notifyList[j]];
              }
            }
          }
          that.notifyList = notifyList
      }
     
      // 处理浮标数据
      function dealFbSJ(item,that) {
        // console.log(item);
        // console.log(Number(item['fbsswzjd1']),Number(item['fbsswzwd1']))    
        if (item["jcxxid"] != "0") {
           that.FBnum = ++that.FBnum;
           window.Map.Detector.Add({
            id: "detector_" + item["fbbh"],
            positions: [Number(item["llcrswzjd"]), Number(item["llcrswzwd"])],
            R: 2000,
            origin: item
          });

        }
      }

      // 处理浮标目标数据
      function dealFbSJMb(item) {
        let FbId = "detector_" + item["jcxxid"];

        let link = {
          id: "Link_1",
          positions: [Number(item["mbwzjd"]), Number(item["mbwzwd"])],
          origin: item
        };

        window.Map.Detector.LinkOn(FbId, link);
      }

      // 处理磁探数据
      function dealCtSJMB(item, i,that) {
        window.Map.AddCtTarget({
          id: "citan_" + item["mbbh"],
          positions: [Number(item["mbjd"]), Number(item["mbwd"])],
          origin: item
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
      
      
      viewer.timeline.addEventListener(
        "setzoom",
        function(e) {
          let a = new Cesium.JulianDate.toDate(e.startJulian);
          let b = new Cesium.JulianDate.toDate(e.endJulian);
          setTimeout(() => {
              $('.vis-box').each((i,v) => {
                  // v.style.top = '22px !important'
                  $(v).css('cssText','top:22px !important;left:'+$(v).css('left'))
              })
          },1000) 
          that.$refs["timeLine"].timeline.setOptions({
            start: a,
            end: b
          });

          that.startXd();
        },
        false
      );
      // viewer.clock.shouldAnimate = true;
      viewer.clock.startTime = startTime;
      viewer.clock.stopTime = stopTime;

      that.setZZ()
      

      viewer.timeline.addEventListener(
        "mouseup",
        function(e) {
          var dfTime = (viewer.clock.currentTime.dayNumber - startTime.dayNumber)*86400 + (viewer.clock.currentTime.secondsOfDay - startTime.secondsOfDay)
          
            console.log(new Cesium.JulianDate.toDate(viewer.clock.currentTime))
            that.progress(that.formatSeconds(dfTime),totleTime)
            // console.log(viewer.clock)
            that.diffTime(new Cesium.JulianDate.toDate(viewer.clock.currentTime));

          
          window.Map.FlyCompare.ClearPath();
          that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
          that.$refs["myreplay"].$refs['myterrace'].setLineOption(false);
          $.get(`${globalUrl.host}/find/triggerSocket`, {
            startTime: new Cesium.JulianDate.toDate(viewer.clock.currentTime),
            name: sessionStorage.getItem("groupNum"),
            id: that.selectId
          }).then(data => {
            that.playFLAG = true;
            that.$refs.timeLine.playFlag = true;
            that.setZZTime()
            // that.num = 0;
            // that.$refs["timeLine"].num = that.num;
          });
        },
        false
      );
    
      this.startXd();

      that.progress(nowTime,totleTime)
      this.dqsjd = this.allDate.startT
      setInterval(()=>{
        var dfTime = (viewer.clock.currentTime.dayNumber - startTime.dayNumber)*86400 + (viewer.clock.currentTime.secondsOfDay - startTime.secondsOfDay)
        if(viewer.clock.currentTime.dayNumber != viewer.clock.startTime.dayNumber){
          dfTime =  "00:00:00";
          that.progress(dfTime,totleTime)
          
        } else {
          that.timeNow = (new Date(that.allDate.startT).getTime()/1000 + Number(dfTime.toFixed(0)))*1000;
          that.progress(that.formatSeconds(dfTime),totleTime)
          
        }
      },1000)
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
        this.dqsjd = this.allDate.startT
        that.gdFlag = false
        //  window.Map.viewer.clock.shouldAnimate = false;
        window.Map.viewer.clock.currentTime = Cesium.JulianDate.fromDate(
          new Date(this.allDate.startT)
        );
        that.setZZTime()
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
      }, 300);
    },

    /**
     * 初始化ws事件
     */
    buildSocket(type) {
      const _this = this;
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
          // if (type) {
          //   $.get(`${globalUrl.host}/find/triggerSocket`, {
          //     startTime: new Date(_this.allDate.startT),
          //     name: sessionStorage.getItem('groupNum'),
          //     id: _this.selectId
          //   }).then(data => {
          //     $.get(`${globalUrl.host}/find/fastAndSlow`, {
          //       multiple: 0,
          //       name: sessionStorage.getItem('groupNum')
          //     }).then(data => {
          //       // window.Map.viewer.clock.shouldAnimate = true;
          //       _this.action = "暂停";
          //       _this.num = 0;
          //       _this.$refs["timeLine"].num = _this.num;
          //     });
          //   });
          // }
          _this.wsF = false;
        } else {
          //  window.Map.viewer.clock.shouldAnimate = true;
          _this.WebSocketData = JSON.parse(e.data);

        //   console.log(JSON.parse(e.data)[0].LKR);
          let data = JSON.parse(e.data)[0].LKR;
          if (data) {
            _this.num = data.fps;
            _this.$refs["timeLine"].num = _this.num;
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
          }
        }
      };
    },

    /**
     * ws数据处理事件
     */
    dealMessage(data) {
      const _this = this;
      let notifyList = [];

      // _this.notifyType = '';
      if (data.length == 0) return;
     // debugger
    //   console.log(data)
    // console.log(data)

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
        // window.Map.AddCompare("feiji", {
        // 	id: "plane_1",
        // 	name: _this.FeijiName,
        // 	position:datas,
        // 	zjjd: datas[0],
        // 	zjwd:datas[1],
        // });
        this.fjlnglat = false;
      }
      let newDate = date;
      
      arrTime.push(1)
      // console.log(arrTime)
       if(arrTime.length == 12){
          // console.log(arrTime)
          arrTime = []
          window["Map"].viewer.clock.currentTime = Cesium.JulianDate.fromDate(
            new Date(date)
          );
          this.setZZTime()
          
        }
      if (this.newDate != newDate) {
        
        this.dqsjd = newDate
        // console.log(arr)
       
        // setTimeout(_ => {
        //   window["Map"].viewer.clock.currentTime = Cesium.JulianDate.fromDate(
        //     new Date(this.dqsjd)
        //   );
        // },500)
        // console.log(this.newDate,newDate)
        
        try {
            _this.$refs["myreplay"].$refs['myterrace'].setLineOption(data[0].data);
        } catch (e){

        }

        let y = [];

        //--------------------------比对当前播放时间是否到达标绘时间点
        // if (_this.$refs["timeLine"].timeItemArr.length > 0) {
        //   y = _this.$refs["timeLine"].timeItemArr.filter(item => {
        //     return (
        //       new Date(item.start).getTime() == new Date(newDate).getTime()
        //     );
        //   });
        // }
        //--------------------------

        // if (y.length > 0) {
        //   this.hingeMsgEvent(y[0].data.nr);
        //   _this.$refs["timeLine"].timeline.focus(y[0].id);
        //   _this.$refs["timeLine"].timeline.setSelection(y[0].id);
        // }
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
          for (var i = notifyList.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
              if (notifyList[j].sb?notifyList[j].sb:notifyList[j].mbsj > notifyList[j+1].sb?notifyList[j+1].sb:notifyList[j+1].mbsj) {
                [notifyList[j], notifyList[j + 1]] = [notifyList[j + 1], notifyList[j]];
              }
            }
          }
          _this.notifyList = notifyList
        }
        
        // 处理浮标数据
        function dealFbSJ(item,_this) {
          //debugger
          if (window.Map.viewer.entities.getById("detector_" + item["fbbh"]))
            return;
          if (item["jcxxid"] != "0") {
            if (Number(item["llcrswzjd"]) && Number(item["llcrswzwd"])) {
              _this.FBnum = ++_this.FBnum;
              window.Map.Detector.Add({
                id: "detector_" + item["fbbh"],
                positions: [
                  Number(item["llcrswzjd"]),
                  Number(item["llcrswzwd"])
                ],
                R: 2000,
                origin: item
              });
            }
          }
        }

        // 处理浮标目标数据
        function dealFbSJMb(item) {
          if (Number(item["mbwzjd"]) && Number(item["mbwzwd"])) {
            _.forEach(item, (v, k) => {
              if (k.indexOf("dwfbxh") != -1) {
                var FbId = "detector_" + item[k];
                let link = {
                  id: "Link_" + FbId,
                  positions: [Number(item["mbwzjd"]), Number(item["mbwzwd"])],
                  origin: item
                };
                window.Map.Detector.LinkOn(FbId, link);
              }
            });
            {
            }
          }
        }

        // 处理磁探数据
        function dealCtSJMB(item, i,_this) {
          if (window.Map.viewer.entities.getById("citan_" + item["mbbh"]))
            return;
          if (Number(item["mbjd"]) && Number(item["mbwd"])) {
            window.Map.AddCtTarget({
              id: "citan_" + item["mbbh"],
              positions: [Number(item["mbjd"]), Number(item["mbwd"])],
              origin: item
            });
          }
        }

      }

      /**------------------------------------------------------------------------------------------- */

      _.forEach(data, item => {
        // console.log( item )
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
        }
      });

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
      function dealFbSJMb(item) {
        let FbId = "detector_" + item["jcxxid"];
        if (item["mbwzjd"] && item["mbwzwd"]) {
          let link = {
            id: item.jcxxid,
            positions: [Number(item["mbwzjd"]), Number(item["mbwzwd"])],
            origin: item
          };
          window.Map.Detector.LinkOn(FbId, link);
        }
      }
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
        _this.visible = false;
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
      window.Map.Event.Listen("EntityClick", function(e) {
        _this.dataInfo = e;
        setTimeout(() => {
          console.log(e)
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

