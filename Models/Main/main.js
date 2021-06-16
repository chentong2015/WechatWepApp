mui.init();

//在创建webView之前 必须先等到 API加载完毕之后, plusReady才可以正常的使用扩展的API
mui.plusReady(function(){
	
	// Get The main WebView current
	var parentWebView=plus.webview.currentWebview();	
	
	// create four webView in the List
	var pageList=[
	   {
	   	url:'../Message/message.html',
	   	id:'message'
	   },
	   {
	   	url:'../AdressBook/adress.html',
	   	id:'adress'
	   },
	   {
	   	url:'../Discover/discover.html',
	   	id:'discover'
	   },
	   {
	   	url:'../my/my.html',
	   	id:'my'
	   }	   
	];
	
	for ( var i=0, l=pageList.length; i< l; i++){
		var url=pageList[i].url;
		var id=pageList[i].id;
		console.info(url+"--------"+id);
		
		// check the same WebView
		if(plus.webview.getWebviewById(id)){
			continue;
		}
		
		//在创建新的webview时设置属性,并在之后添加到parent vebview中
		//Style: 设置底边距, 取消侧边栏滑动返回的功能
		var NewWebView=plus.webview.create(url,id,{
			bottom:'50px',
			top:'0px',
			popGesture:'none'
		});
		
		//Set status of WebView
		//i===0?NewWebView.show():NewWebView.hide();
		if ( i==0 ){
			NewWebView.show();		
		}else{
			NewWebView.hide();
		}		
		//新的webview添加到parent vebview中,同时显示在各自的位置上
		parentWebView.append(NewWebView);		
	}
	
	//默认显示的子页面id,之后会随着点击切换
	var showWebView='message';
	
	//使用mui的事件代理,addEventListener()原生的js方法,经过mui封装成 ON()方法
	mui('.mui-bar').on('tap','.mui-tab-item',function(e){
		//mui.alert('Click me');
		
		//判断是否点击的是同一个子页面 
		if (showWebView===this.dataset.id){	return; }		    		
		//hide the old WebView
		plus.webview.getWebviewById(showWebView).hide();
				
		//get the id of the WebView, show the new WebView ( click )
		//console.info(this.dataset.id);  
		var curentShowWebView=plus.webview.getWebviewById(this.dataset.id);
		curentShowWebView.show('none',0,function(){
			//在点击这个webviexw时候显示   并触发其中的点击事件
			//触发函数 触发的WebView对象 与 对象中的事件
			mui.fire(curentShowWebView,'showpage');
			mui.fire(curentShowWebView,'showuser');
		});
		
		//更新当前显示的子页面的id
		showWebView=this.dataset.id;	
	});
	
});
