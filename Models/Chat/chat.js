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

//为发送按钮添加事件 event
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

});