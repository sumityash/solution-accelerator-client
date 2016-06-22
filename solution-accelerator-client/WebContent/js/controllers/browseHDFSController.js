app.controller("browseHDFSController",function($scope, $http, $rootScope,$window) {
	
	angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	angular.element($window).bind('resize', function () {
	    console.log($window.innerHeight-78);
		angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	});
	
		
	if($rootScope.clusterConfig.masterNodeUrl!=undefined){
		var url="http://"+$rootScope.clusterConfig.masterNodeUrl+":50070/explorer.html#/"
		console.log(url)
		$('#iframe').attr('src', url)
		$scope.hdfsUI= false
	}
	else
		{
		$scope.hdfsUI= true;
		};
});