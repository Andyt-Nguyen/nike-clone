NikeApp.controller('WomensProdController',['$scope','NikeService', function($scope,NikeService){


//All Shoes
	$scope.NikeWAPics = NikeService.NikeWPics;
	$scope.getAllNikeWShoes = function(){
		var promise = NikeService.getAllNikeWShoes();
		return promise.then(function(result){
			$scope.WShoes = result;
			combo($scope.WShoes, $scope.NikeWAPics);
		});
	}();





//Lifestyle
	$scope.NikeWLSPics = NikeService.NikeWLSPics;
	$scope.getNikeWLSShoes = function(){
		var promise = NikeService.getNikeWLSShoes();
		return promise.then(function(result){
			$scope.WLSShoes = result;
			combo($scope.WLSShoes, $scope.NikeWLSPics);
		});
	}();


//Running
	$scope.NikeWRnPics = NikeService.NikeWRnPics;
	$scope.getNikeWRnShoes = function(){
		var promise = NikeService.getNikeWRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
			combo($scope.RnShoes, $scope.NikeWRnPics);
		})
	}();


//Basketball
	$scope.NikeWBPics = NikeService.NikeWBPics;
	$scope.getNikeWBShoes = function(){
		var promise = NikeService.getNikeWBShoes();
		return promise.then(function(result){
			$scope.BShoes = result;
			combo($scope.BShoes, $scope.NikeWBPics);
		});
	}();

//Soccer
	$scope.NikeWSPics = NikeService.NikeWSPics;
	$scope.getNikeWSShoes = function(){
		var promise = NikeService.getNikeWSShoes();
		return promise.then(function(result){
			$scope.SShoes = result;
			combo($scope.SShoes, $scope.NikeWSPics);
		});
	}();

//Training And Gym
	$scope.NikeWTGPics = NikeService.NikeWTGPics;
	$scope.getNikeWTGShoes = function(){
		var promise = NikeService.getNikeWTGShoes();
		return promise.then(function(result){
			$scope.TGShoes = result;
			combo($scope.TGShoes, $scope.NikeWTGPics);
		});
	}();









	var combo = function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].img = b[i].img;
		}
	}


}]);
