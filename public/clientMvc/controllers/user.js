'use strict';

app.controller('ctrl1', ['$scope', '$http', '$auth', function($scope, $http, $auth) {

    $scope.twitterLogin = function(){
			$auth.authenticate('twitter').then(function(response) {
				console.log(response);
			}); 
    }; 

}]);