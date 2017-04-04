(function(){
	var app = angular.module('store', []);

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'aliquid, amet molestiae veritatis odio quos repudiandae!'
	}

	app.controller('StoreController', function(){
		this.product = gem; 
	});
})();
