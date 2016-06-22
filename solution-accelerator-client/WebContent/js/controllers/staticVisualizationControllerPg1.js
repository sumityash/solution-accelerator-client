app.controller("staticVisualizationControllerPg1",function($http,$scope,$rootScope,$window) {
	$scope.showGraph= true;
	$scope.hideS3Form=true;
	$scope.hideHDFSForm=true;
	$scope.showAxis=true;
	
	$scope.visualizeInputSourceLocation=function(inputLocation){
		
		if(inputLocation=='s3')
			{
				$scope.hideS3Form=false;
				$scope.hideHDFSForm=true;
			}

		if(inputLocation=='hdfs')
			{
			
				$scope.hideHDFSForm=false;
				$scope.hideS3Form=true;
			}
	}
	
	
	$scope.setDestination =function(destinationSource){		
		if(destinationSource=='s3')
			{	$rootScope.objToSend.destinationType="s3";
				$rootScope.objToSend.destination=$rootScope.s3InputConfig.outputLocationToSave;
				$rootScope.objToSend.awsAccessKey=$rootScope.s3OutputConfig.awsAccessKey;
				$rootScope.objToSend.awsSecretKey=$rootScope.s3OutputConfig.awsSecretKey;
				$scope.hideS3Form=true;
				
				var jsonToSubmit= JSON.stringify($rootScope.objToSend)
				console.log(jsonToSubmit)
				$('#myModal').modal('show');
				$rootScope.processingStatus="Loading data...."
				var urlToSubmitOnline="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=load-schema&classPath=com.yash.app.App&sync=true&context=static&&timeout=60000"
				$http({method: 'POST', url: urlToSubmitOnline,transformResponse: [function(data){return data}],data:jsonToSubmit}).success(function(response) {
					$('#myModal').modal('hide');
					$rootScope.processingStatus="Processing...."
					console.log("In success");	
					console.log(response);
					$scope.obj= angular.fromJson(response)
					console.log($scope.obj.result);
					$rootScope.dynamicColumns=$scope.obj.result;
					$window.location.href = '#dispatchToStaticVisualizationPg2';
						}).error(function(data) {
							$('#myModal').modal('hide');
							$rootScope.processingStatus="Processing...."
							console.log("In error");	
							console.log(data);
						});
				
			}
		else if(destinationSource=='hdfs')
			
		{	$rootScope.objToSend.destinationType="hdfs";
			$rootScope.objToSend.destination=$rootScope.hdfsInputConfig.outputLocationToSave;
			$scope.hideHDFSForm=true;
			var jsonToSubmit= JSON.stringify($rootScope.objToSend)
			console.log(jsonToSubmit)
				$('#myModal').modal('show');
				$rootScope.processingStatus="Loading data...."
			var urlToSubmitOnline="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=load-schema&classPath=com.yash.loadschemaapp.App&sync=true&context=static&&timeout=60000"
			$http({method: 'POST', url: urlToSubmitOnline,transformResponse: [function(data){return data}],data:jsonToSubmit}).success(function(response) {
				
				$('#myModal').modal('hide');
				$rootScope.processingStatus="Processing....";
				console.log("In success");	
				console.log(response);
				$scope.obj= angular.fromJson(response)
				console.log($scope.obj.result);
				$rootScope.dynamicColumns=$scope.obj.result;
				$window.location.href = '#dispatchToStaticVisualizationPg2';
					}).error(function(data) {
						$('#myModal').modal('hide');
						$rootScope.processingStatus="Processing...."
						console.log("In error");	
						console.log(data);
					});
			
		}
		
	}
	

	
})




