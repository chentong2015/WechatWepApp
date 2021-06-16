//init mui
mui.init();

var ButtonSend=document.getElementById('button-send');
var Emotions=document.getElementById('emotions');
var More=document.getElementById('more');

document.getElementById('MessageInput').addEventListener('input',function(){
	
	//this.value去掉左右的空格,判断字符的长度
	if(this.value.trim().length>0){
		//显示发送按钮出来display !!!!!!!!!
		ButtonSend.style.display='block';
		Emotions.style.display='none';
		More.style.display='none';
	}else{
		ButtonSend.style.display='';
		Emotions.style.display='';
		More.style.display='';
	}
	
});

//为发送按钮添加事件
document.getElementById('button-send').addEventListener('tap',function(){

	var MessageInput=document.getElementById('MessageInput');
	var MessageInputValue=MessageInput.value;
	
	var MessageSend='<div class="chat-box chat-box-right mui-content-padded">'+
			    	'	<img class="chat-person" src="stars.png"/>'+
			    	'	<div class="chat-content">'+
			    	'		<div class="chat-content-text">'+
			    				MessageInputValue+				    		
			    	'		</div>'+
			    	'		<div class="chat-content-arrow"> </div>'+
			    	'	</div>'+
			    	'	<div class="clear-float"> </div>'+
			    	'</div>';
			    	
	//******使用js的DOM方式创建一个页面元素Element *********
	var NewDOM=document.createElement('div');
	//添加到DOM中后使用添加子节点的方式追加appendChild到页面的列表中
	NewDOM.innerHTML=MessageSend;
			    	
	//querySelector获取对话列表的页面
	var MessageList=document.querySelector('.chatlist');
	MessageList.appendChild(NewDOM);
	
	//发送后清空已经注入的文本信息
	MessageInput.value='';
	
	//显示恢复表情和更多按钮
	ButtonSend.style.display='';
	Emotions.style.display='';
	More.style.display='';
			
	//滚动条滑动的总高度 scrollHeight=877; 
	//滚动条滑倒最底部时离最顶部的距离 scrollTop=162; (没有显示出来的高度)
	//list表单显示在屏幕里的可见高度 offsetHeight=715，
	//*** 控制滑动条到最底部 ******
	MessageList.scrollTop=MessageList.scrollHeight-MessageList.offsetHeight;
	
	
	//chentong开始发送消息  >> victor
	//chentong用自己的名字作为 clientId，获取 IMClient 对象实例
	realtime.createIMClient('chentong').then(function(chentong) {
	  // 创建与victor之间的对话
	  return chentong.createConversation({
	    members: ['victor'],
	    name: 'chentong chat with victor',
	  });
	}).then(function(conversation) {
	  // MessageInputValue发送消息开始
	  return conversation.send(new AV.TextMessage(MessageInputValue));
	}).then(function(message) {
	  console.log('chentong send messqge to victor', 'SUCCESS');
	}).catch(console.error);

});


//初始化实时通讯 SDK 
//在浏览器中直接加载时，SDK 暴露的所有的成员都挂载在 AV 命名空间下:
var Realtime = AV.Realtime;
var TextMessage = AV.TextMessage;

//初始化一个 realtime 实例
var realtime = new Realtime({
  appId: 'BMNgTYlv4407WaF7eFluNioq-gzGzoHsz',
  region: 'cn', //美国节点为 "us"
});	


// chen tong 登录, 实时监听victor发送的消息 !!!!!!!
realtime.createIMClient('chentong').then(function(chentong) {
  chentong.on('message', function(message, conversation) {
    console.log('Message received: ' + message.text);
    //chentong显示收到victor消息的值message.text, 收到的消息放到左侧left
    var MessageSend='<div class="chat-box chat-box-left mui-content-padded">'+
			    	'	<img class="chat-person" src="star.png"/>'+
			    	'	<div class="chat-content">'+
			    	'		<div class="chat-content-text">'+
			    				message.text+				    		
			    	'		</div>'+
			    	'		<div class="chat-content-arrow"> </div>'+
			    	'	</div>'+
			    	'	<div class="clear-float"> </div>'+
			    	'</div>';
			    	
	//******使用js的DOM方式创建一个页面元素Element *********
	var NewDOM=document.createElement('div');
	//添加到DOM中后使用添加子节点的方式追加appendChild到页面的列表中
	NewDOM.innerHTML=MessageSend;
			    	
	//querySelector获取对话列表的页面
	var MessageList=document.querySelector('.chatlist');
	MessageList.appendChild(NewDOM); 
	
	//*** 控制滑动条到最底部 ******
	MessageList.scrollTop=MessageList.scrollHeight-MessageList.offsetHeight;
    
  });
}).catch(console.error);



/*
//为more发送图片按钮添加事件
document.getElementById('more').addEventListener('tap',function(){
	//把 URL 包装在消息体内发送出去
	alert('send photo');	
	//var file = new AV.File.withURL('Girl', 'http://pic2.zhimg.com/6c10e6053c739ed0ce676a0aff15cf1c.gif');
	var file = new AV.File.withURL('Person', 'person.png');
	file.save().then(function() {
	  var message = new AV.ImageMessage(file);
	  message.setText('Wow');	   
	  //发送由URL链接的图片到对话列表中
	  var PhotoSend='<div class="chat-box chat-box-right mui-content-padded">'+
			    	'	<img class="chat-person" src="stars.png"/>'+
			    	'	<div class="chat-content">'+
			    	'		<div class="chat-content-text">'+
			    				message+				    		
			    	'		</div>'+
			    	'		<div class="chat-content-arrow"> </div>'+
			    	'	</div>'+
			    	'	<div class="clear-float"> </div>'+
			    	'</div>';
			    	
	//******使用js的DOM方式创建一个页面元素Element *********
	var NewDOM=document.createElement('div');
	//添加到DOM中后使用添加子节点的方式追加appendChild到页面的列表中
	NewDOM.innerHTML=PhotoSend;		    	
	//querySelector获取对话列表的页面
	var MessageList=document.querySelector('.chatlist');
	MessageList.appendChild(NewDOM); 
	  return conversation.send(message);
	}).then(function() {
	  console.log('Success');
	}).catch(console.error.bind(console));
});

//为more发送图片按钮添加事件
document.getElementById('more').addEventListener('tap',function(){
	//把 URL 包装在消息体内发送出去
	alert('send photo');
	//用浏览器提供的 API 去获取本地的照片，然后构造出 ImageMessage 来发送：
	var fileUploadControl = $('#photoFileUpload')[0];
	var file = new AV.File('avatar.jpg', fileUploadControl.files[0]);
	file.save().then(function() {
	  var message = new AV.ImageMessage(file);
	  message.setText('发自我的小米');
	  message.setAttributes({ location: '旧金山' });
	  return conversation.send(message);
	}).then(function() {
	  console.log('发送成功');
	}).catch(console.error.bind(console));
});

*/
