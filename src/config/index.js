// const log = weex.requireModule('log')
// var pageJS = weex.config.bundleUrl
// pageJS = pageJS.substring(pageJS.lastIndexOf('/') + 1)
// log.event(pageJS,pageJS)
/**
 * 展示内容等级： 1 普通， 2，17+
 * */
let level = 1;
module.exports = {
	level:level,
	js(jsURL) {
		var bundleUrl = weex.config.bundleUrl;
		var baseURL = bundleUrl.substring(0, bundleUrl.lastIndexOf("/") + 1)
		return baseURL + jsURL
		
		// var bundleUrl = weex.config.bundleUrl;
		// var baseURL = bundleUrl.substring(0, bundleUrl.lastIndexOf("/") + 1)
		// baseURL = baseURL.replace('localhost', '192.168.16.208');
		// return baseURL + 'dist/native/' + jsURL
	},
	image(imgURL) {
//		return "http://192.168.1.5:12580/resources/" + imgURL;
		return "http://images-file.oss-cn-hangzhou.aliyuncs.com/weex/jandan/1.0.2/resources/" + imgURL;
	},
	params(key) {
		var bundleUrl = weex.config.bundleUrl;
		var reg = new RegExp('[?|&]' + key + '=([^&]+)')
		var match = bundleUrl.match(reg)
		return match && match[1]
	},
	toParams(obj) {
		var param = ""
		for(const name in obj) {
			if(typeof obj[name] != 'function') {
				param += "&" + name + "=" + encodeURI(obj[name])
			}
		}
		return param.substring(1)
	},
	barHeight(){
		if (weex.config.env.platform == 'android') {
			return 98
		}
		return 128
	}
}