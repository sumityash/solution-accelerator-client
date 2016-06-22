app.controller("cleanDataController",function($scope,$rootScope,$window,$http) {
	$rootScope.hdfsInputConfig.fileLocation=$rootScope.hdfsOutputConfig.hdfsLocation
	$scope.showS3Form=true;
	$scope.showHDFSForm=true;
	$scope.showCleanedMessage=true;
	$rootScope.s3InputConfig.nullCheck=false;
	$rootScope.s3InputConfig.emptyCheck=false;
	$rootScope.hdfsInputConfig.nullCheck=false;
	$rootScope.hdfsInputConfig.emptyCheck=false;
	

	$rootScope.setFormat=function(fileFormat){
		$rootScope.objectToClean.fileFormat=fileFormat;
	}


	
	$scope.cleanInputSourceLocation=function(inputLocation){
		$rootScope.cleanDataInputSource=inputLocation;
		
		if($rootScope.cleanDataInputSource=='s3')
			{
				$scope.showS3Form=false;
				$scope.showHDFSForm=true;
			}

		if($rootScope.cleanDataInputSource=='hdfs')
			{
			
				$scope.showHDFSForm=false;
				$scope.showS3Form=true;
			}
	}
	
	$scope.cleanData =function(cleaningSubmission){
		$scope.showCleanedMessage=true;
		$rootScope.cleanedMessage=null;
		
		if(cleaningSubmission=='s3')
			{
			$rootScope.objectToClean.Source="s3";
			$rootScope.objectToClean.fileLocation=$rootScope.s3OutputConfig.s3Location;
			$rootScope.objectToClean.awsAccessKey=$rootScope.s3OutputConfig.awsAccessKey;
			$rootScope.objectToClean.awsSecretKey=$rootScope.s3OutputConfig.awsSecretKey;
			$rootScope.objectToClean.outputLocation=$rootScope.s3InputConfig.outputLocationToSave;
			$rootScope.objectToClean.nullCheck=$rootScope.s3InputConfig.nullCheck;
			$rootScope.objectToClean.emptyCheck=$rootScope.s3InputConfig.emptyCheck;
				
				var jsonToClean= JSON.stringify($rootScope.objectToClean)
				
				console.log("S3 CLean JSON String "+jsonToClean)
				
				
			}
		else
		{
			$rootScope.objectToClean.Source="hdfs";
			$rootScope.objectToClean.fileLocation=$rootScope.hdfsOutputConfig.hdfsLocation;
			$rootScope.objectToClean.outputLocation=$rootScope.hdfsInputConfig.outputLocationToSave;
			$rootScope.objectToClean.nullCheck=$rootScope.hdfsInputConfig.nullCheck
			$rootScope.objectToClean.emptyCheck=$rootScope.hdfsInputConfig.emptyCheck;
		
			var jsonToClean= JSON.stringify($rootScope.objectToClean)
			
			console.log("HDFS CLean JSON String "+jsonToClean)
		}
		
		var urlToCleanDataOnline="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=cleaningProcess&classPath=com.yash.cleaning.app.CleaningApp&sync=true&context=static&&timeout=60000"
		$('#myModal').modal('show');
		$rootScope.processingStatus="Cleaning Data...."
		$http({method: 'POST', url: urlToCleanDataOnline,transformResponse: [function(data){return data}],data:jsonToClean})
		.success(function(response) {
			$scope.showCleanedMessage=false;
			$rootScope.setColor=true;
			/*$rootScope.s3InputConfig=new Object();
			$rootScope.hdfsInputConfig=new Object();*/
			$rootScope.cleanedMessage="Your data is cleaned"
			$('#myModal').modal('hide');
			$rootScope.processingStatus="Processing...."
		}).error(function(response) {
			$rootScope.showCleanErrorMessage=false;
			$rootScope.setColor=false;
			$rootScope.cleanErrorMessage="Some problem occured in data cleaning"
			console.log(response);
			$('#myModal').modal('hide');
			$rootScope.processingStatus="Processing...."
		});
		
	}
		
	
})