<template>
	<div class="replay" :style="{ left: left + 'px', top: top + 'px' }">
		<div class="replay-cont" v-if="isShow">
			<div style="width: 360px;height: 600px;">
				<div class="head-hidden"  @mousedown="draggerStart($event)"></div>
				<div class="close" @click="isShow=false">
					x
				</div>
				<div class="nav">数据统计分析</div>
				<!--<div class="header">-->
					<!--<span @click="curNav=item" :class="{curnav: item == curNav}" v-for="item in nav" :key="item">{{item}}</span>-->
				<!--</div>-->
				<div class="cont">
					<bulletin v-show="curNav=='简报'" :dataInfo="dataInfo" :WebSocketData="WebSocketData"></bulletin>
					<terrace ref='myterrace' v-show="curNav=='平台信息'" :setTime="setTime" :dataInfo="dataInfo" :WebSocketData="WebSocketData"/>
					<event v-show="curNav=='事件列表'" :setTime="setTime" @uploading="uploading" :dataInfo="dataInfo" :WebSocketData="WebSocketData"/>
					<buoy ref='mybuoy'  v-show="curNav=='目标'" :setTime="setTime" :WebSocketData="WebSocketData"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import bulletin from "./bulletin.vue";
import event from "./event.vue";
import terrace from "./terrace.vue"
import buoy from "./buoy.vue"
export default {
	props: ["dataInfo", "WebSocketData", "setTime"],
	data() {
		return {
			nav: ["平台信息","目标","简报"],
			curNav: "平台信息",
			left: 5,
			top: 55,
			isShow: true
		}
	},
	components: {
		event,
		terrace,
		buoy,
		bulletin
	},
	methods: {
		updtea(data) {
			this.$refs['myterrace'].updtea(data)
			this.$refs['mybuoy'].updtea(data)
			
		},
		uploading(data) {
			this.$emit("uploading", data)
		},
		draggerStart(e) {
			document.addEventListener("mousemove", this.move)
			document.addEventListener("mouseup", this.mouseup)
		},
		move(e) {
			if(this.left < 10 && e.movementX < 0) {
				return false
			}
			if(this.top < 10 && e.movementY < 0) {
				return false
			}
			if(this.left > (innerWidth - 480) && e.movementX > 0) {
				return false
			}
			if(this.top > (innerHeight - 710) && e.movementY > 0) {
				return false
			}
			this.left = this.left + e.movementX
			this.top = this.top + e.movementY
		},
		mouseup() {
			document.removeEventListener("mousemove", this.move)
			document.removeEventListener("mouseup", this.mouseup)
		}
	},
	created() {
		let _this = this
		document.addEventListener("click", (e)=> {
			let bool = false
			for(var i = 0; i < e.path.length; i++) {
				if(e.path[i].className == "replay"){
					bool = true
				}
			}
			if(!bool) {
				_this.isShow = true
			}
		})
	}
}
</script>

<style>
	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}
	
	::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:horizontal {
		border-radius: 6px;
		background: #215fcc;
	}
	
	::-webkit-scrollbar-button {
		display: none;
	}
	
	::-webkit-scrollbar-track, ::-webkit-scrollbar-track-piece {
		background: -webkit-gradient(linear,left);
	}
	.replay {
		position: absolute;
    top: 10px;
    left: 40px;
		font-size: 12px;
	}
	.replay .close {
		position: absolute;
		top: 10px;
		right: 20px;
		padding: 0;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	.replay * {
		color: #fafafa;
	}
	.replay .head-hidden {
		position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 80px);
    height: 60px;
	}
	.replay .header {
		display: flex;
		padding: 0 10px;
		padding-top: 5px;
		height: 60px;
		background:  url("../../../public/static/image/replay/time_1.png");
		background-size: 100% 40px;
		background-repeat: no-repeat; 
	}
	.replay .header .curnav {
		background: rgb(128, 193, 237);
		color: #333;
	}
	.replay .header span {
		cursor: pointer;
		height: 30px;
		line-height: 30px;
		flex: 1;
		text-align: center;
	}
	.replay-cont {
		width: 360px;
		height: 600px;
		background: url("../../../public/static/image/replay/tree.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 50px 40px 40px;
	}
	.replay .close {
		position: absolute;
		top: 10px;
		right: 30px;
		padding: 0;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	.replay .nav {
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
	}
	.replay .cont {
		width: 100%;
    	border: 1px solid #104284;
	}
	.replay-foote {
		position: absolute;
    bottom: 50px;
    right: 50px;
		display: flex;
	}
	.replay-foote >div {
		width: 100px;
		height: 40px;
		color: #06ecf7;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background:  url("../../../public/static/image/replay/按钮_normal.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.replay-foote >div:hover {
		background:  url("../../../public/static/image/replay/按钮_hover.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.replay-foote .loadding {
		width: 24px;
		height: 24px;
		background:  url("../../../public/static/image/replay/加载 (4).png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.replay-foote .statistics {
		width: 24px;
		height: 24px;
		background:  url("../../../public/static/image/replay/统计.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
</style>
