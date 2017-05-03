NikeApp.controller('GirlsProdController', ['$scope', 'NikeService', function($scope, NikeService){
	$scope.gProdShoes = NikeService.gprodCategShoes;
	console.log($scope.gProdShoes);
}]);
