NikeApp.controller('NikeCustomizeController',['$scope','NikeService', function($scope, NikeService){
	$scope.nikeShoes = NikeService.cNikeShoes;
	//console.log($scope.nikeShoes);

	$scope.nikeSuede = NikeService.cNikeSuede;
	console.log($scope.nikeSuede);
}]);
