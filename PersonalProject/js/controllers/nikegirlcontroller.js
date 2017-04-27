NikeApp.controller('NikeGirlController',['$scope', 'NikeService', function($scope, NikeService){
	//Nike Shoes
	$scope.nikeShoes = NikeService.gNikeShoes;
		//console.log('Nike Shoes',$scope.nikeShoes);

	//Nike Clothes
	$scope.nikeClothes = NikeService.gNikeClothes;
		//console.log('Nike Clothes', $scope.nikeClothes);

	//Nike Checklist
	$scope.nikeCheckList = NikeService.gNikeChecklist;
		//console.log('Nike Checklist', $scope.nikeChecklist);

	//Best Of Nike
	$scope.bestNike = NikeService.bestOfNike;

}]);
