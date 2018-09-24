(function() {
	var links = document.getElementsByTagName('link');
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		if (link.rel.toLowerCase().match(/stylesheet/) && link.href) {
			var href = link.href.replace(/(&|%5C?)forceReload=\d+/, '');
			link.href = href + (href.match(/\?/) ? '&' : '?') + 'forceReload=' + (new Date().valueOf())
		}
	}
})()
