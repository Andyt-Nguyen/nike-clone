NikeApp.controller('MensProdController',['$scope','NikeService', function($scope, NikeService){

	/////////////////
	//NikeMensShoes//
	////////////////

//All Shoes
	$scope.AllMNikePics = NikeService.AllMNikePics;
	$scope.getNikeMAShoes = function(){
		var promise = NikeService.getNikeMAShoes();
		return promise.then(function(result){
			$scope.NikeMAShoes = result;
			combo($scope.NikeMAShoes, $scope.AllMNikePics);
		});
	}();

//LifeStyle
	$scope.NikeMLSPics = NikeService.MLSPics;
	$scope.getNikeMLSShoes = function(){
		var promise = NikeService.getNikeMLSShoes();
		return promise.then(function(result){
			$scope.LSShoes = result;
			combo($scope.LSShoes, $scope.NikeMLSPics);
		});
	}();



//Running
	$scope.NikeMRnPics = NikeService.NikeMenRnPics;
	$scope.getNikeMRnShoes = function(){
		var promise = NikeService.getNikeMRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
			combo($scope.RnShoes, $scope.NikeMRnPics);
		});
	}();

//Basketball
	$scope.NikeMBPics = NikeService.NikeMBPics;
	$scope.getNikeMBShoes = function(){
		var promise = NikeService.getNikeMBShoes();
		return promise.then(function(result){
			$scope.BShoes = result;
			combo($scope.BShoes, $scope.NikeMBPics);
		});
	}();

//Soccer
	$scope.NikeMSPics = NikeService.NikeMSPics;
	$scope.getNikeMSShoes = function(){
		var promise = NikeService.getNikeMSShoes();
		return promise.then(function(result){
			$scope.SShoes = result;
			combo($scope.SShoes, $scope.NikeMSPics);
		});
	}();

	//Traning And Gym
	$scope.NikeMGTPics = NikeService.NikeMGTPics;
	$scope.getNikeMGTShoes = function(){
		var promise = NikeService.getNikeMTGShoes();
		return promise.then(function(result){
			$scope.GTShoes = result;
			combo($scope.GTShoes, $scope.NikeMGTPics);
			console.log($scope.GTShoes);
		});
	}()








	var combo = function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].img = b[i].img
		}
	}


}]);
