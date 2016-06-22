app.controller("ingestionController",function($scope, $http, $rootScope) {
	$rootScope.streamingContextName="";
	 $scope.hideError=true;
	 $scope.contextExist=false;
	 
	$rootScope.sourceType=function(sourceType){
		if(sourceType =='static')
			{
			$rootScope.staticSource = false
			$rootScope.streamSource = true
			}
		else if(sourceType =='streaming'){
				
			$rootScope.streamingContextName="user_"+$rootScope.user.userId+"-streaming" 
			$scope.checkContextName();
			
				/*if($rootScope.streamingContextName==undefined)
					{
					$('#ingestionModal').show();
					}
				else
					{
					$rootScope.streamSource = false
					$rootScope.staticSource = true
					}*/
			}
		
	}
	
	$scope.checkContextName= function(){
		$scope.contextExistError="";
		$('#myModal').modal('show');
		$rootScope.processingStatus="checking context for streaming sources.."
		$http({method: 'GET', url: 'http://'+$rootScope.clusterConfig.masterNodeUrl+':8090/contexts'})
		.then( function(response){
	            	if(response.data.length!=0)
	            		{
	            		 var i = response.data.length;
	            		    while (i--) {
	            		       if (response.data[i] === $rootScope.streamingContextName) {
	            		    	   $scope.contextExist=true;
	            		    	   $rootScope.streamSource = false
	           					   $rootScope.staticSource = true
	            		    	  /* $scope.createContext();
	            		    	   $scope.hideError=false;
	            		    	   $scope.contextExistError="Context with name "+ $rootScope.streamingContextName+" already exists \n Provide another name";*/
	            		    	   break;
	            		       }
	            		    }
	            		}	
	            	
	        		if($scope.contextExist==false)
	        			{
	        				$scope.createContext();
	        			}
	        		else
	        			{
	        			$('#myModal').modal('hide');
		        		$rootScope.processingStatus="processing..";
	        			}
	            }, 
	            function(errResponse){
	            	console.log("Problem while getting Context name")
	            	$('#myModal').modal('hide');
	        		$rootScope.processingStatus="processing.."
	            }
	    	);
		

		
	}
	
	$scope.createContext=function()
	{
//	  	$('#ingestionModal').hide();
		var urlToCreateContext="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/contexts/"+$rootScope.streamingContextName+"?num-cpu-cores=2&memory-per-node=1g&spark.executor.instances=1"
	
		/*$('#myModal').modal('show');*/
		$rootScope.processingStatus="creating context for streaming sources.."
		$http({method: 'POST', url: urlToCreateContext,headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},transformResponse: [function(data){return data}]})
		.success(function(data) {
			
			console.log(" STREAMING CONTEXT CREATED AT START "+data);
			
        	$('#myModal').modal('hide');
        	$rootScope.processingStatus="Processing...";
        	
        	$rootScope.streamSource = false
			$rootScope.staticSource = true
			
		}).error(function(data) {
			$('#myModal').modal('hide');
			console.log(" STREAMING CONTEXT CREATION FAILED "+data);
			$rootScope.processingStatus="Processing...";
		});
    	
	}
})