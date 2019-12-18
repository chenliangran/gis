<style>
.mapToolContainer{
    display: flex;
    flex-direction: column;
    position: fixed;
    right:10px;
    top:170px;
    background-color: rgba(14, 36, 95, 0.7);
    box-shadow: 0px 0px 2px #9a9a9a inset;
}
    
</style>

<style scoped>

.mapToolContainer .icon-div{
    width:24px;
    height:24px;
    margin: 0;
    padding : 4px 5px;
    border-right: none;
    border-bottom: 1px solid #155073;
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
        <div class="icon-div" v-popover:setFbRange>
            范围
        </div>
        <div class="icon-div" @click="search">
            地名查询
        </div>
        <el-popover
        ref="setFbRange"
        placement="left"
        width="300"
        v-model="setFbRangeState">
            <p>设置所有浮标探测范围</p>
            <el-input v-model="range"></el-input>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="setFbRangeState = false">关闭</el-button>
                <el-button type="primary" size="mini" @click="setFbRange">确定</el-button>
            </div>
        </el-popover>
        <el-dialog
        title="地名查询"
        :visible.sync="dialogVisible"
        append-to-body
        :close-on-click-modal="false"
        width="15%">
            <el-input v-model="cityName" placeholder="请输入地名"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">取 消</el-button>
                <el-button size="small" type="primary" @click="flyCity">查 询</el-button>
            </span>
        </el-dialog>
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
            setFbRangeState:false,
            range:2,
		    toolList : [
               {
                   label : '点',
                   key : 'point'
               },
               {
                   label : '线',
                   key : 'line'
               },
               {
                   label : '文字',
                   key : 'text'
               },
               {
                   label : '测距',
                   key : 'line_distance'
               },
               {
                   label : '清点',
                   key : 'Clear_point'
               },
               {
                   label : '清线',
                   key : 'Clear_line'
               },
               {
                   label : '清字',
                   key : 'Clear_text'
               },
               {
                   label : '清距',
                   key : 'Clear_distance'
               },
               {
                   label : '停止',
                   key : 'Stop'
               }
           ],
            gridState:false,
            dialogVisible:false,
            cityName:"",
            cityList:[
                {"name":"成都","jd":104.07,"wd":30.67},
                {"name":"上海","jd":121.47,"wd":31.23},
                {"name":"北京","jd":116.41667,"wd":39.91667},
                {"name":"重庆","jd":106.45000,"wd":29.56667},
                {"name":"天津","jd":117.20000,"wd":39.13333},
                {"name":"香港","jd":114.10000,"wd":22.20000},
                {"name":"澳门","jd":113.50000,"wd":22.20000},
                {"name":"广州","jd":113.23333,"wd":23.16667},
                {"name":"杭州","jd":120.20000,"wd":30.26667},
                {"name":"南京","jd":119.78333,"wd":32.05000},
            ]
        }
    },
    methods: {
        useTool(key){
            if(key == 'Clear_point' || key == 'Clear_line' ||key == 'Clear_text' || key == 'Clear_distance' || key == 'Stop'){
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
        },
        setFbRange(){
            if(Number(this.range)){

                Map.Detector.SetRange(Number(this.range))
            }else{
                this.$message('只能输入数字')
            }
        },
        search(){
            this.dialogVisible = true
        },
        flyCity(){
            this.dialogVisible = false;
            this.cityList.map(s=>{
                if(s.name == this.cityName){
                    window.Map.Tool.FlyTo([s.jd, s.wd, 40000]);
                }
            })
        }
    },
    watch: {
		
    }
}
</script>

