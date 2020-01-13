<template>
	<div class="terrace">
		<div class="replay" :style="{ left: '5px', top: '50px' }">
			<div class="replay-cont" style="height: 250px;" v-show="flagType1">
				<div style="width: 360px;height: 250px;">
					<div class="head-hidden"  @mousedown="draggerStart($event)"></div>
					<!-- <div class="close" @click="isShow=false" style="position:absolute ;z-index:10">
						x
					</div> -->
					<div class="nav">飞行曲线</div>
					<div class="terrace-item"  v-show="gdFlag">
						<div id="airChart" style="width:370px;height:250px;margin-left: 10px;top:-8px"></div>
					</div>
					<div style="text-align: center;position: relative; top: -10px;"  v-show="gdFlag">
						<p>
							<span>经度：</span><span style="margin-right: 15px;">{{Math.floor(jingdu*100)/100}}</span> 
							<span>纬度：</span> <span style="margin-right: 15px;">{{Math.floor(weidu*100)/100}}</span>
							 <span>方向：</span> <span>{{Math.floor(fangxiang*100)/100}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="replay" :style="{ left:'5px', top: '288px' }">
			<div class="replay-cont" v-show="flagType2" style="width: 360px;height: 190px;">
				<div style="width: 360px;height: 185px;">
					<div class="head-hidden"  @mousedown="draggerStart($event)"></div>
					<!-- <div class="close" @click="isShow=false">
						x
					</div> -->
					<div class="nav">浮标投放信息</div>
					<div class="terrace-item">
						<!-- <div>
							<span></span>
							<span>浮标目标</span>
						</div> -->
						<div class="list">
							<div>
								<span style="min-width: 55px">浮标编号</span>
								<span style="min-width: 40px">经度</span>
								<span style="min-width: 40px">纬度</span>
								<span style="min-width: 60px">浮标类型</span>
								<span style="min-width: 60px">射频通道号</span>
								<span style="min-width: 30px">状态</span>
								<span style="min-width: 60px">阵型</span>
							</div>
							<ul v-if="detectorData.length > 0" v-show="gdFlag">
								<li :class="{curFb: curFbBh == item.fbbh}" v-for="(item, i) in detectorData" :key="i">
									<span style="min-width: 55px">{{item["fbbh"].slice(-3)}}</span>
									<span style="min-width: 40px">{{Math.floor(item["llcrswzjd"]*100)/100}}</span>
									<span style="min-width: 40px">{{Math.floor(item["llcrswzwd"]*100)/100}}</span>
									<span style="min-width: 60px">{{item["fblx"]}}</span>
									<span style="min-width: 60px">{{item["sptdh"]}}</span>
									<span style="min-width: 30px">{{item["fbzt"]}}</span>
									<span style="min-width: 60px">{{item["zx"]}}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="replay" :style="{ left:'5px', top:'472px' }">
			<div class="replay-cont"  v-show="flagType3">
				<div style="width: 360px;height: 185px;">
					<div class="head-hidden"  @mousedown="draggerStart($event)"></div>
					<!-- <div class="close" @click="isShow=false">
						x
					</div> -->
					<div class="nav">磁探探测目标</div>
					<div class="terrace-item">
						<div class="list">
							<div>
								<span style="min-width: 150px">发现时间</span>
								<span style="min-width: 50px">经度</span>
								<span style="min-width: 50px">纬度</span>
								<span style="min-width: 100px">探测目标位置偏差</span>
							</div>
							<ul v-if="ctData.length > 0" v-show="gdFlag">  
								<li v-for="(item, i) in ctData" :key="i"  v-if="Number(item['mbzxd']) >= 100">
										<span style="min-width: 150px" :title="item.mbsj">{{item["mbsj"].slice(5).split('.')[0]}}</span>
										<span style="min-width: 50px"  :title="item.mbjd">{{Math.floor(item["mbjd"]*100)/100}}</span>
										<span style="min-width: 50px"  :title="item.mbwd">{{Math.floor(item["mbwd"]*100)/100}}</span>
										<span style="min-width: 100px" :title="item.mbwzwc">{{item["mbwzwc"]}}</span>																
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="replay" :style="{ left:'5px' ,top:'655px'}">
			<div class="replay-cont" v-show="flagType4">
				<div style="width: 360px;height: 185px;">
					<div class="head-hidden"  @mousedown="draggerStart($event)"></div>
					<!-- <div class="close" @click="isShow=false">
						x
					</div> -->
					<div class="nav">浮标探测目标</div>
					<div class="terrace-item" >
						<div class=" list fubiao">
							<div>
								<span style="min-width: 60px">浮标编号</span>
								<span style="min-width: 60px">经度</span>
								<span style="min-width: 60px">纬度</span>
								<span style="min-width: 100px">距离</span>
							</div>
							<ul v-if="events['mbtcsj'].length > 0" v-show="gdFlag">
								<li v-for="(item, i) in events['mbtcsj']" :key="i">
                                    <div v-if="item['dwfbxh1'].length == 7">
                                        <span style="min-width: 60px;display: inline-block;">{{item["dwfbxh1"].slice(-3)}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzjd"]*100)/100}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzwd"]*100)/100}}</span>
                                        <span style="min-width: 100px;display: inline-block;">{{item["jl"]}}</span>  
                                    </div>
                                    <div v-if="item['dwfbxh2'].length == 7" style="width:100%;height: 30px;line-height: 30px;float: left;">
                                        <span style="min-width: 60px;display: inline-block;">{{item["dwfbxh2"].slice(-3)}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzjd"]*100)/100}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzwd"]*100)/100}}</span>
                                        <span style="min-width: 100px;display: inline-block;">{{item["jl"]}}</span>
                                    </div>
									<div v-if="item['dwfbxh3'].length == 7" style="width:100%;height: 30px;line-height: 30px;float: left;">
                                        <span style="min-width: 60px;display: inline-block;">{{item["dwfbxh3"].slice(-3)}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzjd"]*100)/100}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzwd"]*100)/100}}</span>
                                        <span style="min-width: 100px;display: inline-block;">{{item["jl"]}}</span>  
                                    </div>
                                    <div v-if="item['dwfbxh4'].length == 7" style="width:100%;height: 30px;line-height: 30px;float: left;">
                                        <span style="min-width: 60px;display: inline-block;">{{item["dwfbxh4"].slice(-3)}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzjd"]*100)/100}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzwd"]*100)/100}}</span>
                                        <span style="min-width: 100px;display: inline-block;">{{item["jl"]}}</span>
                                    </div>
                                    <div v-if="item['dwfbxh5'].length == 7" style="width:100%;height: 30px;line-height: 30px;float: left;">
                                        <span style="min-width: 60px;display: inline-block;">{{item["dwfbxh5"].slice(-3)}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzjd"]*100)/100}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzwd"]*100)/100}}</span>
                                        <span style="min-width: 100px;display: inline-block;">{{item["jl"]}}</span>  
                                    </div>
                                    <div v-if="item['dwfbxh6'].length == 7" style="width:100%;height: 30px;line-height: 30px;float: left;">
                                        <span style="min-width: 60px;display: inline-block;">{{item["dwfbxh6"].slice(-3)}}</span>
                                        <span style="min-width: 80px;display: inline-block;">{{Math.floor(item["mbwzjd"]*100)/100}}</span>
                                        <span style="min-width: 60px;display: inline-block;">{{Math.floor(item["mbwzwd"]*100)/100}}</span>
                                        <span style="min-width: 100px;display: inline-block;">{{item["jl"]}}</span>
                                    </div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["dataInfo", "WebSocketData", "setTime",'gdFlag','flagTypeList'],
	data() {
		return {
			name: "",
			planeData: {},
			detectorData: [],
			curFbBh: "",
            xData:['00:00', '00:00', '00:00', '00:00', '00:00', '00:00', '00:00'],
            myChart: null,
            chartData: ['3333', '0', '0', '0', '0', '0', '3333'],
            events: {
                fbtfsj: [],
                mbtcsj: [],
                sdsj: []
            },
			ctData: [],
			left: 5,
			top: 55,
			isShow: true,
			jingdu:0,
			weidu:0,
            fangxiang:0,
            flagType1:true,
            flagType2:true,
            flagType3:true,
            flagType4:true,
		}
	},
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.getElementById("airChart"));
        let option = {},
            that = this;

        function randomData() {
            now = now + 1;
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [now, Math.random() * 100]
            };
		}
		// function colorsa(){
		// 	let arr = []
		// 	let r=0;
		// 	let g=0;
		// 	let b=0;
		// 	for(var i=0;i<10;i++){
		// 			arr.push("rgb("+r+","+g+","+b+")")
		// 			r+=15;
		// 			g+=25;
		// 			b+=35;
		// 	}
		// 	return arr
		// }
		let myareaStyle={
			color:['#295aa5', '#52bdbd', '#ffad6b', '#f784a5', '#ceb55a', '#31b5d6', '#bd2119', '#ffe608', '#d69419', '#737bb5'],//分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
			// shadowColor:"red",          //阴影颜色
			// shadowOffsetX:0,            //阴影水平方向上的偏移距离。
			// shadowOffsetY:0,            //阴影垂直方向上的偏移距离
			// shadowBlur:10,              //图形阴影的模糊大小。
			opacity:0.3,                  //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
		}

        var data = [];
        var now = +0;
        var oneDay = 1;
        var value = Math.random() * 1000;
        // for (var i = 0; i < 600; i++) {
        //   that.chartData.push(randomData());
        // }
        let xData = [],chartData = []
        for(let i = 0;i<600;i++){

            xData.push('00:00'),
                chartData.push('0')
        }
        that.xData=xData
        that.chartData=chartData
        option = {

            tooltip: {
                trigger: "axis",
                formatter: function(params) {
                    // console.log(params)
                    params = params[0];
                    var date = new Date(params.name);
                    return params.data
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: "category",
                axisLine: {
                    lineStyle: {
                        // 设置y轴颜色
                        color: '#87CEFA'
                    }
                },
                data: that.xData

            },
            yAxis: {
                type: "value",
                axisLine: {
                    lineStyle: {
                        color: '#87CEFA'
                    }
				},
				splitArea:{                 //坐标轴在 grid 区域中的分隔区域，默认不显示。
					interval:"auto",
					show:true,             //是否显示分隔区域
					areaStyle:myareaStyle
				}
            },
            series: [
                {
                    type: "line",
                    showSymbol: false,
                    hoverAnimation: false,
                    //stack: '总量',
                    data: that.chartData
                }
			],
			
			// visualMap: {
			// 	show: false,
			// 	dimension: 1,
			// 	pieces: [],  //pieces的值由动态数据决定
			// 	outOfRange: {
			// 		color: '#00FF00'
			// 	}
			// }	
		};
		// option.visualMap.pieces[0] = {gte: 200, lte: 300, color: '#008B00'};
		// option.visualMap.pieces[1] = {gte: 300, lte: 400, color: '#698B22'};
		// option.visualMap.pieces[2] = {gte: 400, lte: 500, color: '#8B864E'};
		// option.visualMap.pieces[3] = {gte: 400, lte: 500, color: '#8B814C'};
		this.myChart.setOption(option);
		
    },
	methods: {
		updtea(data){
			this.detectorData = data.b;
			this.ctData =  data.a;
			this.events['mbtcsj'] =  data.c;
		},
        setLineOption(data) {
			let that = this;
			// console.log(data)
            if(!data){
                let xData = [],chartData = []
                for(let i = 0;i<600;i++){
                    xData.push('00:00'),
                        chartData.push('0')
                }
                that.xData=xData
                that.chartData=chartData
            }else{
                that.xData.shift();
                that.xData.push(data.sb.split('.')[0].split(" ")[1].slice(0,5));

                that.chartData.shift();
                that.chartData.push(data.gxqyg);
            }

            that.myChart.setOption({
                xAxis: {
                    type: "category",
                    axisLine: {
                        lineStyle: {
                            // 设置y轴颜色
                            color: '#87CEFA'
                        }
                    },
                    data: that.xData

                },
                series: [
                    {
                        type: "line",
                        showSymbol: false,
                        hoverAnimation: false,
                        data: that.chartData
                    }
                ]
			});
        },
        uploading(data, type) {
            let index = data.indexOf(".")
            let time = data.substring(0, index)
            let params = {
                time,
                type
            }
            this.$emit("uploading", params)
        },
        showTime(time) {
            let index = time.indexOf(".")
            return time.substring(0, index)
        },
        getEventList() {
            let id = sessionStorage.getItem("selectEd")
            let _this = this
            $.get(globalUrl.host+'/find/findEventListForRex',{sjid: id}).then(data => {
                _this.events.fbtfsj = data.FBSJ
                _this.events.mbtcsj = data.FBMBSJ
                _this.events.mbtcsj.push(...data.FBMBSJ)
                _this.events.sdsj = data.SDSJ
            })
        }
	},
	watch: {
		
		gdFlag(val){
			console.log(val)
		},
		flagTypeList(val){
            this.flagType1 = false 
            this.flagType2 = false 
            this.flagType3 = false 
            this.flagType4 = false 
            val.map(item=>{
                if(item.length>0){
                    if(item == "飞行曲线"){
                        this.flagType1 = true
                    }
                    if(item == "浮标投放信息"){
                        this.flagType2 = true
                    }
                    if(item == "磁探探测目标"){
                        this.flagType3 = true
                    }
                    if(item == "浮标探测目标"){
                        this.flagType4 = true
                    }
                }
               
            })
		},
		setTime(v) {
			let id = sessionStorage.getItem("selectEd")
			let _this = this
			$.get(globalUrl.host+'/find/findEventListForRex',{sjid: id,time: v}).then(data => {
				this.detectorData = data.FBSJ;
                _this.events.fbtfsj = data.FBSJ
                _this.events.mbtcsj = data.FBMBSJ
                _this.events.mbtcsj.push(...data.FBMBSJ)
                _this.events.sdsj = data.SDSJ
                _this.ctData =data.CTMBSJ
			})
		},
		WebSocketData: {
			handler:function(v) {
				let id = sessionStorage.getItem("selectEd")
				let ptData = JSON.parse(sessionStorage.getItem("ptData"))
				ptData.map(item => {
					if(item.id == id) {
						this.name = item.ptmc
					}
				})
				v.map(item => {
					//飞机
					if(item.type == "FJ") {
						this.planeData = item.data
						this.jingdu = item.data.zjjd
						this.weidu = item.data.zjwd
						this.fangxiang = item.data.fx
					}
				})
			},
			deep: true
		}
	},
    created() {
        let _this = this
		let id = sessionStorage.getItem("selectEd")
		let ptData = JSON.parse(sessionStorage.getItem("ptData"))
		if(ptData && ptData.length > 0) {
			ptData.map(item => {
				if(item.id == id) {
					this.name = item.ptmc
				}
			})
		}
        this.getEventList()
		$.get(globalUrl.host+'/find/findEventListForRex',{sjid: id}).then(data => {
			this.detectorData = data.FBSJ;
            _this.ctData = data.CTMBSJ
		})

		document.addEventListener("click", (e)=> {
			let bool = false
			for(var i = 0; i < e.path.length; i++) {
				if(e.path[i].className == "replay"){
					bool = true
				}
			}
			if(!bool) {
				// _this.isShow = true
			}
		})
    }
}
</script>

