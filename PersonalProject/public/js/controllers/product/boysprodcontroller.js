NikeApp.controller('BoysProductController', ['$scope', 'NikeService', function($scope, NikeService){
	$scope.NikeBProds = NikeService.bProdCategShoes;
	//console.log($scope.NikeBProds);
}]);
