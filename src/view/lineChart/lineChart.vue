
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.line-chart{
    padding: 0 10px;
    background: url(../../assets/login/窗体.png) no-repeat!important;
	background-size: 100% 100%!important;
}
.chart-close{
    display: flex;
    justify-content: flex-end;
    padding: 10px 40px;
}
.chart-close span{
    font-size: 24px;
    cursor: pointer;
    color: rgb(0,246,255)
}
</style>

<template>
  <div  class="line-chart" id="lineChart" style="width: 500px;height:200px;">
        <!-- <div class="chart-close">
            <span @click='cancel'>×</span>
        </div> -->
        <!-- <div  style="width: 500px;height:200px;">

        </div> -->
  </div>
</template>

<script>
let socketController = null;

export default {
  name: "lineChart",

  data: function() {
    return {
        xData:['00:00', '00:00', '00:00', '00:00', '00:00', '00:00', '00:00'],
        
      myChart: null,
      chartData: ['0', '0', '0', '0', '0', '0', '0']
    };
  },

  props: {},

  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("lineChart"));
    let option = {},
      that = this;

    function randomData() {
      now = now + 1;
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [now, Math.random() * 100]
      };
    }

    var data = [];
    var now = +0;
    var oneDay = 1;
    var value = Math.random() * 1000;
    // for (var i = 0; i < 600; i++) {
    //   that.chartData.push(randomData());
    // }
     let xData = [],chartData = []
        for(let i = 0;i<600;i++){
          xData.push('00:00'),
          chartData.push('0')
        }
        that.xData=xData
        that.chartData=chartData
    console.log(that.chartData)
    option = {
    //   title: {
    //     text: "动态数据 + 时间坐标轴"
    //   },
      tooltip: {
        trigger: "axis",
        formatter: function(params) {
            // console.log(params)
          params = params[0];
          var date = new Date(params.name);
          return params.data
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: "category",
        axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#87CEFA'
            }
          },
          data: that.xData

      },
      yAxis: {
        type: "value",
         axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#87CEFA'
            }
          },
      },
      series: [
        {
        //   name: "模拟数据",
          type: "line",
          showSymbol: false,
          hoverAnimation: false,
          //stack: '总量',
          data: that.chartData
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    this.myChart.setOption(option);
    // window.onresize = function () {
    //     that.myChart.resize();
    // }
  },

  methods: {
    setLineOption(data) {
        // console.log(data)
      let that = this;
    //   for (var i = 0; i < 1; i++) {
    //     that.chartData.shift();
    //     that.chartData.push(randomData());
    //   }
      if(!data){
        let xData = [],chartData = []
        for(let i = 0;i<600;i++){
          xData.push('00:00'),
          chartData.push('0')
        }
        that.xData=xData
        that.chartData=chartData
      }else{
        that.xData.shift();
        that.xData.push(data.sb.split('.')[0].split(" ")[1]);

        that.chartData.shift();
        that.chartData.push(data.gxqyg);
      }
        
        that.myChart.setOption({
            xAxis: {
                type: "category",
                axisLine: {
                    lineStyle: {
                    // 设置y轴颜色
                    color: '#87CEFA'
                    }
                },
                data: that.xData

            },
            // yAxis: {
            //     type: "value",
            //     axisLine: {
            //         lineStyle: {
            //         // 设置y轴颜色
            //         color: '#87CEFA'
            //         }
            //     },
            // },
            series: [
                {
                //   name: "模拟数据",
                type: "line",
                showSymbol: false,
                hoverAnimation: false,
                //stack: '总量',
                data: that.chartData
                }
            ]
        });
        // that.myChart.setOption({
        //     xAxis: [
        //     {
        //         type: "value",
        //         splitLine: {
        //         show: false
        //         },
        //         min: +data[0].name,
        //         max: +20
        //     }
        //     ]
        // });
    }
  }
};
</script>

