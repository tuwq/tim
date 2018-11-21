document.write("<script language=javascript src='../../common/js/TimUtil.js'></script>");
window.FindApi = {
	findSingleApi: function(data, success) {
		window.TimUtil.getJson('/find/single/list', data, function(data) {
			if(success) success(data)
		}) 
	},
	findUserDetailByIdApi: function(data, success) {
		window.TimUtil.getJson('/find/single/id', data, function(data) {
			if(success) success(data)
		})
	},
	findUserDetailByQQNumberApi: function(data, success) {
		window.TimUtil.getJson('/find/single/qqNumber', data, function(data) {
			if(success) success(data)
		})
	}
}
