document.write("<script language=javascript src='../../common/js/TimUtil.js'></script>");
window.RequestApi = {
	requestSingleApi: function(url, data, success) {
		window.TimUtil.postJson(url, data, function(data) {
			if(success) success(data)
		}) 
	}
}
