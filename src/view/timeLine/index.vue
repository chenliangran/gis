
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.icon1{
    display: inline-block;
    background: url(../../assets/icon1.png) no-repeat;
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
}
.cesium-timeline-icon16{
    height: 100px;
    padding: 0px;
    background: rgba(49, 172, 255, 0.89);
    /* position:fixed !important;
    bottom: 30px !important; */
}
.icon2{
    display: inline-block;
    background: url(../../assets/icon2.png) no-repeat;
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
}
.icon3{
    display: inline-block;
    background: url(../../assets/icon3.png) no-repeat;
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
}
.vis-item-content{
    padding: 0px !important;
}
.vis-box{
    background: rgba(0,0,0,0);
    border: none;
    color: rgba(0,0,0,0);
    margin: 0px!important;
}
.infoContainer{
    position: fixed;
    top:0;
    right:20px;
    color:red
}
#visualization{
  /* height: 500px; */
  /* width: 100%; */
  /* top:0; */
  bottom: 0px;
  /* width: 80%; */
  position: absolute;
  z-index: 100000;
  /* padding-bottom: 27px; */
  /* background: red; */
}
.bottonContainer{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    bottom:70px;
    left: 40% ;
    z-index: 10000;
    margin: 0 auto;
    /* background: url(../assets/time_1.png) no-repeat!important; */
    background-size: 100% 100%!important;
}
.icon-bigdiv{

    /* background: url(../../assets/time_1.png) no-repeat!important;
    background-size: 100% 100%!important; */
}
.bottonContainer button{
    margin:0 5px;
    border: none;
     /* background: url(../assets/time_1.png) no-repeat!important; */
    background-size: 100% 100%!important;
    padding:0px 0px;
    /* border:2px solid rgba(86, 176, 228, 0.774); */
    /* outline:2px solid #ffffff; */
    color:#ffffff;
}
.infoContainer{
    position: fixed;
    bottom:0;
    left:300px;
}
#mapElement{
    position: fixed;
    width: 100%;
    height: 100%;
}
.xdDate{
    position: absolute;
    /* bottom: 100px; */
    z-index: 100000;

    color: #ffffff;
}
.cesium-viewer-timelineContainer,.cesium-viewer-zoomIndicatorContainer{
    /* width: 90%; */
    bottom:30px;
    /* left: 5% !important; */
    overflow: hidden;
}
#xdsj{
    position: relative;
    width: calc(100% - 20px);
    overflow: hidden;
    margin: 0px;
    /* position: absolute; */
    height: 25px;
    /* left: 5% !important; */
    top: 20px;
}
.bigTimeDiv{
    width: calc(100% - 20px);
    position: absolute;
    height: 100px;
    bottom:10px;
    background: url(../../assets/time_bg.png) no-repeat;
    background-size: 100% 100%;
    z-index: 0;
    padding:0 10px 0 11px;
    overflow: hidden;
}
.cesium-viewer-timelineContainer{
    position: fixed !important;
    z-index: 10000000 !important;
    left: 10px!important;
    right: 10px!important;
} 
.cesium-timeline-bar{
    background: url(../../assets/time_1.png) no-repeat!important;
    background-size: 100% 100%!important;

}
.icon-button{
    width: 16px;
    height: 14px;
}
.icon-rest{
    background: url(../../assets/icon/重置.png) no-repeat!important;
    /* border-right: 1px solid #000000!important; */
}
.icon-play{
    background: url(../../assets/icon/Play.png) no-repeat!important;
    /* border-right: 1px solid #000000!important; */
}
.icon-filter{
    margin: 0px!important;
    width: 36px;
    height: 34px;
    background: url(../../assets/icon/Filter.png) no-repeat!important;
    /* border-right: 1px solid #000000!important; */
}

