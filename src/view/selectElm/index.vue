
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.select-big{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: fixed;
    z-index: 1000000;
    display: flex;
    justify-content: center;
    align-items: center
}
.select-msg{
    width: 700px;
    height: 500px;
    background: url(../../assets/login/窗体.png) no-repeat!important;
	background-size: 100% 100%!important;

}
.select-close{
    display: flex;
    justify-content: flex-end;
    padding: 20px 40px;
}
.select-close span{
    font-size: 24px;
    cursor: pointer;
    color: rgb(0,246,255)
}
.select-muen{
    width: 45%;
    margin: auto;
    display: flex;
    color:#ffffff;
    align-items: center;
    font-size: 12px;
    
    border-bottom: 1px solid rgba(38, 86, 126, 0.89);
    padding: 10px 20px;
    /* padding-bottom: 20px; */
}
.select-muens{
    width: 45%;
    margin: auto;
    /* display: flex; */
    color:#ffffff;
    align-items: center;
    font-size: 12px;
    margin-top: 20px
}
.select-muens li{
    list-style: none;
    display: flex;
    align-items: center;
    margin: 10px 0;
}
.select-muens li span{
    width: 60px;
    text-align: right
}
.select-muen select{
    flex: 1;
    padding: 8px;
    color: rgb(0,246,255);
    background: url(../../assets/login/input_normal.png) no-repeat!important;
	background-size: 100% 100%!important;
    border: none;

}
.select-muen span{
    width: 60px;
    text-align: right
}
.select-input{
    flex: 1;
    padding: 8px;
    color: rgb(0,246,255);
    background: url(../../assets/login/input_normal.png) no-repeat!important;
	background-size: 100% 100%!important;
    border: none;
}
.select-muen select>option{
    
    background:rgb(23,41,112);
	background-size: 100% 100%!important;
    border: none;
    
}
.select-event{
    width: 45%;
    margin: auto;
	margin-top: 20px;
	display: flex;
	justify-content: flex-end;
}
.select-event div{
	width: 90px;
	height: 35px;
	background: url(../../assets/icon/按钮.png) no-repeat!important;
	background-size: 100% 100%!important;
	display: flex;
	font-size: 14px;
	justify-content: center;
	align-items: center;
	color:#8efffb;
	margin: 0 10px;
	cursor: pointer;
}
.select-loadding{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    z-index: 1000001;
    display: flex;
    justify-content: center;
    align-items: center
}
.select-loadding-icon{
    width: 134px;
    height: 10px;
    background: url(../../assets/icon/veryhuo.com_gif_61.gif) no-repeat!important;
	background-size: 100% 100%!important;
    /* opacity:0.5 */
}
.tl-sm{
	height:40px;
	width:425px;
	margin:auto;
	margin-top:20px;
	background: url(../../assets/header/tlsm.png) no-repeat!important;
	background-size: 100% 100%!important;
}
</style>

<template>
  <div class="select-big">
      <div class="select-loadding" v-show='loaddingF'>
          <div class="select-loadding-icon">
          
        </div>
      </div>
      <div class='select-msg'>
            <div class="select-close">
              <span @click='cancel'>×</span>
            </div>
            <div class="select-muen">
                <!-- <span>选取组： </span> -->
                <select @change='selectGroup($event)'>
                    <option :group='null' value="" >选取组</option>
                    <option :group='item.groupNum' :value="item.sjId" v-for="item in groupData" :key="item.groupNum">{{item.groupNum}}</option>
                    
                </select>
                <div class="select-event" style="margin-top:0px">
                    <div @click='addGroup'>创建组</div>
                    <!-- <div @click='cancel'>取消</div> -->
                </div>
            </div>
            <div class="select-muen" v-if='roundFlag'>
                <span>选取回合： </span>
                <select @change='selectC($event)' >
                    <!-- <option value="" >无</option> -->
                    <option :value="item.id" v-for="item in ptData" :key="item.id">{{item.ptmc}}</option>
                    
                </select>
                
            </div>
            <div class="select-event" style="margin:10px 0 0 -20px;">
                <div @click="selectJWD(jingweiduF)">选择经纬度</div>
            </div>
            <ul class="select-muens" v-show="jingweiduF">
                <li>
                    <span>经度： </span>
                    <input class="select-input" placeholder="" type='text' v-model="pos.jd"/>
                </li>
                <li>
                    <span>纬度： </span>
                    <input class="select-input" placeholder="" type='text' v-model="pos.wd"/>
                </li>
            </ul>
            <div class="select-event">
                <div @click='confirm'>确定</div>
			    <!-- <div @click='cancel'>取消</div> -->
            </div>
			<div class='tl-sm'> </div>
      </div>
    
    
  </div>
</template>

<script>




