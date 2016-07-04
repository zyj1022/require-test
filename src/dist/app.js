define("component/a", [], function() {
	return {
		a: function() {
			console.log("aaaaaaaaaaaaa")
		}
	}
}), define("component/d", ["require", "component/a"], function(e) {
	return {
		d: function() {
			var t = e("component/a");
			t.a()
		}
	}
}), define("component/b", ["require"], function(e) {
	return {
		b: function() {
			console.log("BBBBBBBBBBB")
		}
	}
}), define("component/ab", ["require", "component/d", "component/b"], function(e) {
	return {
		a: function() {
			var t = e("component/d");
			t.d(), console.log("ab.a()")
		},
		b: function() {
			var t = e("component/b");
			t.b(), console.log("ab.b()")
		}
	}
}), requirejs.config({
	paths: {
		jquery: "lib/jquery",
		"jquery.pin": "lib/jquery.pin",
		"jquery.zclip": "lib/jquery.zclip",
		"pincode-input": "lib/pincode-input",
		laydate: "lib/laydate",
		domReady: "domReady"
	},
	shim: {
		laydate: {
			deps: [],
			exports: "laydate"
		}
	}
}), require(["component/ab"], function(e) {
	e.b()
}), define("app", function() {});
