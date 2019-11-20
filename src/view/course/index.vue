<template>
	<div class="course">
		<div class="course-cont" :style="{top: dataInfo.xy.y + 'px', left: dataInfo.xy.x + 'px'}" v-if="isShow">
			<div class="close"  @click="isShow=false">x</div>
			<div class="course-top">
				航机设置
			</div>
			<div>
				<label>设置数值:</label>
				<select v-model="value">
					<option value="1">1</option>
					<option value="2">2</option>
				</select>
			</div>
			<div>
				<label>模式选择:</label>
				<select v-model="value1">
					<option value="1">1</option>
					<option value="2">2</option>
				</select>
			</div>
			<div class="save" @click="save">保存</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["dataInfo", "visible"],
	data() {
		return {
			value: '',
			value1: '',
			isShow: false
		}
	},
	methods: {
		save() {
			debugger
		}
	},
	watch: {
		visible(v) {
			if(v) {
				this.isShow = v
			}
		}
	}
}
</script>

<style>
	.course {
		font-size: 12px;
	}
	.course * {
		color: #fafafa;
	}
	.course-cont {
		position: absolute;
		width: 200px;
		height: 200px;
		background: url("../../../public/static/image/info/标牌.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 20px 40px;
	}
	.course .close {
		position: absolute;
		top: 10px;
		right: 30px;
		padding: 0;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	.course-top {
		height: 40px;
		line-height: 40px;
		color: #df8c26;
		font-size: 16px;
		border-bottom: 1px solid #104284;
		padding: 0 12px;
	}
	.course-cont >div:nth-child(3),.course-cont >div:nth-child(4) {
		display: flex;
		height: 50px;
		align-items: center;
		padding: 0 12px;
	}

	.course label{
		padding-right: 10px; 
	}

	.course select{
		display: flex;
		flex: 1;
		background: transparent;
		border: 1px solid #104284;
		color: #06ecf7;
		height: 30px;
	}

	.course option {
		height: 30px;
		background: transparent;
		color: #06ecf7;
	}
	.course option:hover {
		background: #104284;
	}
	.course .save {
		position: absolute;
		bottom: 30px;
		right: 40px;
		padding: 0;
		width: 60px;
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

	.course .save:hover {
		background:  url("../../../public/static/image/replay/按钮_hover.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
</style>
