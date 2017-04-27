NikeApp.controller('NikeWomenController',['$scope','NikeService', function($scope, NikeService){
	$scope.nikeShoes = NikeService.nikeWomenShoes;
		//console.log("Nike Shoes", $scope.nikeShoes);

	$scope.nikeApps = NikeService.wNikePlusApps;
		//console.log("Nike Apps", $scope.nikeApps);

	$scope.nikeFollow = NikeService.wNikeFollow;
	//	console.log("Nike Follow", $scope.nikeFollow);
	
}]);
