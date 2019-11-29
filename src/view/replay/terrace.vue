<template>
	<div class="terrace">
		<div class="terrace-item">
			<div>
				<span></span>
				<span>
					飞行曲线
				</span>
			</div>
			<div id="airChart" style="width: 370px;height:250px;margin-left: 5px;top:-40px"></div>
		</div>
        <div class="terrace-item" v-if="detectorData.length > 0">
			<div>
				<span></span>
				<span>浮标目标</span>
			</div>
			<div class="list">
				<div>
					<span style="min-width: 60px">浮标编号</span>
					<span style="min-width: 60px">经度</span>
					<span style="min-width: 60px">纬度</span>
					<span style="min-width: 60px">浮标类型</span>
					<span style="min-width: 60px">状态</span>
					<!-- <span style="min-width: 150px">投放时间</span> -->
					<span style="min-width: 60px">射频通道号</span>
					<span style="min-width: 60px">阵型</span>
				</div>
				<ul>
					<li :class="{curFb: curFbBh == item.fbbh}" v-for="(item, i) in detectorData" :key="i">
						<span style="min-width: 60px">{{item["fbbh"]}}</span>
						<span style="min-width: 60px">{{item["llcrswzjd"]}}</span>
						<span style="min-width: 60px">{{item["llcrswzwd"]}}</span>
						<span style="min-width: 60px">{{item["fblx"]}}</span>
						<span style="min-width: 60px">{{item["fbzt"]}}</span>
						<!-- <span style="min-width: 150px">{{item["sb"].split(".")[0]}}</span> -->
						<span style="min-width: 60px">{{item["sptdh"]}}</span>
						<span style="min-width: 60px">{{item["zx"]}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="buoy-item">
			<div>
				<span></span>
				<span>浮标探测目标统计</span>
			</div>
			<div class="list">
				<div>
					<span style="min-width: 60px">浮标编号</span>
					<span style="min-width: 60px">经度</span>
					<span style="min-width: 60px">纬度</span>
					<span style="min-width: 100px">探测目标位置偏差</span>
				</div>
				<ul>
					<li v-for="(item, i) in events['mbtcsj']" :key="i">
						<span style="min-width: 60px">{{item["mbbh"]}}</span>
						<span style="min-width: 60px">{{item["mbjd"]}}</span>
						<span style="min-width: 60px">{{item["mbwd"]}}</span>
						<span style="min-width: 100px">{{item["mbwzwc"]}}</span>
					</li>
				</ul>
				<!-- <div class="item-event" @click="uploading(item.mbsj, 'mbtcsj')"  v-for="(item, i) in events['mbtcsj']" :key="i">
					<p :title="item.mbjd">
						<span>编号：</span>
						<span>{{item.mbbh}}</span>
					</p>
					<p :title="item.mbsj">
						<span>目标发现时间：</span>
						<span>{{showTime(item.mbsj)}}</span>
					</p>
				</div> -->
			</div>
		</div>
		<div class="terrace-item" v-if="ctData.length > 0">
			<div>
				<span></span>
				<span>
					磁探目标
				</span>
			</div>
			<div class="list">
				<div>
					<span style="min-width: 150px">发现时间</span>
					<span style="min-width: 60px">经纬</span>
					<span style="min-width: 60px">纬度</span>
					<span style="min-width: 100px">探测目标位置偏差</span>
				</div>
				<ul>
					<li  v-for="(item, i) in ctData"  :key="i">
						<span style="min-width: 150px" :title="item.mbsj">{{item["mbsj"].split('.')[0]}}</span>
						<span style="min-width: 60px"  :title="item.mbjd">{{item["mbjd"]}}</span>
						<span style="min-width: 60px"  :title="item.mbwd">{{item["mbwd"]}}</span>
						<span style="min-width: 100px" :title="item.mbwzwc">{{item["mbwzwc"]}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["dataInfo", "WebSocketData", "setTime"],
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
            },
            series: [
                {
                    type: "line",
                    showSymbol: false,
                    hoverAnimation: false,
                    //stack: '总量',
                    data: that.chartData
                }
            ]
        };
        this.myChart.setOption(option);
    },
	methods: {
		updtea(data){
			this.detectorData = data.b;
		},
        setLineOption(data) {
            let that = this;
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
                that.xData.push(data.sb.split('.')[0].split(" ")[1]);

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
                _this.events.mbtcsj = data.CTMBSJ
                _this.events.mbtcsj.push(...data.FBMBSJ)
                _this.events.sdsj = data.SDSJ
            })
        }
	},
	watch: {
		setTime(v) {
			let id = sessionStorage.getItem("selectEd")
			let _this = this
			$.get(globalUrl.host+'/find/findEventListForRex',{sjid: id,time: v}).then(data => {
				this.detectorData = data.FBSJ;
                _this.events.fbtfsj = data.FBSJ
                _this.events.mbtcsj = data.CTMBSJ
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
    }
}
</script>

<style>
	.terrace-item >div:first-child{
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
	}
	.terrace-item p {
		height: 30px;
		line-height: 30px;
		padding: 0 24px;
	}
	.terrace-item .list {
		border: 1px solid #104284;
		margin:5px 10px;
		width: 335px;
		overflow: auto;
		max-height: 100px;
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
		max-height: 200px;
	}
	.terrace-item .list ul li{
		height: 30px;
		line-height: 30px;
		display: flex;
	}
	.terrace-item .list div span{
		padding: 0 5px;
		background: #092254;
	}
	.terrace-item .list ul span{
		padding: 0 5px;
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
</style>
