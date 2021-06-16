//init mui
mui.init();

//个人的动态圈 记录消息和新闻
document.getElementById('news').addEventListener('tap',function(){
	mui.openWindow({
		url:'../News/news.html',
		id:'news'
	});
});

//扫一扫功能SCAN
document.getElementById('scan').addEventListener('tap',function(){
	mui.openWindow({
		url:'../Scan/scan.html',
		id:'scan'
	});
});

//摇一摇功能Shake
document.getElementById('shake').addEventListener('tap',function(){
	mui.openWindow({
		url:'../Shake/shake.html',
		id:'shake'
	});
});

//购物的Facebook页面
document.getElementById('facebook').addEventListener('tap',function(){
	mui.openWindow({
		url:'https://www.facebook.com/',
		id:'facebook'
	});
});

//购物的链接页面
document.getElementById('shopping').addEventListener('tap',function(){
	mui.openWindow({
		url:'https://www.amazon.fr/',
		id:'shopping'
	});
});

/*
//手游的链接页面
document.getElementById('game').addEventListener('tap',function(){
	mui.openWindow({
		url:'',
		id:'game'
	});
});
*/
