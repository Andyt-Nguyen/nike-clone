NikeApp.controller('NikeGirlController',['$scope', 'NikeService', function($scope, NikeService){
	//Nike Shoes
	$scope.nikeShoes = NikeService.gNikeShoes;
	console.log($scope.nikeShoes);
}]);
