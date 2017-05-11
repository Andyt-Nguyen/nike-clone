NikeApp.controller('WomensProdController',['$scope','NikeService','$stateParams', function($scope,NikeService, $stateParams){

	function getUser() {
	    NikeService.getUser().then(function(user) {
	      console.log('USER DATA',user);
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  }();

//All Shoes
	$scope.getAllNikeWShoes = function(){
		var promise = NikeService.getAllNikeWShoes();
		return promise.then(function(result){
			$scope.WShoes = result;
			$scope.singleItem = $scope.WShoes.filter(function(data){
				return data.id == $stateParams.id
			});
		});
	}();


//Lifestyle
	$scope.getNikeWLSShoes = function(){
		var promise = NikeService.getNikeWLSShoes();
		return promise.then(function(result){
			$scope.WLSShoes = result;
		});
	}();


//Running
	$scope.getNikeWRnShoes = function(){
		var promise = NikeService.getNikeWRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
		})
	}();


//Basketball
	$scope.getNikeWBShoes = function(){
		var promise = NikeService.getNikeWBShoes();
		return promise.then(function(result){
			$scope.BShoes = result;
		});
	}();


//Soccer
	$scope.getNikeWSShoes = function(){
		var promise = NikeService.getNikeWSShoes();
		return promise.then(function(result){
			$scope.SShoes = result;
		});
	}();


//Training And Gym
	$scope.getNikeWTGShoes = function(){
		var promise = NikeService.getNikeWTGShoes();
		return promise.then(function(result){
			$scope.TGShoes = result;
		});
	}();


	var combo = function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].img = b[i].img;
		}
	}


}]);
