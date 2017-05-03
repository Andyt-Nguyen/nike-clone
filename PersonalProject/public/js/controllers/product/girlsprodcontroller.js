NikeApp.controller('GirlsProdController', ['$scope', 'NikeService', function($scope, NikeService){

//Intro To the Nike Girl Products Page
	$scope.gProdShoes = NikeService.gprodCategShoes;

//Calling To The Data base
	$scope.getNikeGShoes = function(){
		console.log('The Function has Been reached');
		var promise = NikeService.getNikeGShoes();
		return promise.then(function(result){
			console.log('Da Shoes', result);
			$scope.NikeGShoes = result;
		})
	}();


}]);



// $scope.getShoes = function(){
// 	console.log('This is the top of the promise');
// 	return NikeService.getAllShoes().then(function(response){
// 		console.log('This is the controller ', response);
//
// 		$scope.nikeShoes = response;
// 	})
// }();
