<template>
	<div class="events" :style="{ left: left + 'px', top: top + 'px' }">
		<div class="events-cont" v-if="isShow">
			<div class="head-hidden"  @mousedown="draggerStart($event)"></div>
			
			<div class="nav">事件列表</div>
			<div class="cont">
				<event ref='myEvents' :setTime="setTime" @uploading="uploading" :dataInfo="dataInfo" :WebSocketData="WebSocketData"/>
			</div>
		</div>
	</div>
</template>

<script>
import event from "@/view/replay/event.vue";
export default {
	props: ["dataInfo", "WebSocketData", "setTime"],
	data() {
		return {
			allDataw:{},
			nav: ["事件列表"],
			curNav: "事件列表",
			left: (innerWidth - 450),
			top: 320,
			isShow: true
		}
	},
	
	components: {
		event,
	},
	methods: {
		updtea(data) {
			this.$refs['myEvents'].updtea(data)
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
				if(e.path[i].className == "event"){
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
	.events {
		position: absolute;
    top: 10px;
    left: 40px;
		font-size: 12px;
	}
	.events .close {
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
	.events * {
		color: #fafafa;
	}
	.events .head-hidden {
		position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 80px);
    height: 60px;
	}
	.events .header {
		display: flex;
		padding: 0 10px;
		padding-top: 5px;
		height: 60px;
		background:  url("../../../public/static/image/replay/time_1.png");
		background-size: 100% 40px;
		background-repeat: no-repeat; 
	}
	.events .header .curnav {
		background: rgb(128, 193, 237);
		color: #333;
	}
	.events .header span {
		cursor: pointer;
		height: 30px;
		line-height: 30px;
		flex: 1;
		text-align: center;
	}
	.events-cont {
		width: 360px;
		height: 600px;
		background: url("../../../public/static/image/replay/tree.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 60px 40px 40px;
	}
	.events .close {
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
	.events .nav {
		position: absolute;
    top: 0;
    font-size: 14px;
    font-weight: 600;
    left: 40%;
    width: 20%;
    height: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 5px;
	}
	.events .cont {
		width: 100%;
    border: 1px solid #104284;
    height: calc(100% - 20px);
	}
</style>
