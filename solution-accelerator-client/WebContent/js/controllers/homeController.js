app.controller("homeController",function($scope, $http, $rootScope,$window) {
	if($rootScope.clusterConfig.masterNodeUrl==undefined)
		{
		$rootScope.fetchClusterDetails();
		}
	
	
	$scope.validateClusterIP= function()
	{
		$http({method: 'GET', url: 'http://'+$rootScope.clusterConfig.masterNodeUrl+':8090',timeout: 1000})
		.then(
                function(response){
                	$rootScope.hideButons=false;
                	$scope.error="";
                	$rootScope.checkStaticContexts();
                }, 
                function(errResponse){
                	$rootScope.hideButons=true;
                	console.log("Invalid Ip")
                   $scope.error="* Please Provide valid Cluster IP"
                }
        	);
		
	}
		

	
	 if($rootScope.clusterConfig.masterNodeUrl!=undefined)
	{
		$scope.validateClusterIP();
	}
})