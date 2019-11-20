<template>
	<div class="event">
		<div class="event-item">
			<div>
				<span></span>
				<span>
					浮标投放事件 
				</span>
			</div>
			<div>
				<div class="item-event" @click="uploading(item.sb, 'fbtfsj')"  v-for="(item, i) in events['fbtfsj']" :key="i">
					<p :title="item.fbbh">
						<span>编号：</span>
						<span>{{item["fbbh"]}}</span>
					</p>
					<p :title="item.sb">
						<span>投放时间：</span>
						<span>{{showTime(item["sb"])}}</span>
					</p>
				</div>
			</div>
		</div>
		<div class="event-item">
			<div>
				<span></span>
				<span>
					目标探测事件
				</span>
			</div>
			<div>
				<div class="item-event" @click="uploading(item.mbsj, 'mbtcsj')"  v-for="(item, i) in events['mbtcsj']" :key="i">
					<p :title="item.mbjd">
						<span>编号：</span>
						<span>{{item.mbbh}}</span>
					</p>
					<p :title="item.mbsj">
						<span>目标发现时间：</span>
						<span>{{showTime(item.mbsj)}}</span>
					</p>
				</div>
			</div>
		</div>
		<div class="event-item">
			<div>
				<span></span>
				<span>
					手动事件
				</span>
			</div>
			<div>
				<div class="item-event" @click="uploading(item.sj, 'sdsj')"  v-for="(item, i) in events['sdsj']" :key="i">
					<p :title="item.mbjd">
						<span>内容：</span>
						<span>{{item.nr}}</span>
					</p>
					<p :title="item.sjs">
						<span>时间：</span>
						<span>{{showTime(item.sjs)}}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["WebSocketData", "setTime"],
	data() {
		return {
			events: {
				fbtfsj: [],
				mbtcsj: [],
				sdsj: []
			},
			sj: ''
		}
	},
	methods: {
			updtea(data){
				let _this = this
				_this.events.fbtfsj = data.b
				_this.events.mbtcsj = data.a
				_this.events.mbtcsj.push(...data.c)
				_this.events.sdsj = data.d
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
	created() {
		this.getEventList()
	},
	 watch: {
		setTime(v) {
			let id = sessionStorage.getItem("selectEd")
			let _this = this
			$.get(globalUrl.host+'/find/findEventListForRex',{sjid: id,time: v}).then(data => {
				_this.events.fbtfsj = data.FBSJ
				_this.events.mbtcsj = data.CTMBSJ
				_this.events.mbtcsj.push(...data.FBMBSJ)
				_this.events.sdsj = data.SDSJ
			})
		},
		WebSocketData: {
			handler:function(v) {
				v.map(item => {
					
					// if(item.type == "FBSJ") {
					// 	let bool = true
					// 	if(this.events.fbtfsj) {
					// 		this.events.fbtfsj.map(fb => {
					// 			if(fb.fbbh == item.data["fbbh"]) {
					// 				bool = false
					// 			}
					// 		})
					// 	}
					// 	if(bool) {
					// 		let fb = {
					// 			fbbh: item.data["fbbh"],
					// 			sb: item.data.sb
					// 		}
					// 		this.events.fbtfsj.push(fb)
					// 	}
					// }
					// if(item.type == "CTMBSJ") {
					// 	let bool = true
					// 	this.events.mbtcsj.map(mb => {
					// 		if(mb.bh == item.data.mbbh) {
					// 			bool = false
					// 		}
					// 	})
					// 	if(bool) {
					// 		let ct = {
					// 			bh: item.data.mbbh,
					// 			mbsj: item.data.mbsj
					// 		}
					// 		this.events.mbtcsj.push(ct)
					// 	}
					// }
					// if(item.type == "FBMBSJ") {
					// 	let bool = true
					// 	this.events.mbtcsj.map(mb => {
					// 		if(ct.mbbh == item.data.mbbh) {
					// 			bool = false
					// 		}
					// 	})
					// 	if(bool) {
					// 		let mb = {
					// 			bh: item.data.mbbh,
					// 			mbsj: item.data.mbsj
					// 		} 
					// 		this.ctData.push(item.data)
					// 	}
					// }
					// if(item.type == "SDSJ") {
					// 	let bool = true
					// 	this.events.sdsj.map(sd => {
					// 		if(sd.sjs == item.data.sjs) {
					// 			bool = false
					// 		}
					// 	})
					// 	if(bool) {
					// 		this.events.sdsj.push(item.data)
					// 	}
					// }
				})
			},
			deep: true
		}
    }
}
</script>

<style>
	.event {
		height: 100%;
	}
	.event-item {
		max-height: 170px;
		overflow: hidden;
	}
	.event-item >div:first-child{
		height: 30px;
		background: url("../../../public/static/image/replay/标题背景.png");
		background-size: 110% 110%;
		background-repeat: no-repeat;
		background-position: -2px -2px;
		display: flex;
		align-items: center;
	}
	.event-item >div:first-child >span:first-child {
		display: inline-block;
		width: 48px;
		height: 24px;
		background: url("../../../public/static/image/replay/icon.png");
		background-repeat: no-repeat;
		background-position: center center;
	}
	.event-item >div:last-child {
		max-height: 140px;
		overflow: auto;
	}
	.event-item p {
		height: 30px;
		line-height: 30px;
		padding-left: 24px;
	}
	.event-item .item-event {
		display: flex;
		cursor: pointer;
	}
	.event-item .item-event p:first-child{
		flex: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.event-item .item-event p:last-child{
		flex: 5;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
