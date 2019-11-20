<template>
	<div class="terrace">
		<div class="terrace-item">
			<div>
				<span></span>
				<span>
					基本信息
				</span>
			</div>
			<div>
				<p>{{this.name}}</p>
			</div>
		</div>
		<div class="terrace-item" v-if="Object.keys(planeData).length > 0">
			<div>
				<span></span>
				<span>
					飞机信息
				</span>
			</div>
			<div>
				<p>
					<span>经度：</span>
					<span>{{planeData["zjjd"]}}</span>
				</p>
				<p>
					<span>纬度：</span>
					<span>{{planeData["zjwd"]}}</span>
				</p>
				<p>
					<span>高度：</span>
					<span>{{planeData["gxqyg"]}}</span>
				</p>
				<p>
					<span>地速：</span>
					<span>{{planeData["ds"]}}</span>
				</p>
			</div>
		</div>
        <div class="terrace-item" v-if="detectorData.length > 0">
			<div>
				<span></span>
				<span>浮标信息</span>
			</div>
			<div class="list">
				<div>
					<span>编号</span>
					<span>经度</span>
					<span>纬度</span>
					<span>状态</span>
				</div>
				<ul>
					<li :class="{curFb: curFbBh == item.fbbh}" v-for="(item, i) in detectorData" :key="i">
						<span>{{item["fbbh"]}}</span>
						<span>{{item["llcrswzjd"]}}</span>
						<span>{{item["llcrswzwd"]}}</span>
						<span>{{item["fbzt"]}}</span>
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
			curFbBh: ""
		}
	},
	methods: {
			updtea(data){
				this.detectorData = data.b
				
			},
	},
	watch: {
		setTime(v) {
			let id = sessionStorage.getItem("selectEd")
			let _this = this
			$.get(globalUrl.host+'/find/findEventListForRex',{sjid: id,time: v}).then(data => {
				this.detectorData = data.FBSJ
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
					//浮标投放数据
					// if(item.type == "FBSJ") {
					// 	let bool = true
					// 	this.curFbBh = item.data.fbbh
					// 	this.detectorData.map(fb => {
					// 		if(fb.fbbh == item.data.fbbh) {
					// 			bool = false
					// 		}
					// 	})
					// 	if(bool) {
					// 		this.detectorData.push(item.data)
					// 	}
					// }
					
				})
			},
			deep: true
		}
	},
    created() {
			let id = sessionStorage.getItem("selectEd")
			let ptData = JSON.parse(sessionStorage.getItem("ptData"))
			if(ptData && ptData.length > 0) {
				ptData.map(item => {
					if(item.id == id) {
						this.name = item.ptmc
					}
				})
			}
			$.get(globalUrl.host+'/find/findEventListForRex',{sjid: id}).then(data => {
				this.detectorData = data.FBSJ
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
		margin: 10px;
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
		overflow: auto;
	}
	.terrace-item .list ul li{
		height: 30px;
		line-height: 30px;
		display: flex;
	}
	.terrace-item .curFb {
		background: #0922546b;
	}
	.terrace-item .list ul li span{
		flex: 1;
		text-align: center;
	}
</style>
