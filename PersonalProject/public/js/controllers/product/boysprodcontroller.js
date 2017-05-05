NikeApp.controller('BoysProductController', ['$scope', 'NikeService', function($scope, NikeService){
	$scope.NikeBProds = NikeService.bProdCategShoes;


//AllShoes
	$scope.NikeABPics = NikeService.NikeABPics;
	$scope.getABShoes = function(){
		var promise = NikeService.getABShoes();
		return promise.then(function(result){
			$scope.ABShoes = result;
			combo($scope.ABShoes, $scope.NikeABPics);
		});
	}();


//LifeStyle
	$scope.NikeBLSPics = NikeService.NikeBLSPics;
	$scope.getNikeBLSShoes = function(){
		var promise = NikeService.getNikeBLSShoes();
		return promise.then(function(result){
			$scope.LSShoes = result;
			combo($scope.LSShoes, $scope.NikeBLSPics);
		});
	}();


//Running
	$scope.NikeBRnPics = NikeService.NikeBRnPics;
	$scope.getNikeRnShoes = function(){
		var promise = NikeService.getNikeBRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
			combo($scope.RnShoes, $scope.NikeBRnPics);
		});
	}();


//Basketball
	$scope.NikeBBPics = NikeService.NikeBBPics;
	$scope.getNikeBBShoes = function(){
		var promise = NikeService.getNikeBBShoes();
		return promise.then(function(results){
			$scope.BShoes = results
			combo($scope.BShoes, $scope.NikeBBPics);
		});
	}();

//Soccer
	$scope.NikeBSPics = NikeService.NikeBSPics;
	$scope.getNikeBSShoes = function(){
		var promise = NikeService.getNikeBSShoes();
		return promise.then(function(result){
			$scope.SShoes = result;
			combo($scope.SShoes, $scope.NikeBSPics);
		});
	}()

//Training
	$scope.NikeBTGPics = NikeService.NikeBTGPics;
	$scope.getNikeBTGShoes = function(){
		var promise = NikeService.getNikeBTGShoes();
		return promise.then(function(result){
			$scope.TGShoes = result;
			combo($scope.TGShoes, $scope.NikeBTGPics);
		});
	}()

	var combo = function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].img = b[i].img
		}
	}

}]);
