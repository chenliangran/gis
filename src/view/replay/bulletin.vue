<template>
	<div class="bulletin">
        <div class="bulletin-item">
			<div>
				<span></span>
				<span>
					简报信息
				</span>
			</div>
			<div>
                <div>
                    <pre>
						{{dataInfo}}
                    </pre>
					<div class="export" @click="load">
						<span>
							导出
						</span>
					</div>
                </div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			dataInfo: {},
			name: ''
		}
	},
	methods: {
		getDataInfo() {
            let id = sessionStorage.getItem("selectEd")
            $.get(globalUrl.host+'/find/getWordIOFromServer',{id: id}).then(data => {
				this.dataInfo = data.strings
				this.name = data.fileName
            })
		},
		load() {
			let id = sessionStorage.getItem("selectEd")
			window.open(globalUrl.host+'/find/loadWordFile?fileName='+id)
		}	
    },
    watch: {
        WebSocketData: {
			handler:function(v) {
                console.log(v)
				v.map(item => {
					//浮标投放数据
					if(item.type == "FBTFSJ") {
                        debugger
						this.bulletinData = item.data
					}
				})
			},
			deep: true
		}
    },
    created() {
       this.getDataInfo()
    }
}
</script>

<style>
    .bulletin, .bulletin-item {
        height: 100%;
        width: 100%;
    }
	.bulletin-item >div:first-child{
		height: 30px;
		background: url("../../../public/static/image/replay/标题背景.png");
		background-size: 110% 110%;
		background-repeat: no-repeat;
		background-position: -2px -2px;
		display: flex;
		align-items: center;
	}
	.bulletin-item >div:first-child >span:first-child {
		display: inline-block;
		width: 48px;
		height: 24px;
		background: url("../../../public/static/image/replay/icon.png");
		background-repeat: no-repeat;
		background-position: center center;
	}
    .bulletin-item >div:last-child {
        height: calc(100% - 30px);
        overflow: hidden;
    }
    .bulletin-item >div:last-child  >div{
        height: 100%;
		overflow: auto;
    }
    .bulletin-item  .export {
		width: 100px;
		height: 40px;
		position: relative;
		bottom: 10px;
		left: 20px;;
		color: #06ecf7;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background:  url("../../../public/static/image/replay/按钮_normal.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.bulletin-item  .export:hover {
		background:  url("../../../public/static/image/replay/按钮_hover.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
</style>
