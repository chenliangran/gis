<template>
	<div class="infoTime" v-if="isShow">
		<div class="infoTime-cont">
			<div class="close" @click="isShow=false">
				x
			</div>
			<div>
				浮标信息
			</div>
			<div class="list">
				<div>
					<span>属性</span>
					<span>值</span>
				</div>
				<div class="cont">
					<p v-for="(item,key) in dataInfo" :key="key" v-if="key!=''">
						<span>{{key}}</span>
						<span>{{item}}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
    
</template>

<script>
import { setTimeout } from 'timers';
export default {
	props: ["dataInfo", "visible"],
	data() {
		return {
			isShow:　false
		}
	},
	methods: {
		
	},
	watch: {
		visible(v) {
			if(v) {
                this.isShow = v
			}
        },
        isShow(v) {
            if(!v) {
                this.$emit("close")
            } 
        }
	}
}
</script>

<style>
	.infoTime {
		/* position: absolute;
    top: 100px;
    left: 100px; */
		font-size: 12px;
	}
	.infoTime * {
		color: #fafafa;
	}
	.infoTime-cont {
		position: absolute;
        right: 60px;
        top: 10px;
		width: 360px;
	    height: 500px;
		background: url("../../../public/static/image/info/标牌1.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 40px 40px;
	}

	.infoTime-cont .close {
        position: absolute;
        top: 14px;
        right: 46px;
        padding: 0;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
	}
	.infoTime-cont >div:nth-child(2) {
		padding: 0 12px;
		height: 40px;
		line-height: 40px;
		color: #df8c26;
		font-size: 16px;
	}
	.infoTime-cont >div:nth-child(3) {
		border-top: 1px solid #04527b;
		border-bottom: 1px solid #04527b;
	}
	.infoTime-cont >div:nth-child(3) >p {
		height: 30px;
		line-height: 30px;
	}

	.infoTime-cont .list {
		width: 100%;
        height: 450px;
		border: 1px solid #1d3f75;
	}

	.infoTime-cont .list >div:first-child {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #043866;
		font-size: 14px;
		display: flex;
	}

	.infoTime-cont .list >div:first-child >span{
		display: inline-block;
		flex: 1;
		text-align: center;
	}
	.infoTime-cont .list >div:first-child >span:not(:first-child){
		position: relative;
	}

	.infoTime-cont .list >div:first-child >span:not(:first-child):before{
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
	.infoTime-cont .list .cont {
		overflow: auto;
        height: calc(100% - 40px);
	}
	.infoTime-cont .list .cont p{
		height: 30px;
		line-height: 30px;
		display: flex;
	}
	.infoTime-cont .list .cont span {
		flex: 1;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.infoTime-foote {
		text-align: end;
	}
	.infoTime-foote > span{
		cursor: pointer;
	}
</style>
