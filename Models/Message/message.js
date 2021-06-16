//init mui 
mui.init();

// add an event to open the webView Setting
mui.ready(function(){
	
	// 打开获取test的聊天消息界面
	document.getElementById('testtalk').addEventListener('tap',function(){
		mui.openWindow({
			url:'../Chat/chat.html',
			id:'chat'
		});
	});
	
	// 打开获取chentong的聊天消息界面
	document.getElementById('chentongtalk').addEventListener('tap',function(){
		mui.openWindow({
			url:'../Chats/chatchentong.html',
			id:'chatchentong'
		});
	});
	// 打开获取victor的聊天消息界面
	document.getElementById('victortalk').addEventListener('tap',function(){
		mui.openWindow({
			url:'../Chats/chatvictor.html',
			id:'chatvictor'
		});
	});
	
});
