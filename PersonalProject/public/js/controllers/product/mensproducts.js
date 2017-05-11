NikeApp.controller('MensProdController',['$scope','NikeService','$stateParams', function($scope, NikeService, $stateParams){

/////////////////
//NikeMensShoes//
////////////////


//Add TO Cart
// $scope.buyProduct = function(product = $scope.id){
// 	NikeService.buyProduct(id).then(function(response){
//
// 	});
// };

// $scope.getCart = (user_id = $scope.user) => {
// 	$scope.subtotal = 0;
// 	storSrvc.getCart(user_id).then((response) => {
// 		$scope.userCart = response;
// 		// response.map(v=>{
// 		// 	v.total = v.quantity * v.product_price
// 		// 	$scope.subtotal += v.total;
// 		// 	return v;
// 		})
// 	})
// }

//All Shoes
	$scope.getNikeMAShoes = function(){
		var promise = NikeService.getNikeMAShoes();
		return promise.then(function(result){
			$scope.NikeMAShoes = result;
			$scope.singleItem = $scope.NikeMAShoes.filter(function(data){
				return data.product_id === parseInt($stateParams.id);
			});
		});
	};
	$scope.getNikeMAShoes()

//LifeStyle
	$scope.getNikeMLSShoes = function(){
		var promise = NikeService.getNikeMLSShoes();
		return promise.then(function(result){
			$scope.LSShoes = result;
			console.log($scope.LSShoes);
		})
	}();



//Running
	$scope.getNikeMRnShoes = function(){
		var promise = NikeService.getNikeMRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
		})
	}();

//Basketball
	$scope.getNikeMBShoes = function(){
		var promise = NikeService.getNikeMBShoes();
		return promise.then(function(result){
			$scope.BShoes = result;
		})
	}();

//Soccer
	$scope.getNikeMSShoes = function(){
		var promise = NikeService.getNikeMSShoes();
		return promise.then(function(result){
			$scope.SShoes = result;
		})
	}();

	//Traning And Gym
	$scope.getNikeMGTShoes = function(){
		var promise = NikeService.getNikeMTGShoes();
		return promise.then(function(result){
			$scope.GTShoes = result;
		})
	}()


	var combo = function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].img = b[i].img
		}
	}


	function getUser() {
	    NikeService.getUser().then(function(user) {
	      console.log('USER DATA',user);
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  };

		getUser();
}]);
