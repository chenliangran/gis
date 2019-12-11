<template>
	<div class="info">
		<div class="info-cont" :class="{'info-cont-more': isMore}" v-if="isShow" :style="{top: dataInfo.xy.y + 'px', left: dataInfo.xy.x + 'px'}">
			<div class="heade-hidden" v-show="type!='飞机'" @mousedown="dragger($event)"></div>
			<div class="close" @click="isShow=false">
				x
			</div>
			<div>
				{{dataInfo.data.name?dataInfo.data.name:type}}
			</div>
			<div v-if="type=='潜艇'">
				<p>经度：{{dataInfo.gps?dataInfo.gps.lon:dataInfo.data["jd"]}}</p>
				<p>纬度：{{dataInfo.gps?dataInfo.gps.lat:dataInfo.data["wd"]}}</p>
			</div>
			<div v-if="type=='浮标探测器'">
				<p>经度：{{dataInfo.gps?dataInfo.gps.lon:dataInfo.data["llcrswzjd"]}}</p>
				<p>纬度：{{dataInfo.gps?dataInfo.gps.lat:dataInfo.data["llcrswzwd"]}}</p>
			</div>
			<div v-if="type=='飞机'">
				<p>经度：{{dataInfo.gps?dataInfo.gps.lon:dataInfo.data["zjjd"]}}</p>
				<p>纬度：{{dataInfo.gps?dataInfo.gps.lat:dataInfo.data["zjwd"]}}</p>
			</div>
			<div v-if="type=='民船'">
				<p>经度：{{dataInfo.gps?dataInfo.gps.lon:dataInfo.data["jd"]}}</p>
				<p>纬度：{{dataInfo.gps?dataInfo.gps.lat:dataInfo.data["wd"]}}</p>
			</div>
			<div class="list" v-if="isMore">
				<div>
					<span>属性</span>
					<span>值</span>
				</div>
				<div class="cont">
					<p v-for="(item,key) in keys" :key="key" v-if="key!=''">
						<span>{{item}}</span>
						<span>{{dataInfo.data.origin?dataInfo.data.origin[key]:dataInfo.data[key]}}</span>
					</p>
				</div>
			</div>
			<div class="info-foote">
				<!-- <span v-show="!isMore" @click="isMore = true" class="more">更多</span> -->
				<!-- <span v-show="isMore" @click="isShow = false" class="more">收起</span> -->
			</div>
		</div>
	</div>
    
</template>

<script>
import { setTimeout } from 'timers';
import {qtInfo, fjInfo, fbInfo, mcInfo} from './data.js';
export default {
	props: ["dataInfo", "visible", "type"],
	data() {
		return {
			isMore: true,
			isShow:　false,
			keys: ''
		}
	},
	methods: {
		dragger(e) {
			document.addEventListener("mousemove", this.mousemove)
			document.addEventListener("mouseup", this.mouseup)
		},
		mousemove(e) {
			this.dataInfo.xy.x += e.movementX
			this.dataInfo.xy.y += e.movementY
		},
		mouseup() {
			document.removeEventListener("mousemove", this.mousemove)
			document.removeEventListener("mouseup", this.mouseup)
		},
		closeInfo(e) {
			let bool = false
			for(var i = 0; i < e.path.length; i++) {
				if(e.path[i].className == "info"){
					bool = true
				}
			}
			if(!bool) {
				this.isShow = false
				document.removeEventListener("click", this.closeInfo)
			}
		}
	},
	watch: {
		visible(v) {
			if(v) {
				this.isShow = v
				this.isMore = true
				if(this.type == "飞机") {
					// this.dataInfo = this.dataInfo.
					this.keys = fjInfo
				}
				if(this.type == "浮标探测器") {
					this.keys = fbInfo;
				}
				if(this.type == "潜艇") {
					this.keys = qtInfo
				}
				if(this.type == "民船") {
					this.keys = qtInfo
				}
				console.log(this.dataInfo,this.keys)
				setTimeout(()=>{
					document.addEventListener("click", this.closeInfo)
				})
			}
		}
	}
}
</script>

<style>
	.info {
		/* position: absolute;
    top: 100px;
    left: 100px; */
		font-size: 12px;
	}
	.info * {
		color: #fafafa;
	}
	.info .heade-hidden {
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% - 60px);
		height: 40px;
	}
	.info-cont {
		position: absolute;
		width: 260px;
		height: 140px;
		background: url("../../../public/static/image/info/标牌.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 40px 40px;
	}

	.info-cont.info-cont-more {
		height: 400px;
		background: url("../../../public/static/image/info/标牌1.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.info-cont .close {
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
	.info-cont >div:nth-child(3) {
		padding: 0 12px;
		height: 40px;
		line-height: 40px;
		color: #df8c26;
		font-size: 16px;
	}
	.info-cont >div:nth-child(4) {
		border-top: 1px solid #04527b;
		border-bottom: 1px solid #04527b;
		padding: 10px 12px;
	}
	.info-cont >div:nth-child(4) >p {
		height: 30px;
		line-height: 30px;
	}

	.info-cont .list {
		width: 100%;
    height: 240px;
		border: 1px solid #1d3f75;
		margin-top: 20px;
	}

	.info-cont .list >div:first-child {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #043866;
		font-size: 14px;
		display: flex;
	}

	.info-cont .list >div:first-child >span{
		display: inline-block;
		flex: 1;
		text-align: center;
	}
	.info-cont .list >div:first-child >span:not(:first-child){
		position: relative;
	}

	.info-cont .list >div:first-child >span:not(:first-child):before{
		content: "|";
    width: 3px;
    height: 10px;
    line-height: 10px;
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    top: 15px;
    left: -10px;
	}
	.info-cont .list .cont {
		overflow: auto;
    height: calc(100% - 40px);
	}
	.info-cont .list .cont p{
		height: 30px;
		line-height: 30px;
		display: flex;
	}
	.info-cont .list .cont span {
		flex: 1;
		text-align: center;
		overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
	}
	.info-foote {
		text-align: end;
	}
	.info-foote > span{
		cursor: pointer;
	}
	.more {
		color: #01d2de;
		width: 100%;
    height: 40px;
    line-height: 40px;
		padding-right: 12px;
	}
</style>
