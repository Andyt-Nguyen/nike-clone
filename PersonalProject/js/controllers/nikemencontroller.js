NikeApp.controller('NikeMenController',['$scope','NikeService', function($scope,NikeService){

	// Nike Front Page Mens Shoes
	$scope.nikeShoes = NikeService.nikeMenShoes;


	//Nike+ Apps
	 $scope.nikePlus = NikeService.nikePlusApps;
	 console.log("Nike Plus ",$scope.nikePlus);

	 //Nike Social Media
	 $scope.nikeFollow = NikeService.nikeFollow;
	 console.log("Nike Follow", $scope.nikeFollow);
}]);
