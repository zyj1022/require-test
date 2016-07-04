define(function(require) {

	var testA = require('component/a');

	function dev() {
		console.log('dev is ready!')
	}

	return {
		dev: dev
	};
});