export default {

  name: 'selects',

  data:function(){

      return {
          groupData:[

          ],
          roundFlag:false,
          flag:false,
          loaddingF:false,
          jingweiduF:false,
          pos:{
              jd:'122',
              wd:'22'
          },
          ptData:[],
          setId:''
      }    
  },

  props: {
   
  },

  mounted() {
      this.ptData = JSON.parse(sessionStorage.getItem('ptData'))
      this.$emit('buildSocket')
      $.get(`${globalUrl.host}/find/findAllGroupName`, {
        
      }).then(data => {
       this.groupData = data
      });

  },

  methods: {
      addGroup(){
          this.roundFlag = true
      },
      selectJWD(jingweiduF){
          this.jingweiduF = !jingweiduF
      },
      selectGroup(e){
          this.setId = $(e.target).find('option:selected').attr("value")
          sessionStorage.setItem('selectEd',$(e.target).find('option:selected').attr("value"))
          sessionStorage.setItem('groupNum',$(e.target).find('option:selected').attr("group"))
      },
      selectC(e){
          this.flag = true
          this.setId = $(e.target).find('option:selected').attr("value")
          sessionStorage.setItem('selectEd',$(e.target).find('option:selected').attr("value"))
        //   console.log($(e.target).find('option:selected').attr("value"))
      },
	  confirm(){
          let that = this
            if(!this.roundFlag){
                if(!sessionStorage.getItem('selectEd')){
                    alert('请选择组')
                    return
                }
                this.loaddingF = true
                $.ajax({
                    type: "get",
                    // dataType: "json",
                    url: `${globalUrl.host}/find/organizeData`,
                    // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                    data: {
                        sjid: sessionStorage.getItem('selectEd')
                    },//将js对象转成json对象
                    success: function (data) {
                        that.loaddingF = false
                        sessionStorage.setItem('pos',JSON.stringify(that.pos))
                            
                            $.ajax({
                                type: "post",
                                // dataType: "json",
                                url: `${globalUrl.host}/find/addToAGroup`,
                                // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                                data: {
                                    name:sessionStorage.getItem('name'),
                                    sjId:that.ptData[0].id,
                                    // ip:null,
                                    groupNum:sessionStorage.getItem('groupNum')
                                },//将js对象转成json对象
                                success: function (data) {
                                    $.ajax({
                                        type: "get",
                                        // dataType: "json",
                                        url: `${globalUrl.host}/find/findSystemStatus`,
                                        // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                                        data: {
                                            
                                            groupNum:sessionStorage.getItem('groupNum')
                                        },//将js对象转成json对象
                                        success: function (data) {

                                            sessionStorage.setItem('groupType',data)
                                            
                                        }
                                    })
                                    
                                }
                            })
                        
                        that.$emit('confirm')    
                    }
                })
            }else{
                if(!this.flag){
                    if(this.ptData.length > 0){
                        sessionStorage.setItem('selectEd',this.ptData[0].id)
                        this.loaddingF = true
                        $.ajax({
                            type: "get",
                            // dataType: "json",
                            url: `${globalUrl.host}/find/organizeData`,
                            // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                            data: {
                                sjid: that.ptData[0].id
                            },//将js对象转成json对象
                            success: function (data) {
                                that.loaddingF = false
                                sessionStorage.setItem('pos',JSON.stringify(that.pos))
                                
                                    $.ajax({
                                        type: "post",
                                        // dataType: "json",
                                        url: `${globalUrl.host}/find/addToAGroup`,
                                        // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                                        data: {
                                            name:sessionStorage.getItem('name'),
                                            sjId:that.ptData[0].id,
                                            // ip:null,
                                            // groupNum:null
                                        },//将js对象转成json对象
                                        success: function (data) {
                                            sessionStorage.setItem('groupNum',data)
                                            $.ajax({
                                                type: "get",
                                                // dataType: "json",
                                                url: `${globalUrl.host}/find/findSystemStatus`,
                                                // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                                                data: {
                                                    
                                                    groupNum:sessionStorage.getItem('groupNum')
                                                },//将js对象转成json对象
                                                success: function (data) {

                                                    sessionStorage.setItem('groupType',data)
                                                    
                                                }
                                            })
                                            
                                        }
                                    })
                                
                                that.$emit('confirm')    
                            }
                        })
                    }
                }else{
                    
                    if(!this.setId){
                        alert('请选择回合')
                        return
                    }
                    this.loaddingF = true
                    $.ajax({
                        type: "get",
                        // dataType: "json",
                        url: `${globalUrl.host}/find/organizeData`,
                        // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                        data: {
                            sjid: that.setId
                        },//将js对象转成json对象
                        success: function (data) {
                            that.loaddingF = false
                            if(!this.roundFlag){
                                $.ajax({
                                    type: "post",
                                    // dataType: "json",
                                    url: `${globalUrl.host}/find/addToAGroup`,
                                    // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                                    data: {
                                        name:sessionStorage.getItem('name'),
                                        sjId:that.setId
                                        // ip:null,
                                        // groupNum:null
                                    },//将js对象转成json对象
                                    success: function (data) {
                                        sessionStorage.setItem('groupNum',data)
                                        $.ajax({
                                            type: "get",
                                            // dataType: "json",
                                            url: `${globalUrl.host}/find/findSystemStatus`,
                                            // contentType: "application/json;charset=UTF-8",//指定消息请求类型
                                            data: {
                                                
                                                groupNum:sessionStorage.getItem('groupNum')
                                            },//将js对象转成json对象
                                            success: function (data) {

                                                sessionStorage.setItem('groupType',data)
                                                
                                            }
                                        })
                                    }
                                })
                            }else{

                            }
                            sessionStorage.setItem('pos',JSON.stringify(that.pos))
                            that.$emit('confirm')    
                        }
                    })
                }
            }
            
            
            // $.get(`${globalUrl.host}/find/organizeData`, {
            //     id: this.setId
            // }).then(data => {
            //     this.loaddingF = false
            //     sessionStorage.setItem('pos',JSON.stringify(this.pos))
            //     this.$emit('confirm')    
            // });
          
	  },
	  cancel(){
		  this.$emit('cancel')
	  }
  },

}
</script>

