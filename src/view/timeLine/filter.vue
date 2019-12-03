
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.event-filter{
	/* width: 400px;
	height: 250px;
	background: url(../../assets/icon/事件过滤bg.png) no-repeat!important;
	background-size: 100% 100%!important; */
	position: fixed;
	z-index: 1000;
	bottom: 28px;
    left: 55%;

}
.event-filter-big{
	width: 300px;
	margin: auto;
	/* margin-top: 90px; */
}
.event-filter-checkbox-div{
	display: flex;
	justify-content: space-around;

	align-items: center
}
.event-filter-checkbox-div p{
	color: #ffffff;
	font-size: 12px;
	position: relative;
	
}
.event-filter-checkbox{
	display: none
}
.event-filter-checkbox[type=checkbox]+span {
	display: flex;
	justify-content: center;
	align-items: center;
	/* border-radius: 12px; */
	width: 12px;
	height: 12px;
	font-size: 12px;
	border: 1px solid #8efffb;
	color: #8efffb;
	position: absolute;
	top: 2px;
	left: -18px;
	cursor: pointer;
}
.event-filter-bottom-div{
	margin-top: 20px;
	display: flex;
	justify-content: flex-end;
}
.event-filter-bottom-div div{
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
/* .event-filter-checkbox[type=checkbox]:checked+span:after {
	content: '454';
	position: absolute;
	font-size: 12px;
	left: 1px;
} */
.title{
	color: #83efe6;
	font-size: 14px;
}
</style>

<template>
  <div class="event-filter">
      
    <div class="event-filter-big">
		
		<div class='event-filter-checkbox-div'>
            <div class="title"><span>事件类型：</span></div>
			<p><input class="event-filter-checkbox" type="checkbox" name="item"><span data-type='浮标投放'>✔</span><label>浮标投放</label></p>
            <p><input class="event-filter-checkbox" type="checkbox" name="item"><span data-type='目标探测'>✔</span><label>目标探测</label></p>
            <p><input class="event-filter-checkbox" type="checkbox" name="item"><span data-type='手动事件'>✔</span><label>手动事件</label></p>
		</div>
		<!-- <div class='event-filter-bottom-div'>
			<div @click='confirm'>确定</div>
			<div @click='cancel'>取消</div>
		</div> -->
	</div>
    
  </div>
</template>

<script>



let socketController = null;


export default {

  name: 'Time',

  data:function(){

      return {
		  eventData:{
			  '浮标投放':'',
			  '目标探测':'',
			  '手动事件':'',
		  }
      }    
  },

  props: {
    msg: String
  },

  mounted() {
	  $(".event-filter-checkbox[type=checkbox]+span").click((e) => {
		  if($(e.target).html()){
				$(e.target).html('')
				delete this.eventData[$(e.target).data('type')]
				// this.$emit('cancel')
				this.$emit('confirm',Object.keys(this.eventData))
		  }else{
			  	this.eventData[$(e.target).data('type')] = ''
			 	$(e.target).html('✔')
				this.$emit('confirm',Object.keys(this.eventData))
		  }
	  })
  },

  methods: {
	  confirm(){
		  this.$emit('confirm',Object.keys(this.eventData))
		  
	  },
	  cancel(){
		  this.$emit('cancel',Object.keys(this.eventData))
	  }



  },

}
</script>

