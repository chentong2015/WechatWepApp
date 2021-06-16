//init mui
mui.init();

//fcuntion : barcode ==> plus.barcode.scan()
//plusReady()获取底层事件的方法,调用html5+的API
var scan;

mui.plusReady(function(){
	//创建码扫描控件  QR : valeur constant	
	scan= new plus.barcode.Barcode(
		'bcode',
		[ plus.barcode.QR,plus.barcode.AZTEC ]
	);	
	// scan.onmarked = function (type, code, file);	
	scan.start(); // start scan
	scan.setFlash(open); //可以开启扫瞄时候的闪光灯
});

//跳转到拍照的页面
document.getElementById('button-camera').addEventListener('tap',function(){
	scan.cancel();
	mui.openWindow({
		url:'../Camera/camera.html',
		id:'camera'
	});
});
