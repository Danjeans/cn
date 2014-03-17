function getParamsOfShareWindow(width, height) {
	return ['toolbar=0,status=0,resizable=1,width=' + width + ',height=' + height + ',left=',(screen.width-width)/2,',top=',(screen.height-height)/2].join('');
}
 
function bindShareList() {
	var link = encodeURIComponent(document.location); // 文章链接
	var title = encodeURIComponent(document.title.substring(0,76)); // 文章标题
	var source = encodeURIComponent('网站名称'); // 网站名称
	var windowName = 'share'; // 子窗口别称
	var site = 'http://www.example.com/'; // 网站链接
 
	jQuery('#facebook-share').click(function() {
		var url = 'http://facebook.com/share.php?u=' + link + '&t=' + title;
		var params = getParamsOfShareWindow(626, 436);
		window.open(url, windowName, params);
	});
 
	jQuery('#twitter-share').click(function() {
		var url = 'http://twitter.com/share?url=' + link + '&text=' + title;
		var params = getParamsOfShareWindow(500, 375);
		window.open(url, windowName, params);
	});
 
	jQuery('#delicious-share').click(function() {
		var url = 'http://delicious.com/post?url=' + link + '&title=' + title;
		var params = getParamsOfShareWindow(550, 550);
		window.open(url, windowName, params);
	});
 
	jQuery('#kaixin001-share').click(function() {
		var url = 'http://www.kaixin001.com/repaste/share.php?rurl=' + link + '&rcontent=' + link + '&rtitle=' + title;
		var params = getParamsOfShareWindow(540, 342);
		window.open(url, windowName, params);
	});
 
	jQuery('#renren-share').click(function() {
		var url = 'http://share.renren.com/share/buttonshare?link=' + link + '&title=' + title;
		var params = getParamsOfShareWindow(626, 436);
		window.open(url, windowName, params);
	});
 
	jQuery('#douban-share').click(function() {
		var url = 'http://www.douban.com/recommend/?url=' + link + '&title=' + title;
		var params = getParamsOfShareWindow(450, 350);
		window.open(url, windowName, params);
	});
 
	jQuery('#sina-share').click(function() {
		var url = 'http://v.t.sina.com.cn/share/share.php?url=' + link + '&title=' + title;
		var params = getParamsOfShareWindow(607, 523);
		window.open(url, windowName, params);
	});
 
	jQuery('#netease-share').click(function() {
		var url = 'http://t.163.com/article/user/checkLogin.do?link=' + link + 'source=' + source + '&info='+ title + ' ' + link;
		var params = getParamsOfShareWindow(642, 468);
		window.open(url, windowName, params);
	});
 
	jQuery('#tencent-share').click(function() {
		var url = 'http://v.t.qq.com/share/share.php?title=' + title + '&url=' + link + '&site=' + site;
		var params = getParamsOfShareWindow(634, 668);
		window.open(url, windowName, params);
	});
}
