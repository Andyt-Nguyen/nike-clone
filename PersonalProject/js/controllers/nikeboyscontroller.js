NikeApp.controller('NikeBoysController', ['$scope', 'NikeService', function($scope, NikeService){
	$scope.shoes = NikeService.bNikeShoes;
	console.log($scope.shoes);
}]);
