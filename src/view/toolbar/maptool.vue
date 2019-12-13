<style>
.mapToolContainer{
    display: flex;
    flex-direction: column;
    position: fixed;
    right:10px;
    top:180px;
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
        <div class="icon-div" @click="mapGrid">
            网格
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
               label : '清除点',
               key : 'Clear_point'
           },{
               label : '清除线',
               key : 'Clear_line'
           },{
               label : '清除文字',
               key : 'Clear_text'
           },{
               label : '清除测距',
               key : 'Clear_distance'
           },{
               label : '停止',
               key : 'Stop'
           }],
           gridState:false,
        }
    },
    methods: {
        useTool(key){
            if(key == 'Clear_point' || key == 'Clear_line' ||key == 'Clear_text' || key == 'Clear_distance' || key == 'Stop'){
               debugger
                window.Map.MarkTool[key]();
                return
            }
            window.Map.MarkTool.Start({
                shape : key
            })
        },
        mapGrid(){
            this.gridState = !this.gridState;
            window.Map.Tool.Grid(this.gridState)
        }
    },
    watch: {
		
    }
}
</script>

