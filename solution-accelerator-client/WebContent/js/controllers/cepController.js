app.controller("cepController", function($scope, $http, $rootScope,$window) {

	$rootScope.checkStreamingContexts();
	console.log("DataSource set "+$rootScope.dataSource);
	console.log("Master Node URL"+$rootScope.clusterConfig.masterNodeUrl);
	
	
/*	$('#iframe').attr('src', "http://" + $rootScope.graphiteHost+":3000");*/
	

	
/* 	$rootScope.checkContextForStreaming();*/
	
	
	$scope.processCEP = function() {
		
		$rootScope.graphiteHost=$rootScope.clusterConfig.masterNodeUrl;
		$rootScope.socketTextStreamUrl=$rootScope.clusterConfig.masterNodeUrl;
		
		$rootScope.cepObject=new Object();
		$rootScope.cepObject.graphitehost=$rootScope.graphiteHost;
		$rootScope.cepObject.windowDuration=$rootScope.cepConfig.windowDuration;
		$rootScope.cepObject.batchInterval=$rootScope.cepConfig.batchInterval;
		$rootScope.cepObject.slidingWindow=$rootScope.cepConfig.slidingWindow;
		$rootScope.cepObject.socketTextStreamUrl=$rootScope.socketTextStreamUrl

		var cepJSON = JSON.stringify($rootScope.cepObject);
		console.log(cepJSON);
		
		var urlToDataGeneration="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=CEPProcess&classPath=com.yash.cep.app.RandomClientSparkJob&context="+$rootScope.streamingContextName+"&&timeout=60000"
		
		var urlToCEPStreaming="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=CEPProcess&classPath=com.yash.cep.app.CepApp&context="+$rootScope.streamingContextName+"&&timeout=60000"
		
		$('#myModal').modal('show');
		$rootScope.processingStatus="Initialised CEP"
			
			//Making Call For Data Generation To Start
			$http({method: 'POST', url: urlToDataGeneration,transformResponse: [function(data){return data}]})
			.success(function(response) {
				console.log("DATA GENERATION STARTED "+response)
			
			}).error(function(response) {
				console.log("DATA GENERATION FAILED "+response)
				
			});
			
		// Making Call For CEP Process To Start
		$http({method: 'POST', url: urlToCEPStreaming,transformResponse: [function(data){return data}],data:cepJSON})
		.success(function(response) {
			console.log("CEP Proces Started "+response)
			$('#myModal').modal('hide');
			$window.location.href = '#dispatchToStreamingVisualization';
		
		}).error(function(response) {
			console.log("CEP Proces Failed "+response)
			$('#myModal').modal('hide');
			
		});
		
	};

	
	
	/* Saving the Configuration */
	
	/*$scope.savePreviewedConfiguration= function()
	{
		var objToInsertData = new Object()
		Checking what is the data Source and setting it in objToInsertData Object
		if($rootScope.dataSource=="db"){	
			$rootScope.dbConfig.aliasName=$rootScope.aliasName;
			$rootScope.dbConfig.userId=$rootScope.user.userId
			console.log("HOST IP "+$rootScope.dbConfig.hostIp)
			objToInsertData.database=$rootScope.dbConfig;
			console.log("DATABASE CONFIGURATION TO BE INSERTED "+objToInsertData.database)
		}
		
		if($rootScope.dataSource=="email"){
			$rootScope.emailConfig.aliasName=$rootScope.aliasName;
			$rootScope.emailConfig.userId=$rootScope.user.userId
			objToInsertData.email=$rootScope.emailConfig;
		}
		
		if($rootScope.dataSource=="twitter"){	
			$rootScope.twitterConfig.aliasName=$rootScope.aliasName;
			$rootScope.twitterConfig.userId=$rootScope.user.userId
			objToInsertData.twitter=$rootScope.twitterConfig;
			objToInsertData.aws=null
			objToInsertData.hdfs=null
		}
		
		Checking what is the OutputLocation and setting it in objToInsertData Object
		if($rootScope.outputLocation=="s3"){
			$rootScope.s3OutputConfig.aliasName=$rootScope.aliasName;;
			$rootScope.s3OutputConfig.userId=$rootScope.user.userId
			objToInsertData.aws=$rootScope.s3OutputConfig;	
			console.log("AWS DATA TO BE INSERTED "+objToInsertData.aws)
		}
		
		if($rootScope.outputLocation=="hdfs"){
			$rootScope.hdfsOutputConfig.aliasName=$rootScope.aliasName;;
			$rootScope.hdfsOutputConfig.userId=$rootScope.user.userId
			objToInsertData.hdfs=$rootScope.hdfsOutputConfig;	
			console.log("HDFS DATA TO BE INSERTED "+objToInsertData.hdfs)
		}
		
		
		console.log($rootScope.user.userId)
		$rootScope.clusterConfig.aliasName=$rootScope.aliasName;;
		$rootScope.clusterConfig.userId=$rootScope.user.userId
		objToInsertData.cluster=$rootScope.clusterConfig
		console.log("CLUSTER DATA TO BE INSERTED "+objToInsertData.Cluster)
		
		var jsonTosend= JSON.stringify(objToInsertData)
		console.log("OBJECT SENT "+jsonTosend)
		$http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/insertAllConfigurations', jsonTosend,  {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
		.success(function(data) {
			console.log(data);
		}).error(function(data) {
			console.log(data);
		});
	};*/
	
	
});