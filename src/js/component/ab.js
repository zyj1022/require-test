define(function(require) {
	return {
		a: function() {
			var d = require('component/d');
			d.d()
			console.log("ab.a()");
		},
		b: function() {
			var b = require('component/b');
			b.b();
			console.log("ab.b()");
		}
	}
});
