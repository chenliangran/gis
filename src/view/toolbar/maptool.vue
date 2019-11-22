<style>
.mapToolContainer{
    display: flex;
    flex-direction: column;
    position: fixed;
    right:10px;
    top:115px;
    background-color: rgba(14, 36, 95, 0.7);
    box-shadow: 0px 0px 2px #9a9a9a inset;
}
    
</style>

<style scoped>

.mapToolContainer .icon-div{
    width:24px;
    height:24px;
    margin: 0;
    padding : 6px 5px;
    border-right: none;
    border-bottom: 1px solid #155073;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color:#fff;
    cursor: pointer;
}
</style>

<template>
    <div class="mapToolContainer">
        <div class="icon-div" v-for="tool in toolList" :key="tool.key" @click="useTool(tool.key)">
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
               label : '点',
               key : 'point'
           },{
               label : '线',
               key : 'line'
           },{
               label : '文字',
               key : 'text'
           },{
               label : '测距',
               key : 'line_distance'
           },{
               label : '清除',
               key : 'Clear'
           },{
               label : '停止',
               key : 'Stop'
           }]
        }
    },
    methods: {
        useTool(key){

            if(key == 'Clear' || key == 'Stop'){

                window.Map.MarkTool[key]();
                return
            }

            window.Map.MarkTool.Start({
                shape : key
            })
        }
    },
    watch: {
		
    }
}
</script>

