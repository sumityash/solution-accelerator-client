app.controller("sparkUIController",function($scope, $http, $rootScope,$window) {
	/*$scope.sparkUI= true;*/
	angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	if($rootScope.clusterConfig.masterNodeUrl!=undefined){
		$http.get("http://"+$rootScope.clusterConfig.masterNodeUrl+":8090")
		.success(function(response)
				{
			$('#iframe').attr('src', "http://"+$rootScope.clusterConfig.masterNodeUrl+":8090")
			$scope.sparkUI= false
				})
		.error(function(data){
			$scope.sparkUI= true;
		})
		
	}
	else
	{
		$scope.sparkUI= true;
	};;
	
	/*$scope.$on('$locationChangeStart', function(event) {
		   $rootScope.hideFooter= false;
		});*/
	angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	angular.element($window).bind('resize', function () {
		angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	});
})