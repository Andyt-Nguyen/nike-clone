NikeApp.controller('NikeCustomizeController',['$scope','NikeService', function($scope, NikeService){

	function getUser() {
	    NikeService.getUser().then(function(user) {
	      console.log('USER DATA',user);
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  }()


	$scope.nikeShoes = NikeService.cNikeShoes;
	//console.log($scope.nikeShoes);

	$scope.nikeSuede = NikeService.cNikeSuede;
	console.log($scope.nikeSuede);
}]);
