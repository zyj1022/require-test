define(function(require) {

	var testA = require('component/a');

	function fe() {
		console.log('fe is ready!')
	}

	return {
		fe: fe
	};
});
