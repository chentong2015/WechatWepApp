//init mui
mui.init();

var ButtonSend=document.getElementById('button-send');

//为发送按钮button-send添加事件
document.getElementById('button-send').addEventListener('tap',function(){
	var MessageInput=document.getElementById('MessageInput');
	var MessageInputValue=MessageInput.value;		
	var NewsSend='<div class="mui-card">'+
	             '	<div class="mui-card-header mui-card-media">'+
				 '		<img src="person.png" />'+
				 '		<div class="mui-media-body">'+
				 '			CHEN Tong '+
				 '			<p> 2017-01-02 15:30 </p>'+
				 '		</div>'+
				 '	</div>'+
				 '	<p>&nbsp;&nbsp;'+ 
				      MessageInputValue+
				 '  </p>'+
				 '	<div class="mui-card-content" >'+
				 '		<img src="world.png" alt="" width="100%"/>'+
				 '	</div> '+
				 '	<div class="mui-card-footer">'+
				 '		<a class="mui-card-link">Like</a>'+
				 '		<a class="mui-card-link">Comment</a>'+
				 '		<a class="mui-card-link">Read more</a>'+
				 '	</div>'+
				 '</div>';
				
	//******使用js的DOM方式创建一个页面元素Element *********
	var NewDOM=document.createElement('div');
	//添加到DOM中后使用添加子节点的方式追加appendChild到页面的列表中
	NewDOM.innerHTML=NewsSend;
    alert("Add news : SUCCESS !");
	//querySelector获取对话列表的页面
	var NewsList=document.querySelector('.newslist');
	NewsList.appendChild(NewDOM);
	
	//发送后清空已经注入的文本信息
	MessageInput.value='';
	//*** 控制滑动条到最底部 ******
	//MessageList.scrollTop=MessageList.scrollHeight-MessageList.offsetHeight;

});