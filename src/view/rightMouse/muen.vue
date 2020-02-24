<template>
    <div>
        <div class="right-mouse" :style="{top: dataInfo.xy.y + 'px', left: dataInfo.xy.x + 'px'}" v-if="isShow"  @contextmenu.prevent="show">
            <ul>
                <li @click="isShowAttribute=true; isShow=false">{{type}}属性</li>
                <!-- <li @click="isShowCourse=true; isShow=false">航迹设置</li> -->
            </ul>
        </div>
		<info :dataInfo="dataInfo" :visible="isShowAttribute" :type="type"></info>
		<course :dataInfo="dataInfo" :visible="isShowCourse"></course>
    </div>
    
</template>

<script>
import info from '../info/index.vue'
import course from '../course/index.vue'
export default {
	props: ["dataInfo", "visible", "type"],
	components: {
		info,
		course
	},
    data() {
        return {
		   isShow: false,
		   isShowAttribute: false,
		   isShowCourse: false
        }
    },
    methods: {
		show(){
			this.isShow = false;
		}	
    },
    watch: {
		visible(v) {

			if(v) {
				this.isShow = v
				this.isShowAttribute = false
				this.isShowCourse = false
			}else{
				this.isShow = false
				
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
    .right-mouse {
        position: absolute;
    }
	.right-mouse ul {
		border: 1px solid #135387;
	}
	.right-mouse ul li:hover {
		background: #14497a;
		color: #00f6ff;
	}
	.right-mouse ul li{
		width: 160px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		list-style: none;
		background: #0e1b4a;
		border-bottom: 1px solid #135387;
		color: #a0d6e5;
		cursor: pointer;
	}
</style>
