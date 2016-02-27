angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', "$http", function($scope, $http){

		$scope.load = function(req, res){
			$http.get('/countries')
			.then(function(returnData){
				$scope.countrylist = returnData.data
				console.log("WOOO");
			})
		}


		$scope.search = function(){
			$http.post('/search', $scope.searchValue)
			.then(function(returnInfo){
			$scope.test1 = returnInfo.data
			$http.post('/newCountry', $scope.test1)
			})
		}



	}]);