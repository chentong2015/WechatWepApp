//init mui
mui.init();

/*  ????????????????????
 * 可以使用用户文本框输入的形式 获取自己的签名等信息
 * 
//获取到APP的首页面Login的输入信息username
var loginUser;
mui.later(function(){
	loginUser=plus.webview.getLaunchWebview();
},2000);
*/

//使用Ajax发送一个 GET 请求到 URL 以获取用户的账户信息，返回的内容就是当创建用户时返回的内容
document.addEventListener('showuser',function(){ 
	 //注意填写用户名的对象ID : objectID必须一一对应users/584c8ade128fe10058a74c87
	 mui.ajax({
	    url:'https://api.leancloud.cn/1.1/users/584c8ade128fe10058a74c87',
	    type:'get',
	    headers:{
	    	'X-LC-Id':'BMNgTYlv4407WaF7eFluNioq-gzGzoHsz',
	    	'X-LC-Key':'m3obSfYRLPRGFUnwvybaY03g'
	    },
	    success:function(resp){
	    	//获取用户的账户信息后,添加到用户名所在的区域
	    	document.getElementById("user").innerHTML = resp.username;
	    },
	    error:function(error){
	    	document.getElementById("user").innerHTML = "USERNAME"; 
	    }  	    
	});
});

// add an event to open the webView Setting
mui.ready(function(){
	document.getElementById('setting').addEventListener('tap',function(){
		mui.openWindow({
			url:'../Setting/setting.html',
			id:'setting'
		});
	});
});


// add an event to open the webView Photos
mui.ready(function(){
	document.getElementById('photo').addEventListener('tap',function(){
		mui.openWindow({
			url:'../Photo/photo.html',
			id:'photo'
		});
	});
});


// add an event to open the webView Video
mui.ready(function(){
	document.getElementById('video').addEventListener('tap',function(){
		mui.openWindow({
			url:'../Video/video.html',
			id:'video'
		});
	});
});


// add an event to open the webView Audio
mui.ready(function(){
	document.getElementById('audio').addEventListener('tap',function(){
		mui.openWindow({
			url:'../Audio/audio.html',
			id:'audio'
		});
	});
});


