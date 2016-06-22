app.controller("contextController",function($scope, $http, $rootScope,$window) {
	
	$scope.createStaticContext=function()
	{

		var urlToCreateContext="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/contexts/"+$rootScope.Context.name+"?num-cpu-cores="+$rootScope.Context.cpuCores+"&memory-per-node="+$rootScope.Context.memoryPerNode+"&spark.executor.instances="+$rootScope.Context.executorInstances
		
		$http({method: 'POST', url: urlToCreateContext,transformResponse: [function(data){return data}]})
		.success(function(data) {
			console.log(data);
			$window.location.href = '#createStreamingContext';
			
		}).error(function(data) {
			console.log(data);
		});
	}	
	
	$scope.createStreamingContext=function()
	{

		var urlToCreateContext="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/contexts/"+$rootScope.Context.name+"?num-cpu-cores="+$rootScope.Context.cpuCores+"&memory-per-node="+$rootScope.Context.memoryPerNode+"&spark.executor.instances="+$rootScope.Context.executorInstances
		
		$http({method: 'POST', url: urlToCreateContext,transformResponse: [function(data){return data}]})
		.success(function(data) {
			console.log(data);
			$rootScope.hideButons=false;
			$rootScope.showClusterPrompt=true;
			$window.location.href = '#dispatchToHome';
			
		}).error(function(data) {
			console.log(data);
		});
	}	
	
})