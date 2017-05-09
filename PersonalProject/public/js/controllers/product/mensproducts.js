NikeApp.controller('MensProdController',['$scope','NikeService','$stateParams', function($scope, NikeService, $stateParams){

/////////////////
//NikeMensShoes//
////////////////

//Add TO Cart
$scope.buyProduct = function(product = $scope.id){
	NikeService.buyProduct(id).then(function(response){

	});
};

$scope.getCart = (user_id = $scope.user) => {
	$scope.subtotal = 0;
	storSrvc.getCart(user_id).then((response) => {
		$scope.userCart = response;
		// response.map(v=>{
		// 	v.total = v.quantity * v.product_price
		// 	$scope.subtotal += v.total;
		// 	return v;
		})
	})
}

//All Shoes
	$scope.AllMNikePics = NikeService.AllMNikePics;
	$scope.getNikeMAShoes = function(){
		var promise = NikeService.getNikeMAShoes();
		return promise.then(function(result){
			$scope.NikeMAShoes = result;
			combo($scope.NikeMAShoes, $scope.AllMNikePics);
			$scope.singleItem = $scope.NikeMAShoes.filter(function(data){
				return data.id === parseInt($stateParams.id);
			});
			console.log($scope.NikeMAShoes);
		});
	}();

//LifeStyle
	$scope.NikeMLSPics = NikeService.MLSPics;
	$scope.LSLength = $scope.NikeMLSPics.length;
	$scope.getNikeMLSShoes = function(){
		var promise = NikeService.getNikeMLSShoes();
		return promise.then(function(result){
			$scope.LSShoes = result;
			combo($scope.LSShoes, $scope.NikeMLSPics);
		})
	}();



//Running
	$scope.NikeMRnPics = NikeService.NikeMenRnPics;
	$scope.RnLength = $scope.NikeMRnPics.length;
	$scope.getNikeMRnShoes = function(){
		var promise = NikeService.getNikeMRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
			combo($scope.RnShoes, $scope.NikeMRnPics);
		})
	}();

//Basketball
	$scope.NikeMBPics = NikeService.NikeMBPics;
	$scope.BLength = $scope.NikeMBPics.length;
	$scope.getNikeMBShoes = function(){
		var promise = NikeService.getNikeMBShoes();
		return promise.then(function(result){
			$scope.BShoes = result;
			combo($scope.BShoes, $scope.NikeMBPics);
		})
	}();

//Soccer
	$scope.NikeMSPics = NikeService.NikeMSPics;
	$scope.SLength = $scope.NikeMSPics.length;
	$scope.getNikeMSShoes = function(){
		var promise = NikeService.getNikeMSShoes();
		return promise.then(function(result){
			$scope.SShoes = result;
			combo($scope.SShoes, $scope.NikeMSPics);
		})
	}();

	//Traning And Gym
	$scope.NikeMGTPics = NikeService.NikeMGTPics;
	$scope.GTLength = $scope.NikeMGTPics.length;
	$scope.getNikeMGTShoes = function(){
		var promise = NikeService.getNikeMTGShoes();
		return promise.then(function(result){
			$scope.GTShoes = result;
			combo($scope.GTShoes, $scope.NikeMGTPics);
		})
	}()


	var combo = function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].img = b[i].img
		}
	}
}]);
