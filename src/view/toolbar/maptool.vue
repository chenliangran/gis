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
ul{
    border: 1px solid #DCDFE6;
    max-height: 210px;
    overflow: auto;
}
ul li{
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    cursor: pointer;
    border-top: 1px solid #DCDFE6;
}
ul li:first-child{
      border-top: none !important;
}
ul li:hover{
    background-color:#66b1ff;
    color: #fff;
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
            <el-input v-model="cityName" placeholder="请输入城市中文名" @click="search"></el-input>
            <ul>
               <li v-for="cityList in filteredCityList" @click="flyToCity(cityList.name,cityList)"><span>{{cityList.name}}</span></li>
            </ul>
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
                {"name":"沈阳市","jd":123.429092,"wd":41.796768},
                {"name":"长春市","jd":125.324501,"wd":43.886841},
                {"name":"上海市","jd":121.472641,"wd":31.231707},
                {"name":"浦东新区","jd":121.53,"wd":31.22},
                {"name":"静安区","jd":121.45,"wd":31.23},
                {"name":"长宁区","jd":121.42,"wd":31.22},
                {"name":"徐汇区","jd":121.43,"wd":31.18},
                {"name":"北京","jd":116.41667,"wd":39.91667},
                {"name":"重庆","jd":106.45000,"wd":29.56667},
                {"name":"天津","jd":117.20000,"wd":39.13333},
                {"name":"香港","jd":114.10000,"wd":22.20000},
                {"name":"澳门","jd":113.50000,"wd":22.20000},
                {"name":"哈尔滨市","jd":126.642464,"wd":45.756966},
                {"name":"呼和浩特市","jd":111.751990,"wd":40.841490},
                {"name":"银川市","jd":106.232480,"wd":38.486440},
                {"name":"太原市","jd":112.549248,"wd":37.857014},
                {"name":"石家庄市","jd":114.502464,"wd":38.045475},
                {"name":"济南市","jd":117.000923,"wd":36.675808},  
                {"name":"郑州市","jd":113.665413,"wd":34.757977},
                {"name":"西安市","jd":108.948021,"wd":34.263161},
                {"name":"武汉市","jd":114.298569,"wd":30.584354},
                {"name":"南京市","jd":118.76741,"wd":32.041546},
                {"name":"合肥市","jd":117.283043,"wd":31.861191},               
                {"name":"长沙市","jd":112.982277,"wd":28.19409},
                {"name":"南昌市","jd":115.892151,"wd":28.676493},
                {"name":"杭州市","jd":120.15358,"wd":30.287458},
                {"name":"福州市","jd":119.306236,"wd":26.075302},
                {"name":"三明市","jd":117.62,"wd":26.27},
                {"name":"明溪县","jd":117.20,"wd":26.37},
                {"name":"泰宁县","jd":117.17,"wd":26.90},
                {"name":"闽侯县","jd":119.13,"wd":26.15},
                {"name":"晋安区","jd":119.32,"wd":26.08},
                {"name":"广州市","jd":113.28064,"wd":23.125177},
                {"name":"荔湾区","jd":113.23,"wd":23.13},
                {"name":"越秀区","jd":113.27,"wd":23.13},
                {"name":"海珠区","jd":113.25,"wd":23.10},
                {"name":"天河区","jd":113.35,"wd":23.12},
                {"name":"白云区","jd":113.27,"wd":23.17},
                {"name":"花都区","jd":113.22,"wd":23.40},
                {"name":"台北市","jd":121.5200760,"wd":25.0307240},
                {"name":"海口市","jd":110.199890,"wd":20.044220},
                {"name":"南宁市","jd":108.320007,"wd":22.82402},
                {"name":"昆明市","jd":102.71225,"wd":25.040609},
                {"name":"贵阳市","jd":106.713478,"wd":26.578342},
                {"name":"兰州市","jd":103.834170,"wd":36.061380},
                {"name":"西宁市","jd":101.777820,"wd":36.617290},
                {"name":"拉萨市","jd":91.11450,"wd":29.644150},
                {"name":"乌鲁木齐市","jd":87.616880,"wd":43.826630}
            ]
        }
    },

    computed: {
        //匹配搜索
        filteredCityList: function () {
            var cityLists= this.cityList,
                cityName = this.cityName;
 
            if(!cityName){
                return cityLists;
            }
 
            cityName = cityName.trim().toLowerCase();
 
            cityLists = cityLists.filter(function(item){
                if(item.name.toLowerCase().indexOf(cityName) !== -1){
                    return item;
                }
            })
 
            // 返回过来后的数组
            return cityLists;
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
        },
        flyToCity(name,cityList){
            this.dialogVisible = false;
            window.Map.Tool.FlyTo([cityList.jd, cityList.wd, 40000]);
        }
    },
    watch: {
		
    }
}
</script>