<style>
	/* .terrace-item >div:first-child{
		height: 30px;
		background: url("../../../public/static/image/replay/标题背景.png");
		background-size: 110% 110%;
		background-repeat: no-repeat;
		background-position: -2px -2px;
		display: flex;
		align-items: center;
	}
	.terrace-item >div:first-child >span:first-child {
		display: inline-block;
		width: 48px;
		height: 24px;
		background: url("../../../public/static/image/replay/icon.png");
		background-repeat: no-repeat;
		background-position: center center;
	} */
	.terrace-item p {
		height: 30px;
		line-height: 30px;
		padding: 0 24px;
	}
	.terrace-item .list {
		position: relative;
		top:50px;
		border: 1px solid #104284;
		/* margin:5px 10px; */
		width: 100%;
		/* overflow: auto; */
		max-height: 110px;
	}
	.terrace-item .list >div:first-child{
		height: 30px;
		line-height: 30px;
		background: #092254;
		display: flex;
	}
	.terrace-item .list >div:first-child span {
		flex: 1;
		text-align: center;
	}
	.terrace-item .list ul {
		max-height: 80px;
        overflow: auto;
	}
	.terrace-item .list ul li{
		height: 30px;
		line-height: 30px;
		display: flex;
	}
	.terrace-item .list div span{
		/* padding: 0 5px; */
		/* background: #092254; */
	}
	.terrace-item .list ul span{
		/* padding: 0 5px; */
	}
	.terrace-item .curFb {
		background: #0922546b;
	}
	.terrace-item .list ul li span{
		flex: 1;
		text-align: center;
	}
	.terrace-item{
		max-height: 220px;
    }
    .terrace-item .fubiao ul {
        max-height: 80px;
        overflow: auto;
    }
    .terrace-item .fubiao  ul li {
        max-height: 80px;
        /* overflow: auto; */
        display: block;
    }
    .fubiao  ul li div {
        width:100%;
        height: 30px;
        line-height: 30px;
        float: left;
    }
     .fubiao  ul li div  span{
        display: inline-block;
    }
</style>
