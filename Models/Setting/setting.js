//init mui
mui.init();

//退出时显示退出界面,获取到APP的首页面Login
var loginWebView;
mui.later(function(){
	loginWebView=plus.webview.getLaunchWebview();
},2000);


mui('body').on('tap', '.mui-popover-action li>a', function() {
	var a = this,
		parent;
	//根据点击按钮，反推当前是哪个actionsheet
	for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
		if (parent.classList.contains('mui-popover-action')) {
			break;
		}
	}
	//关闭actionsheet
	mui('#' + parent.id).popover('toggle');
	//alert("你刚点击了\"" + a.innerHTML + "\"按钮");
	
	//确定点击的id按钮==a.id
	if(a.id==='loginout'){
		//退回到显示登陆的页面上
		loginWebView.show();
		
		//清空本地的一些数据存储 
		localStorage.removeItem('sessionToken');
    	localStorage.removeItem('username');
   	
    	//销毁掉所有已经创建的WebView页面 chrome://inspect/
    	//关闭所有的界面 父子界面的关系 只需关闭父界面WebView
    	plus.webview.close('main','none');
    	plus.webview.close('setting','none');
    	
	}
})