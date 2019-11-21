<template>
    <div class="cms-nav">
        <div class="cmsNav cms-left">
            <ul>
                <li style="margin-left: 30px;">
                    <i class="icon icon1"></i>
                    <span>数据分析</span>
                </li>
                <li>
                    <i class="icon icon2"></i>
                    <div class="export" @click="load">报告导出</div>
                </li>
                <li>
                    <i class="icon icon3"></i>
                    <span>经纬度设置</span>
                </li>
            </ul>
        </div>
        <div class="cms-middle">
            <ul>
                <li><i class="feiji"></i><span>1</span></li>
                <li><i class="zhinan"></i><span>N</span></li>
                <li><span class="time">2018年10月12日 10:12:12</span></li>
                <li><i class="group"></i><span>1</span></li>
            </ul>
        </div>
        <div class="cmsNav cms-right">
             <ul>
                <li><i class="icon icon4"></i><span>图层控制</span></li>
                <li><i class="icon icon5"></i><span>绘图工具</span></li>
                <li><i class="icon icon6"></i><span>截屏</span></li>
                <li style="margin-right: 30px;"><i class="icon icon7"></i><span>FPS信息</span></li>
            </ul>
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
			window.open(globalUrl.host+'/find/loadWordFile?fileName='+this.name)
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
    .cms-nav {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 10;
        height: 86px;
        display: block;
        justify-content: flex-end;
        background: url(../../assets/header/nav.png) no-repeat;
        background-size: 100% 100%;
    }
    .cms-nav .cms-left{
       margin:0;
       float: left;
       text-align: center;
    }
    .cms-nav .cms-left span{
        color: #27c1e9;;
        font-size: 12px;
        letter-spacing: 4px;
    }
    .cms-nav .cms-middle{
         margin:0;
         float: left;
         width: 28%;
         position: absolute;
         left: 35.4%;
    }
   .cmsNav ul{
        display: flex;
        padding: 0;
        margin: 0 auto;
        height: 52px;
    }
    .cms-middle ul{
        display: flex;
        margin: 0 auto;
        position: relative;
        justify-content: center;
    }
    .cms-middle ul li{
        float: left;
        color: #80c1ed;
        list-style: none;
        margin: 0 10px;
        font-size: 12px;
        text-align: center;
        height: 52px;
        line-height: 52px;
    }
     .cms-middle ul li .time{
        border-right: 2px solid #29c7ee;;
        border-left: 2px solid #29c7ee;;
        padding: 0 15px;
        font-size: 16px;
        color: white;
    }
    .cms-middle ul li span{
        color: white;
    }
    .cmsNav ul li{
        float: left;
        color: #27c1e9;
        list-style: none;
        margin: 0 10px;
        font-size: 12px;
        text-align: center;
        height: 52px;
        line-height: 52px;
        background-color: #1a4283;
        padding: 0 20px;
        opacity: 0.7;
    }
    .cmsNav ul li .icon{
         display: inline-block;
        width: 16px;
        height: 15px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
        top: 2px;
        margin-right: 12px;   
    }
    .cmsNav ul li .icon1{
        background: url(../../assets/header/shuju.png);
    }
    .cmsNav ul li .icon2{
        background: url(../../assets/header/daochu.png);      
    }
    .cmsNav ul li .icon3{
        background: url(../../assets/header/dizhizhuanjingweidu.png);
        width: 17px;
        height: 17px;
    }
    .cmsNav ul li .icon4{
        background: url(../../assets/header/tuceng.png);   
        width: 18px;
        height: 17px;   
    }
    .cms-nav ul li .icon5{
        background: url(../../assets/header/biaohui.png);
    }
    .cmsNav ul li .icon6{
        background: url(../../assets/header/ic_jieping.png);      
    }
    .cmsNav ul li .icon7{
        background: url(../../assets/header/xinxi.png);      
    }
    .cms-middle ul li .feiji{
        background: url(../../assets/header/feiji.png);   
        display: inline-block;
        width: 19px;
        height: 18px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative; 
        top: 3px;
        margin-right: 5px;  
    }
    .cms-middle ul li .zhinan{
        background: url(../../assets/header/zhinan.png);
        display: inline-block;
        width: 22px;
        height: 18px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
        top: 3px;
        margin-right: 5px;      
    }
    .cms-middle ul li .group{
        background: url(../../assets/header/group.png);   
        display: inline-block;
        width: 7px;
        height: 17px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative; 
        top: 3px;
        margin:0 10px;  
    }
    .cmsNav ul li span{
        display: inline;
     }
     .cmsNav ul li div{
        display: inline;
     }
    .cms-right{
        float: right;
        position: relative;
        color: white;
        margin:0;

    }
</style>
