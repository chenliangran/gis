
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.login-big{
    width: 100%;
    height: 100%;
    background: url(../../assets/login/login_bg.jpg) no-repeat!important;
	background-size: 100% 100%!important;
    position: fixed;
    z-index: 100000000;
    min-height: 650px;
    min-width: 1000px;
}
.login-msg-big{
    width: 35%;
    height: 35%;
    /* border: 1px solid red; */
    position: absolute;
    left:45%;
    top:28%
}
.login-tilte{
    width: 100%;
    height: 26%;
    background: url(../../assets/login/反潜任务复盘软件.png) no-repeat!important;
	background-size: 100% 100%!important;
}
.login-msg{
    
    margin-top: 6%;
    
}
.login-msg li{
    position: relative;
    margin: auto;
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 15px 0;
    /* height: 10%; */
}
.login-input{

    width: 50%;
    pointer-events: all;
    background: url(../../assets/login/input_normal.png) no-repeat!important;
	background-size: 100% 100%!important;
    padding-left: 50px;
    outline:none;
    color: #8efffb;
    border: none;
    height: 32px;

}
.login-user-icon{
    width: 20px;
    height: 20px;
    position: absolute;
    background: url(../../assets/login/用户.png) no-repeat!important;
	background-size: 100% 100%!important;
    left:23%;
    top:6px;

    /* border-right:1px solid #8efffb */

}
.login-pass-icon{
    width: 20px;
    height: 20px;
    position: absolute;
    background: url(../../assets/login/密码.png) no-repeat!important;
	background-size: 100% 100%!important;
    left:23%;
    top:6px;
}
.login-pass-check i{
	display: flex;
    margin-right: 10px;
	justify-content: center;
	align-items: center;
	/* border-radius: 12px; */
	width: 12px;
	height: 12px;
	font-size: 12px;
	border: 1px solid #8efffb;
	color: #8efffb;
	/* position: absolute;
	top: 2px;
	left: -18px; */
	cursor: pointer;
}
.login-pass-check {
    display: flex;

    align-items: center
}
.login-pass-check span{
    color: #c5c5c5;
    font-size: 14px
}
.login-start{
    width: calc(50% + 54px) ;
	height: 35px;
	background: url(../../assets/login/login.png) no-repeat!important;
	background-size: 100% 100%!important;
	display: flex;
	font-size: 14px;
	justify-content: center;
	align-items: center;
	color:#8efffb;
	margin: 0 10px;
	cursor: pointer;

}
</style>

<template>
  <div class="login-big">
      <div class="login-msg-big">
          <div class="login-tilte"></div>
          <ul class="login-msg">
              <li>
                  <div class="login-user-icon"></div>
                  <input class="login-input" @keydown="iptKD($event)" placeholder="用户名" type='text'  v-model="login.name"/>
              </li>
              <li>
                  <div class="login-pass-icon"></div>
                  <input class="login-input" @keydown="iptKD($event)" placeholder="密码" type='password' v-model="login.password"/>
              </li>
              <li>
                  <div class="login-pass-check" style="width:50%">
                      <i ></i>
                      <span>记住密码</span>
                      <span style='color:red;margin-left:10px'>{{msg}}</span>
                  </div>
                  
              </li>
              <li>
                  <div class="login-start" @click='loginStart'>登录</div>
                  
              </li>
          </ul>
      </div>
    
    
  </div>
</template>

<script>



export default {
    
  name: 'login',

  data:function(){

      return {
          msg:'',
		  login:{
              name:'',
              password:''
          }
      }    
  },

  props: {
   
  },

  mounted() {
      $(".login-pass-check i").click((e) => {

		  if($(e.target).html()){
			  $(e.target).html('')
			//   delete this.eventData[$(e.target).data('type')]
		  }else{
			//   this.eventData[$(e.target).data('type')] = ''
			  $(e.target).html('✔')
		  }
      })

    this.getIPs(function (ip) { alert(ip); });

  },

  methods: {
      iptKD(e){
          if(e.code=='Enter')this.loginStart()
      },
	  loginStart(){
        $.get(`${globalUrl.host}/find/findUserNameAndPassWord`, {}).then(data => {
            if(this.login.name == data.userNmae){
                if(this.login.password == data.passWord){
                    this.$emit('login')   
                    sessionStorage.setItem('user',JSON.stringify(this.login))
                    let id = sessionStorage.getItem("selectEd")
                    let ptData = JSON.parse(sessionStorage.getItem("ptData"))
                    ptData.map(item => {
                        if(item.id == id) {
                            this.jiaciName = item.ptmc.slice(-7,-2)
                        }
                    })
                }else{
                    this.msg = '密码错误'    
                }
            }else{
                this.msg = '用户名错误'
            }
        });
        
		  
      },
    getIPs(callback) {
        var ip_dups = {};
 
        //compatibility for firefox and chrome
        var RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
        var useWebKit = !!window.webkitRTCPeerConnection;
 
        //bypass naive webrtc blocking using an iframe
        if (!RTCPeerConnection) {
            //NOTE: you need to have an iframe in the page right above the script tag
            //
            //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
            //<script>...getIPs called in here...
            //
            var win = iframe.contentWindow;
            RTCPeerConnection = win.RTCPeerConnection
            || win.mozRTCPeerConnection
            || win.webkitRTCPeerConnection;
            useWebKit = !!win.webkitRTCPeerConnection;
        }
 
        //minimal requirements for data connection
        var mediaConstraints = {
            optional: [{ RtpDataChannels: true}]
        };
 
        var servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com"}] };
 
        //construct a new RTCPeerConnection
        var pc = new RTCPeerConnection(servers, mediaConstraints);
 
        function handleCandidate(candidate) {
            //match just the IP address
            var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
            var ip_addr = ip_regex.exec(candidate)[1];
 
            //remove duplicates
            if (ip_dups[ip_addr] === undefined)
                callback(ip_addr);
 
            ip_dups[ip_addr] = true;
        }
 
        //listen for candidate events
        pc.onicecandidate = function (ice) {
 
            //skip non-candidate events
            if (ice.candidate)
                handleCandidate(ice.candidate.candidate);
        };
 
        //create a bogus data channel
        pc.createDataChannel("");
 
        //create an offer sdp
        pc.createOffer(function (result) {
 
            //trigger the stun server request
            pc.setLocalDescription(result, function () { }, function () { });
 
        }, function () { });
 
        //wait for a while to let everything done
        setTimeout(function () {
            //read candidate info from local description
            console.log(pc.localDescription)
            // var lines = pc.localDescription.sdp.split('\n');
 
            // lines.forEach(function (line) {
            //     if (line.indexOf('a=candidate:') === 0)
            //         handleCandidate(line);
            // });
        }, 1000);
    }





  },

}
</script>

