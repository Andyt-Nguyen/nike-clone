NikeApp.controller('GirlsProdController', ['$scope', 'NikeService', function($scope, NikeService){

//Intro To the Nike Girl Products Page
	$scope.gProdShoes = NikeService.gprodCategShoes;

//Calling To The Data base
	$scope.getNikeGShoes = function(){
		console.log('The Function has Been reached');
		var promise = NikeService.getNikeGShoes();
		return promise.then(function(result){
			console.log('Da Shoes', result);
			$scope.NikeGShoes = result;
		})
	}();

	


//LifeStyle
$scope.NikeGLSPics = NikeService.getNikeGLSPics;
	$scope.getNikeLsShoes = function(){
		var promise = NikeService.getNikeGLS();
		return promise.then(function(result){
			$scope.LSShoes = result;
			combo($scope.LSShoes, $scope.NikeGLSPics);
			console.log('HELLo',$scope.LSShoes);
		})
	}();

//Running
	$scope.GRunPics = NikeService.getNikeGRnPics;

	$scope.getNikeRnShoes = function(){
		var promise = NikeService.getNikeGRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
			combo($scope.RnShoes, $scope.GRunPics);
		})
	}();

//Basketball
	$scope.GBaShoes = NikeService.NikeGBShoesPics;

	$scope.getGBShoes = function(){
		var promise = NikeService.getNikeGBShoes();
		return promise.then(function(result){
			$scope.GBShoes = result;
			combo($scope.GBShoes, $scope.GBaShoes);
			console.log('Basketball',$scope.GBShoes);
		});
	}();

//Soccer
	$scope.GSShoesPics = NikeService.NikeSShoesPics;
	$scope.getGSShoes = function(){
		var promise = NikeService.getNikeGSShoes();
		return promise.then(function(result){
			$scope.GSShoes = result;
			combo($scope.GSShoes, $scope.GSShoesPics);
			console.log('Soccer', $scope.GSShoes);
		});
	}();

//Jordan
	$scope.GJShoesPics = NikeService.NikeJShoesPics;
	console.log($scope.GJShoesPics);
	$scope.getGJShoes = function(){
		var promise = NikeService.getNikeJShoes();
		return promise.then(function(result){
			$scope.GJShoes = result;
			combo($scope.GJShoes, $scope.GJShoesPics)
		});
	}();

	var combo = function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].img = b[i].img
		}
	}


}]);
