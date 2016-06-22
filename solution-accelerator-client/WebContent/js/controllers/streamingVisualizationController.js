app.controller("streamingVisualizationController",function($http,$scope,$rootScope,$window) {
	console.log( $window.innerHeight-78+'px');
	angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	angular.element($window).bind('resize', function () {
		angular.element('#iframe').css('height', $window.innerHeight-78+'px');
	});
	
	

	
	
	$scope.hideGrafanaUI= true;
	$scope.refreshIframe=function()
	{
		 /*$("footer").hide();*/
		/*$http.post("http://" +$rootScope.clusterConfig.masterNodeUrl+":3000/login", {user: "admin", email: "", password: "admin"})
		.success(function(data){console.log(data)})
		.error(function(data){console.log(data)})*/
		
		if($rootScope.clusterConfig.masterNodeUrl!=undefined){
			/*$http({method: 'GET', url: "http://cors.io/?u=http://" +$rootScope.clusterConfig.masterNodeUrl+":3000",
			    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
			.then(
	                function(response){
	                	console.log("ok!!");
	                	$('#iframe').attr('src', "http://" +$rootScope.clusterConfig.masterNodeUrl+":3000");
	            		$scope.hideGrafanaUI= false;
	            		$rootScope.hideFooter=true;
	                }, 
	                function(errResponse){
	                	$scope.hideGrafanaUI= true;
	                	$rootScope.hideFooter= false;
	                }
	        	);*/
			$('#iframe').attr('src', "http://" +$rootScope.clusterConfig.masterNodeUrl+":3000");
    		$scope.hideGrafanaUI= false;
    		$rootScope.hideFooter=true;
		}
		else
			{
			$scope.hideGrafanaUI= true
			};
		
		/*$('#iframe').attr('src', "http://" +$rootScope.clusterConfig.masterNodeUrl+":3000");*/
	};
	
	$scope.refreshIframe();
	
	$rootScope.deleteContext=function()
	{
		var urlToDeleteContext="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/contexts/"+"user_"+$rootScope.user.userId+"-streaming" 
		$http['delete'](urlToDeleteContext)
        .success(function (data, status, headers) {
        	/*$rootScope.checkRequiredContexts();*/
        })
        .error(function (data, status, header, config) {
           console.log(data);
           /*$rootScope.checkRequiredContexts();*/
        });
	}
	
	$scope.$on('$locationChangeStart', function(event) {
	   $rootScope.hideFooter= false;
	});

})