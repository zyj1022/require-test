requirejs.config({
	// baseUrl: _ctx_ + '/js/',
	//urlArgs: 'bust=' + (new Date()).getTime(),
	paths: {
		'jquery': 'lib/jquery',
		'domReady': 'lib/domReady'
	},
	// 第三方
	shim: {
		'laydate': {
			deps: [],
			exports: 'laydate'
		}
	}
});

require(['component/ab'], function(ab) {
	ab.b();
	//ab.a();
});
