(function(){

	var controller = {
		init:function () {
			router.init();
		}
	}


	var router = {
		init: function () {
			routie({
	    		'about': function() {
	    			console.log('go to about page');
	    		},
	    		'movies': function() {
	    			console.log('Go to movies page');
	    		}
			});
		}
	};
	controller.init();
}());