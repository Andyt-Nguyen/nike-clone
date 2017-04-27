NikeApp.controller('NikeBoysController', ['$scope', 'NikeService', function($scope, NikeService){

	// Nike Shoes
	$scope.nikeShoes = NikeService.bNikeShoes;
	console.log('Nike Shoes', $scope.nikeShoes);


	// Nike Clothes
	$scope.nikeClothes = NikeService.bNikeClothes;
	console.log('Nike Clothes', $scope.nikeClothes);
}]);
