NikeApp.controller('NikeCustomizeController',['$scope','NikeService', function($scope, NikeService){
	$scope.nikeShoes = NikeService.cNikeShoes;
	//console.log($scope.nikeShoes);
}]);