.icon-Pause{
    background: url(../../assets/icon/Pause.png) no-repeat!important;

}
.icon-Previous-q{
    background: url(../../assets/icon/PreviousQ.png) no-repeat!important;

}
.icon-Previous-t{
    background: url(../../assets/icon/Previous.png) no-repeat!important;
}
.icon-Stop{
    background: url(../../assets/icon/Stop.png) no-repeat!important;
}
.icon-fire{
    background: url(../../assets/icon/fire.png) no-repeat!important;
}
.icon-focus{
    background: url(../../assets/icon/focus.png) no-repeat!important;
}
.icon-layerHandler{
    background: url(../../assets/icon/layerHandler.png) no-repeat!important;
}
.icon-chart{
    background: url(../../assets/icon/图表.png) no-repeat!important;
}
.icon-plot{
    width: 19px;
    height: 22px;
    background: url(../../assets/icon/plot.png) no-repeat!important;
    background-size: 100% 100%!important;
    border: none;
}
.icon-Filter{
    margin: 0px!important;
    width: 18px;
    height: 22px;
    background: url(../../assets/icon/Filter.png) no-repeat!important;
    border: none;
}
.icon-wq{
    width: 28px;
    height: 17px;
    background: url(../../assets/icon/wq.png) no-repeat!important;
    border: none;
}
.icon-div{
    width: 24px;
    height: 24px;
    padding: 0 6px;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.icon-div{
    margin: 5px 0;
    /* border-right: 1px solid #155073; */
}
.time-label{
    width: 346px;
    height:168px;
    background: red;
    position: fixed;
    z-index: 100000000;
    background: url(../../assets/icon/小标牌.png) no-repeat!important;
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
	background: url(../../assets/icon/按钮.png) no-repeat!important;
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
    width: 100px;
    pointer-events: all;
    background: url(../../assets/icon/login.png) no-repeat!important;
	background-size: 100% 100%!important;
    padding: 2px;
    color: #8efffb;
    border: none;
    height: 24px;
}
/* .icons{
    border: none;
}
.icon-Play{
    background: url(../assets/icon/Play.png) no-repeat!important;
    width: 12px;
    height: 12px;
} */
.showFilter{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    bottom:80px;
    right: 400px;
    z-index: 10000;
    margin: 0 auto;
}
.showFilter p{
    width: 70px;
    color: #83efe6;
	font-size: 14px;
}
/* .bottomicon{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    bottom:70px;
    right: 40px;
    z-index: 10000;
} */
</style>

<template>
  <div class="MapContainer">
      
    <!-- <div id="mapElement"></div> -->
    <div class="bottonContainer">
        <!-- <span style='color:#8efffb;text-shadow: 2px 2px 2px rgb(0,0,0);'>FPS:{{FPS}}</span> -->
        <!-- <div class='icon-div-'> -->
                <!-- <button class=" icon-filter" @click="filters()"></button> -->
            <!-- </div> -->
        <div style="display:flex" class="icon-bigdiv">
            <div class='icon-div'>
                <button class="icon-button icon-play" @click="sendCommond('playFlag')"></button>
            </div>
            <div class='icon-div'>
                <button class="icon-button icon-Pause" @click="sendCommond('playPause')"></button>
            </div>
            <div class='icon-div'>
                <button class="icon-button icon-Stop" @click="closeSocket()"></button>
            </div>
            <div class='icon-div'>
                <button class="icon-button icon-Previous-t" @click="forBackWard('back')"></button>
            </div>
            <div class='icon-div'>
                <button class="icon-button icon-Previous-q" @click="forBackWard('enter')"></button>
            </div>
            

			<div class='icon-div'>
                <button class="icon-button icon-focus" @click="focus(trackMode)"></button>
            </div>
            <!-- <div class='icon-div'>
                <button class="icon-button icon-fire" @click="fire()"></button>
            </div>
            <div class='icon-div'>
                <button class="icon-button icon-focus" @click="focus(trackMode)"></button>
            </div>
            <div class='icon-div'>
                <button class="icon-button icon-layerHandler" @click="layerHandler()"></button>
            </div> -->
            <div class='icon-div'>
                <button class="icon-button icon-chart" @click="chart()"></button>
            </div>
            <div class='showFilter'>
                <p>事件显隐：</p>
                <!-- <button class="icon-filter"  @click="filters()"></button> -->
                <el-switch
                v-model="filtersF"
                active-color="#13ce66"
                inactive-color="#83efe6">
                </el-switch>
            </div>
        </div>
        
        <!-- <span style='color:#8efffb;text-shadow: 2px 2px 2px rgb(0,0,0);'>x{{num}}</span> -->
    </div>
    <!-- <div class="infoContainer">
        {{mouseInfo.lon}}/{{mouseInfo.lat}}
    </div> -->
    <div class="bigTimeDiv">
        <!-- <div id="visualization" :style="visStyle"></div>
        <div id='xdsj'></div> -->
        <div v-show='timeLabelF' :style='timeLabelS' class="time-label">
            <ul v-show="timeLabelType&&buoyDataType == '浮标投放'">
                <li>浮标编号：<span>{{buoyData['fbbh']}}</span></li>
                <li>投放经度：<span>{{buoyData['llcrswzjd']}}</span></li>
                <li>投放纬度：<span>{{buoyData['llcrswzwd']}}</span></li>
                <li>浮标类型：<span>{{buoyData['fblx']}}</span></li>
                <li>投放时间：<span>{{buoyData['start']}}</span></li>
            </ul>
            <ul v-show="timeLabelType&&buoyDataType == '目标探测'">
                <li>纬度：<span>{{buoyData['mbwd']||buoyData['mbwzjd']}}</span></li>
                <li>经度：<span>{{buoyData['mbjd']||buoyData['mbwzwd']}}</span></li>
                <!-- <li>浮标类型：<span>{{buoyData['zx']}}</span></li> -->
                <li>时间：<span>{{buoyData['start']}}</span></li>
            </ul>
            <ul v-show="timeLabelType&&buoyDataType == '手动事件'">
                <li>内容：<span>{{buoyData['nr']}}</span></li>
                <!-- <li>经度：<span>{{buoyData['mbjd']}}</span></li> -->
                <!-- <li>浮标类型：<span>{{buoyData['zx']}}</span></li> -->
                <li>时间：<span>{{buoyData['start']}}</span></li>
            </ul>
            <ul v-show='!timeLabelType'>
                <li style="color:#ffffff">事件时间：<input type='text' v-model="newEventDate" /> </li>
                <li style="color:#ffffff">事件内容：<input type='text' v-model="eventVal"/></li>
                <li class="events-btn"><div @click='eventConfirm'>确定</div>
			        <div @click='eventCancel'>取消</div></li>
                
            </ul>
        </div>
    </div>
    <!-- <div class="bottomicon">
         <div class='icon-div'>
            <button class="icon-button icon-plot"></button>
        </div>
        <div class='icon-div'>
            <button class="icon-button icon-Filter"></button>
        </div>
        <div class='icon-div'>
            <button class="icon-button icon-wq"></button>
        </div>
    </div> -->
    <filters @cancel='filterCancel' @confirm='filterConfirm' v-show='filtersF'></filters>
  </div>
</template>

<script>

import filters from './filter.vue'

let socketController = null;


export default {

  name: 'Time',

  data:function(){

      return {
          playFlag:false,
          newEventDate:'',
          FPS:0,
          buoyDataType:'',
          eventVal:'',
          timeLabelType:true,
          filtersF:false,
          buoyData:{},
          timeLabelF:false,
          timeLabelS:{
              'left':0,
              'bottom':'50px'
          },
        num:0,
        action:'暂停',
        timeItemArr:[],
        newDate:'',
          timeline:'',
          playerCurrentTime:'',
          trackMode:false,
          mouseInfo:{
              lon:0,
              lat:0
          },
          visStyle:{
            width:'500px',
            right:'0px',
            left:'0px'
        },
        times:'',
        allDate:{
            startT:'',
            endT:''
        },
				num:0,
				dataInfo: {},
                visible: false,
                info:{},
                type: "",
                WebSocketData: {},
                buoyInfo: {},
                showInfo: false
      }
  },

  props: {
    msg: String
  },
  components:{
      filters
  },

  mounted() {
      this.showFPS().go()
    //   this.getAllDate()
    
  },

  methods: {
        /**
       * lkr    
       * 时间线  
       */
      //---------------------------------------------分割线---------------------------------------------------//
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
      eventConfirm(){
          let that = this
          let params = {
            // sdtjsj:{
                nr:this.eventVal,
                sj:new Date(this.newEventDate),
                sjid:sessionStorage.getItem('selectEd')
            // }
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
                     console.log(that.timeItemArr)
                    that.timeline.setItems(that.timeItemArr)    

                })
            }
        });

        
      },
      eventCancel(){
          this.timeLabelF = false
      },
      filterConfirm(data){
          console.log(data)
          let arrData = []
          data.map(item => {
              this.timeItemArr.map(obj => {
                  if(item == obj.types){
                      arrData.push(obj)
                  }
                  
              })
          })
          this.timeline.setItems(arrData)

      },
      filterCancel(){
          this.filtersF = false
      },
      filters(){
          this.filtersF = !this.filtersF
      },
      chart(){
          this.$emit('chart')
      },
      layerHandler(){
		  this.$emit('layerHandler')
	  },
	  focus(type){
		  this.$emit('focus',type)
	  },
      fire(){
          this.$emit('fire')
      },
      sendCommond(type){
       debugger
          if(type == 'playFlag'){
              this.$emit('sendCommond',this.playFlag)
              this.playFlag = !this.playFlag
          }else{
              this.$emit('sendCommond',this.playFlag)
              this.playFlag = !this.playFlag
          }
          
      },
       forBackWard(type){
           this.$emit('forBackWard',type)

       },
       start(){
           this.$emit('start')
       },
       toDate(str){
            var date = new Date(str).toJSON();

            return  new Date(+new Date(date)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
       },
       /**
        * 获取开始结束时间
        */
       getAllDate(){
            $.get(`${globalUrl.host}/find/findStartTimeAndEndTime`,{}).then(data => {
               
                this.allDate.startT = this.toDate(data.startTime);
                this.allDate.endT = this.toDate(data.endTime);
                this.init()
                // this.buildSocket()

            })
        },
        
        smDate(data){
            return (data+'').length>1?data:'0'+data
        },
        /**
         * 初始化整个时间轴
         */
        initTimeLine(){
            let that = this
            let viewer = window['Map'].viewer
            
            $(".cesium-viewer-bottom").hide()

            this.initCesiumTime(viewer)
            
            
            $.get(`${globalUrl.host}/find/buoyData`,{}).then(data => {

                
                this.timeItemArr = [],that = this
                for(let item of data){
                    
                    that.timeItemArr.push({data:item,id:item['序号'],content: "<span class='icon1'></span>",start:item['时标'].split('.')[0]})

                }
            //    console.log(arr)
               this.initVis(viewer,that.timeItemArr)
                // this.allDate.startT = this.toDate(data.startTime);
                // this.allDate.endT = this.toDate(data.endTime);
                // console.log(this.allDate)
                // this.init()
                // this.buildSocket()

            })
            
            window.onresize=function(){  
            
                // that.visWidth = viewer.timeline.lastWidth
                setTimeout(() => {
                    
                    that.visStyle.width = viewer.timeline._lastWidth+'px'
                    that.visStyle.right = $(".cesium-viewer-timelineContainer").css('right')
                    that.visStyle.left = $(".cesium-viewer-timelineContainer").css('left')
                    that.timeline.redraw()
                    that.startXd()
                },300)
                
            
            }
            
            
        },
        /**
         * @param {object} viewer cesium viewer对象
         * 初始化cesium 时间线
         */
        initCesiumTime(viewer){
            let that = this
            let startTime = Cesium.JulianDate.fromDate(new Date(this.allDate.startT)) 
            let stopTime = Cesium.JulianDate.fromDate(new Date(this.allDate.endT )) 
            this.timelineT(viewer)
            viewer.timeline.zoomTo(startTime,stopTime)
            
            viewer.timeline.addEventListener('setzoom', function(e){
                let a = new Cesium.JulianDate.toDate(e.startJulian)
                let b = new Cesium.JulianDate.toDate(e.endJulian)

                that.timeline.setOptions({
                    start:a,
                    end:b,
                })

                that.startXd()

            }, false);
            viewer.clock.shouldAnimate = true
            viewer.clock.startTime = startTime
            viewer.clock.stopTime = stopTime

            viewer.timeline.addEventListener('mouseup', function(e){

                $.get(`${globalUrl.host}/find/triggerSocket`,{
                    startTime:new Cesium.JulianDate.toDate(viewer.clock.currentTime)
                }).then(data => {
                    console.log(4564654)
                    that.playFlag = true
                    // this.allDate.startT = this.toDate(data.startTime);
                    // this.allDate.endT = this.toDate(data.endTime);
                    // console.log(this.allDate)
                    // this.init()
                    // this.buildSocket()

                })
                console.log(e)
                // console.log(new Cesium.JulianDate.toDate(e.clock.startTime))
            }, false);
            this.startXd()
        },
        /**
         * 开始计算相对时间
         */
        startXd(){
            let that = this,str = ''
            let startTimes = this.allDate.startT
            
            $(".cesium-timeline-ticLabel").each((i,item) => {

                if(i != 0){
                    let left = Number($(item).css('left').substring(0,$(item).css('left').length -2))+40+'px'
                   
                    
                    that.countDate(startTimes,that.dateReplace($(item).html()))
                    str += `<span class='xdDate' style='left:${left}'>
                        ${that.countDate(startTimes,that.dateReplace($(item).html()))}
                    </span>`
                   
                }else{
                    let left = Number($(item).css('left').substring(0,$(item).css('left').length -2))+40+'px'
                    str += `<span class='xdDate' style='left:${left}'>
                        00:00:00
                    </span>`
                }
                // console.log(that.dateReplace($(item).html()),i)
            })
            $('#xdsj').empty().append(str)
            // console.log($(".cesium-timeline-ticLabel"))
        },

        dateReplace(str){
            return str.replace(/([^\u0000-\u00FF])/g, function(e){
                if(e != '日'){
                    return '-'
                }else{
                    return ''
                }
            })
        },
        /**
         * @param {string} date1 开始时间 格式 'xx-xx-xx xx:xx:xx'
         * @param {string} date2 结束时间 格式 'xx-xx-xx xx:xx:xx'
         * 计算两个时间相差多少小时分秒
         */
        countDate(date1,date2){
            // var date1= '2015/05/01 00:00:00';  //开始时间
            // var date2 = new Date();    //结束时间
            var date3 = new Date(date2).getTime() - new Date(date1).getTime();   //时间差的毫秒数      
            //------------------------------
            //计算出相差天数
            var days=Math.floor(date3/(24*3600*1000))
    
            //计算出小时数
            var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
            var hours=Math.floor(leave1/(3600*1000))
            //计算相差分钟数
            var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
            var minutes=Math.floor(leave2/(60*1000))
            //计算相差秒数
            var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
            var seconds=Math.round(leave3/1000)
            if(days>0){
                hours += days*24
            }
            // console.log(this.smDate(hours)+":"+this.smDate(minutes)+":"+this.smDate(seconds))
            if(this.smDate(seconds)<0 ) return ''
            return this.smDate(hours)+":"+this.smDate(minutes)+":"+this.smDate(seconds)
        },
        /**
         * @param {object} viewer cesium viewer对象
         * @param {object} arr 时间轴生成Item所需数组
         * 初始化时间轴
         */
        initVis(viewer,arr){
            
            let a = Cesium.JulianDate.toDate(viewer.clock.startTime)
            let b = Cesium.JulianDate.toDate(viewer.clock.stopTime)

            this.visStyle.width = viewer.timeline._lastWidth+'px'
            this.visStyle.right = $(".cesium-viewer-timelineContainer").css('right')
            this.visStyle.left = $(".cesium-viewer-timelineContainer").css('left')
            
            
            
            var items = new vis.DataSet(arr);
            var options = {
                // moveable:false,
                maxHeight:'80px',
                // onMove:(e) => {
                //     console.log(e)
                // }
                // verticalScroll:true
                // orientation:'top',
            
            };
            var container = document.getElementById('visualization');
            this.timeline = new vis.Timeline(container, items, options);
            let i = $("#visualization .vis-bottom").length - 1
        
            
            // this.timeline.setOptions({
			// 	start:a,
			// 	end:b,
            // })
            this.timeline.setWindow(a,b)
            $("#visualization .vis-bottom").eq(i).hide()
            this.timeline.on('mouseOver',(item) => {

                if(item.item){
                    this.timeLabelType = true
                    let lefts = item.event.x+5,
                    bottoms = 80+10-item.event.y
                    this.timeLabelF = true
                
                    this.timeLabelS = {
                        'left':item.event.x+'px',
                        'top':item.event.y-168+'px'
                    }
                    
                    let y = []
                    if(this.timeItemArr.length > 0){
                
                        y = this.timeItemArr.filter(obj => {
                            return item.item == obj.id
                        })
                    }

                    this.buoyDataType =  y[0].types
                    this.buoyData = y[0].data
                    this.buoyData.start = y[0].start
                }else{
                    this.timeLabelType = false
                    
                    this.timeLabelF = false
                }
            })
           
            
            this.timeline.on('mouseDown',(item) => {

                if(item.item){
                    // this.timeLabelType = true
                    
                    // this.timeLabelF = true
                
                    // this.timeLabelS = {
                    //     'left':item.event.x+'px',
                    //     'top':item.event.y-168+'px'
                    // }
                    
                    let y = []
                    if(this.timeItemArr.length > 0){
                
                        y = this.timeItemArr.filter(obj => {
                            return item.item == obj.id
                        })
                    }

                    this.buoyDataType =  y[0].types
                    this.buoyData = y[0].data
                    this.buoyData.start = y[0].start

                    if(this.buoyDataType == '手动事件'){
                        this.$emit('hingeMsgEvent',y[0].data.nr)
                        
                    }
                    
                    let newDate = y[0].start
                    window['Map'].viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date(newDate)) 
					this.$emit('timeDown')
                    $.get(`${globalUrl.host}/find/triggerSocket`,{
                        startTime:new Date(newDate),
                        id:sessionStorage.getItem('selectEd'),
                        name:sessionStorage.getItem('name'),
                    }).then(data => {
                        this.playFlag = true
                        this.$emit('closeplay') 
                        // this.allDate.startT = this.toDate(data.startTime);
                        // this.allDate.endT = this.toDate(data.endTime);
                        // console.log(this.allDate)
                        // this.init()
                        // this.buildSocket()

                    })
                    this.clickItem(y)
                } else {
                    this.timeLabelF = false
                }
            })
            this.timeline.on('doubleClick',(item) => {
                this.newEventDate = this.toDate(item.time)
                this.timeLabelType = false
                
                this.timeLabelF = true
            
                this.timeLabelS = {
                    'left':item.event.x+'px',
                        'top':item.event.y-168+'px'
                }
            })
            
            this.timeline.on('rangechange',(item) => {

                this.timeLabelF = false
                
               
                let startTime = Cesium.JulianDate.fromDate(item.start) 
                let stopTime = Cesium.JulianDate.fromDate(item.end)
                viewer.timeline.zoomTo(startTime,stopTime)
           
           
            this.startXd()
               
                
            })    
            
        },

         /**
		 * 设置时间线时间显示格式
		 */
        timelineT(viewer){
           
            // viewer.animation.viewModel.dateFormatter = localeDateTimeFormatter
            // viewer.animation.viewModel.timeFormatter = localeTimeFormatter
            viewer.timeline.makeLabel = function (time) { return localeDateTimeFormatter(time) }

            // Date formatting to a global form
            function localeDateTimeFormatter(datetime, viewModel, ignoredate) {
                var julianDT = new Cesium.JulianDate(); 
                Cesium.JulianDate.addHours(datetime,8,julianDT)
                var gregorianDT= Cesium.JulianDate.toGregorianDate(julianDT)
                var objDT;
                if (ignoredate)
                    objDT = '';
                else {
                    objDT = new Date(gregorianDT.year, gregorianDT.month - 1, gregorianDT.day);
                    objDT = gregorianDT.year  + '年' +objDT.toLocaleString("zh-cn", { month: "short" })+ gregorianDT.day + '日' ;
                    if (viewModel || gregorianDT.hour + gregorianDT.minute === 0)
                    return objDT;
                    objDT += ' ';
                }
                return objDT + Cesium.sprintf("%02d:%02d:%02d", gregorianDT.hour, gregorianDT.minute, gregorianDT.second);
            }

 
        },
        closeSocket(){
            this.$emit('closeSocket')

            // $.get(`${globalUrl.host}/find/stopScoket`,{
                
            // }).then(data => {
            //     socketController = null;
            //     window.Map.viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date(this.allDate.startT)) 
            // })
        },
        /**
         * @param {object} data 时间轴Item数据
         * 点击获取时间轴Item数据
         */
        clickItem(data){
            
            this.buoyInfo = data[0].data
            this.showInfo = true
        },
        /**
         * @param {object} id 时间轴Item数据ID
         * 设置时间轴Item获取焦点事件
         */
        setTimeFocus(id){
            this.timeline.focus(id)
            this.timeline.setSelection(id)
        },
        


      //---------------------------------------------分割线---------------------------------------------------//  



  },

}
</script>

