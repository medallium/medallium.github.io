(function (window) {
	var doc = window.document,
		body = doc.body,
		stageScale = body.clientWidth / 640,
		fontSize = stageScale * 30;
	// device check for fontSize
	var isAndroid = /Android .*;\s*(.*)\sBuild/.exec(navigator.userAgent);
	if ( isAndroid !== null && isAndroid[1] === 'Galaxy Nexus') {
		fontSize /= stageScale;
	}

	// for iPad
	if ( navigator.userAgent.indexOf('iPad') != -1 ) {
		stageScale = 1;
	}
	else if(navigator.userAgent.indexOf('Android') != -1){
		stageScale = screen.width / 640;
	}
	var pageHeight = Math.max(960, window.innerHeight / stageScale);

	// set Style.
	if(navigator.userAgent.indexOf('Android') != -1){
		// set Style.
		doc.write( '<style>' +
			'html{zoom:1;font-size:30px;}' +
			'body{font-size:'+ stageScale*100 +'%;}' +
			'.page{height:'+ pageHeight +'px;}' +
			'</style>' )
		;
	}else{
		if ( navigator.userAgent.indexOf('iPad') != -1 ) {
			// set Style.
			doc.write( '<style>' +
				'html{zoom:'+ stageScale +';font-size:30px;}' +
				'body{font-size:'+ stageScale*100 +'%;}' +
				'table{font-size:'+ stageScale*100 +'%;}' +
				'.page{height:'+ pageHeight +'px;}' +
				'</style>' )
			;
		}else{
			// set Style.
			doc.write( '<style>' +
				'html{zoom:'+ stageScale +';font-size:30px;}' +
				'body{font-size:'+ stageScale*100 +'%;}' +
				'.page{height:'+ pageHeight +'px;}' +
				'</style>' )
			;
		}
	}

	// set Global variable.
	window.stageScale = stageScale;
	window.fontSize = fontSize;
	window.pageHeight = pageHeight;
})(window);