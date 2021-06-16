//init mui
mui.init();

/*
 * 
 * //所有调用的HTML5+的代码都要写在onPlusReady里面
var r = null; 
var p = null; 

// 扩展API加载完毕，现在可以正常调用扩展API 
function onPlusReady(){
	r = plus.audio.getRecorder(); 

	//Start Record !!
	document.getElementById('startRecorder').addEventListener('tap',function(){
		if ( r == null ) {
		alert( "Device not ready!" );
		return; 
		} 
		r.record( {filename:"_doc/audio/"}, function () {
			alert( "Audio record success!" );
		}, function ( e ) {
			alert( "Audio record failed: " + e.message );
		} );
	});
	//Stop Record !!
	document.getElementById('stopRecorder').addEventListener('tap',function(){
		r.stop();  
	});
		
	//Start play music
	document.getElementById('startPlay').addEventListener('tap',function(){
		if ( plus.audio == undefined ) {
			alert( "Device not ready!" );
		}
		//p = plus.audio.createPlayer( "_Doc/Audio/test.mp3" );
		p=plus.audio.createPlayer( "_www/Models/Audio/Snow.mp3" );
		//p = plus.audio.createPlayer( "_www/Audio/happy.mp3" );
		p.play( function () {
			alert( "Audio play success!" ); 
		}, function ( e ) {
			alert( "Audio play error: " + e.message ); 
		} ); 
	});
	
	//Pause Play music
	document.getElementById('pausePlay').addEventListener('tap',function(){
		p.pause();
	});
	
	//Stop play music
	document.getElementById('stopPlay').addEventListener('tap',function(){
		p.stop();  
	});
	
}

 * 
 * 
 * 
 */
