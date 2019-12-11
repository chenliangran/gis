<style>
.displayControllerContainer{
    display: flex;
    flex-direction: column;
    position: fixed;
    right:10px;
    bottom:210px;
    background-color: rgba(14, 36, 95, 0.7);
    box-shadow: 0px 0px 2px #9a9a9a inset;
}
    
</style>

<style scoped>

.displayControllerContainer .icon-div{
    width:24px;
    height:24px;
    margin: 0;
    padding : 6px 5px;
    border-right: none;
    border-bottom: 1px solid #155073;
    text-align: center;
    font-size: 12px;
    color:rgb(170, 167, 167);
    cursor: pointer;
}
.icon-div.active{

    color:#fff;
}
</style>

<template>
    <div class="displayControllerContainer">
        <div class="icon-div" :class="{'active':tool.state}" v-for="tool in toolList" :key="tool.key" @click="display(tool)">
            {{tool.label}}
        </div>
    </div>
    
</template>

<script>

export default {
    name : 'MapTool',
	props: [],
	components: {
		
	},
    data() {

        return {

		   toolList : [{
               label : '浮标',
               key : 'detector',
               state : true
           },{
               label : '飞机',
               key : 'feiji',
               state : true
           },{
               label : '潜艇',
               key : 'qianting',
               state : true
           },{
               label : '磁探',
               key : 'ct',
               state : true
           },{
               label : '民船',
               key : 'minchuan',
               state : true
           },
           {
               label : '浮标目标',
               key : 'detector_mb',
                state : true
           },
           {
               label : '失联浮标',
               key : 'detector_sl',
                state : true
           },
            {
               label : '浮标虚线',
               key : 'detector_xx',
                state : true
           },

        //    {
        //        label : '不明',
        //        key : 'unknow',
        //        state : true
        //    }
           ]
        }
    },
    methods: {
        display(tool){

            tool.state = !tool.state;
            window.Map.Groups.SetGroup(tool.key, tool.state);
        }
    },
    watch: {
		
    }
}
</script>

