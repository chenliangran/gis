<template>
	<div class="buoy">
        <div class="buoy-item" v-if="ctData.length > 0">
			<div>
				<span></span>
				<span>
					磁探目标
				</span>
			</div>
			<div class="list">
				<div>
                    <span>发现时间</span>
                    <span>经纬</span>
                    <span>纬度</span>
                </div>
                <ul>
					<li :class="{curFb: curCtSj == item.mbsj}" v-for="(item, i) in ctData"  :key="i">
						<span :title="item.mbsj">{{item["mbsj"]}}</span>
						<span :title="item.mbjd">{{item["mbjd"]}}</span>
						<span :title="item.mbwd">{{item["mbwd"]}}</span>
					</li>
				</ul>
			</div>
		</div>
        <div class="buoy-item" v-if="fbData.length > 0">
			<div>
				<span></span>
				<span>
					浮标目标
				</span>
			</div>
			<div class="list">
				<div>
                    <span>发现时间</span>
                    <span>经纬</span>
                    <span>纬度</span>
                </div>
                <ul>
					<li :class="{curFb: curFbBh == item.mbbh}" v-for="(item, i) in fbData"  :key="i">
						<span :title="item.mbsj">{{item["mbsj"]}}</span>
						<span :title="item.mbwzjd">{{item["mbwzjd"]}}</span>
						<span :title="item.mbwzwd">{{item["mbwzwd"]}}</span>
					</li>
				</ul>
			</div>
		</div>
        <div class="buoy-item" v-if="Object.keys(qtData).length > 0">
			<div>
				<span></span>
				<span>
					潜艇
				</span>
			</div>
			<div>
				<p>
                    <span>潜速：</span>
                    <span>{{qtData.hs}}</span>
                </p>
                <p>
                    <span>经度：</span>
                    <span>{{qtData.jd}}</span>
                </p>
                <p>
                    <span>纬度：</span>
                    <span>{{qtData.wd}}</span>
                </p>
                <p>
                    <span>高度：</span>
                    <span>{{qtData.qs}}</span>
                </p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    props: ["WebSocketData"],
	data() {
		return {
            ctData: [],
            curCtSj: "",
            fbData: [],
            curFbBh: "",
            qtData: []
		}
	},
	methods: {
			updtea(data){
				this.ctData = data.a
				this.fbData = data.c
				
			},
	},
	created() {
		let id = sessionStorage.getItem("selectEd")
		let _this = this
		$.get(globalUrl.host+'/find/findEventListForRex',{sjid: id}).then(data => {
			_this.ctData = data.CTMBSJ
			_this.fbData = data.FBMBSJ
		})
	},
    watch: {
		setTime(v) {
			let id = sessionStorage.getItem("selectEd")
			let _this = this
			$.get(globalUrl.host+'/find/findEventListForRex',{sjid: id}).then(data => {
				_this.ctData = data.CTMBSJ
				_this.fbData = data.FBMBSJ
			})
		},
        WebSocketData: {
			handler:function(v) {
				v.map(item => {
					if(item.type == "TIME") {
						
					}
					//潜艇
					if(item.type == "QT") {
						this.qtData = item.data
					}
                    //磁探
					if(item.type == "CTMBSJ") {
						// let bool = true
						//this.curCtSj = item.data.mbsj
						// this.ctData.map(ct => {
						// 	if(ct.mbsj == item.data.mbsj) {
						// 		bool = false
						// 	}
						// })
						// if(bool) {
						// 	this.ctData.push(item.data)
						// }
					}
                    //浮标
					if(item.type == "FBMBSJ") {
						// let bool = true
						//this.curFbBh = item.data.mbbh
						// this.fbData.map(fb => {
						// 	if(fb.fbbh == item.data.mbbh) {
						// 		bool = false
						// 	}
						// })
						// if(bool) {
						// 	this.fbData.push(item.data)
						// }
					}
				})
			},
			deep: true
		}
    }
}
</script>

<style>
	.buoy-item >div:first-child{
		height: 30px;
		background: url("../../../public/static/image/replay/标题背景.png");
		background-size: 110% 110%;
		background-repeat: no-repeat;
		background-position: -2px -2px;
		display: flex;
		align-items: center;
	}
	.buoy-item >div:first-child >span:first-child {
		display: inline-block;
		width: 48px;
		height: 24px;
		background: url("../../../public/static/image/replay/icon.png");
		background-repeat: no-repeat;
		background-position: center center;
	}
	.buoy-item p {
		height: 30px;
		line-height: 30px;
		padding: 0 24px;
	}
    .buoy-heade .status {
        display: flex;
        padding: 0 24px;
        height: 50px;
        line-height: 50px;
    }
    .buoy-heade .status >div {
        padding-right: 20px;
    }
    .buoy-heade .status >div >span:first-child {
        margin-right: 10px;
    }
    .buoy-heade .normal span:first-child{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #19d3c9;
    }
    .buoy-heade .find span:first-child{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #d5d21a;
    }
    .buoy-heade .position span:first-child{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #ff4a10;
    }
    .buoy-heade .death span:first-child{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #848484;
    }
    .buoy-heade >div:first-child{
		height: 30px;
		background: url("../../../public/static/image/replay/标题背景.png");
		background-size: 110% 110%;
		background-repeat: no-repeat;
		background-position: -2px -2px;
		display: flex;
		align-items: center;
	}
	.buoy-heade >div:first-child >span:first-child {
		display: inline-block;
		width: 48px;
		height: 24px;
		background: url("../../../public/static/image/replay/icon.png");
		background-repeat: no-repeat;
		background-position: center center;
	}
	.buoy-heade >div:last-child >div:not(:first-child){
        display: flex;
        height: 30px;
        line-height: 30px;
        padding: 0 24px;
        cursor: pointer;
        justify-content: center;
	}
    .buoy-heade >div:last-child >div:last-child{
        display: flex;
        height: 30px;
        line-height: 30px;
        padding: 0 24px;
        cursor: pointer;
        justify-content: center;
        color: #0ca1e8;
	}
    .buoy-heade p {
        margin-right: 20px;
    }
    .buoy-item .list {
		border: 1px solid #104284;
		margin: 10px;
	}
	.buoy-item .list >div:first-child{
		height: 30px;
		line-height: 30px;
		background: #092254;
		display: flex;
	}
	.buoy-item .list >div:first-child span {
		flex: 1;
		text-align: center;
	}
	.buoy-item .list ul {
		max-height: 80px;
		overflow: auto;
	}
	.buoy-item .list ul li{
		height: 30px;
		line-height: 30px;
		display: flex;
	}
	.buoy-item .curFb {
		background: #0922546b;
	}
	.buoy-item .list ul li span{
		flex: 1;
		text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
	}
</style>
