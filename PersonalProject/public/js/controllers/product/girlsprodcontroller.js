NikeApp.controller('GirlsProdController', ['$scope', 'NikeService', function($scope, NikeService){

//Intro To the Nike Girl Products Page
	$scope.gProdShoes = NikeService.gprodCategShoes;

//Calling To The Data base


//All Nike Shoes
	$scope.NikeGAPics = NikeService.AllGNikePics;

	$scope.getGAShoes = function(){
		var promise = NikeService.getNikeGAShoes();
		return promise.then(function(response){
			$scope.GAShoes = response;
			combo($scope.GAShoes, $scope.NikeGAPics);
			console.log('Success',$scope.GAShoes);
		});
	}();



//LifeStyle
$scope.NikeGLSPics = NikeService.getNikeGLSPics;
$scope.GLSLength = $scope.NikeGLSPics.length;
	$scope.getNikeLsShoes = function(){
		var promise = NikeService.getNikeGLS();
		return promise.then(function(result){
			$scope.LSShoes = result;
			combo($scope.LSShoes, $scope.NikeGLSPics);
		})
	}();

//Running
	$scope.GRunPics = NikeService.getNikeGRnPics;
	$scope.RunPicLength = $scope.GRunPics.length;
	$scope.getNikeRnShoes = function(){
		var promise = NikeService.getNikeGRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
			combo($scope.RnShoes, $scope.GRunPics);
		})
	}();

//Basketball
	$scope.GBaShoes = NikeService.NikeGBShoesPics;
	$scope.GBLength = $scope.GBaShoes.length;
	$scope.getGBShoes = function(){
		var promise = NikeService.getNikeGBShoes();
		return promise.then(function(result){
			$scope.GBShoes = result;
			combo($scope.GBShoes, $scope.GBaShoes);
		});
	}();

//Soccer
	$scope.GSShoesPics = NikeService.NikeSShoesPics;
	$scope.GSLength = $scope.GSShoesPics.length;
	$scope.getGSShoes = function(){
		var promise = NikeService.getNikeGSShoes();
		return promise.then(function(result){
			$scope.GSShoes = result;
			combo($scope.GSShoes, $scope.GSShoesPics);
		});
	}();

//Jordan
	$scope.GJShoesPics = NikeService.NikeJShoesPics;
	$scope.GJLength = $scope.GJShoesPics.length;
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
