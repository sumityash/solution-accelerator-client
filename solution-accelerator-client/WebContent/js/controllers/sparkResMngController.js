app.controller("sparkResMngController",function($scope, $http, $rootScope,$window) {
	
	angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	angular.element($window).bind('resize', function () {
		angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	});
	
	if($rootScope.clusterConfig.masterNodeUrl!=undefined){
		$('#iframe').attr('src', "http://"+$rootScope.clusterConfig.masterNodeUrl+":8088/cluster");
	}
	else
		{
		$scope.hideSparkResMng= true
		};
})