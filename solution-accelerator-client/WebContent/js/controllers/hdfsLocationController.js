app.controller("hdfsLocationController",function($rootScope,$scope,$window,$http) {
	$rootScope.outputLocation="hdfs"
	$rootScope.showError=true;
	$rootScope.showResult=true;
	/*$rootScope.hdfsOutputConfig.hdfsLocation="";*/
	
	$scope.processConfiguration	 = function() {	
		var objectToSubmit = new Object()
		/*Checking what is the data Source and setting it in objectToSubmit Object*/
		if($rootScope.dataSource=="db"){	
			objectToSubmit.driver=$rootScope.dbConfig.driver
			objectToSubmit.hostIp=$rootScope.dbConfig.hostIp
			objectToSubmit.username=$rootScope.dbConfig.username
			objectToSubmit.password=$rootScope.dbConfig.password
			objectToSubmit.database=$rootScope.dbConfig.database
			objectToSubmit.table=$rootScope.dbConfig.table			
		}
		
		if($rootScope.dataSource=="email"){	
			objectToSubmit.emailConfig=$rootScope.emailConfig;
		}
		
		if($rootScope.dataSource=="twitter"){	
			objectToSubmit.twitterConfig=$rootScope.twitterConfig;
		}
		
		/*Checking what is the OutputLocation and setting it in objectToSubmit Object*/
		if($rootScope.outputLocation=="s3"){
		console.log($rootScope.s3OutputConfig)
		/*objectToSubmit=angular.extend(objectToSubmit,$rootScope.s3OutputConfig)*/
		objectToSubmit.s3Location=$rootScope.s3OutputConfig.s3Location
		objectToSubmit.awsAccessKey=$rootScope.s3OutputConfig.awsAccessKey
		objectToSubmit.awsSecretKey=$rootScope.s3OutputConfig.awsSecretKey
		}
		
		
		/*Checking what is the OutputLocation and setting it in objectToSubmit Object*/
		if($rootScope.outputLocation=="hdfs"){
		console.log($rootScope.hdfsOutputConfig.hdfsLocation)
		objectToSubmit.destination=$rootScope.hdfsOutputConfig.hdfsLocation
		/*objectToSubmit.fileName=$rootScope.hdfsOutputConfig.fileName*/
		}
			var jsonToSubmit= JSON.stringify(objectToSubmit)
			console.log(jsonToSubmit)
			
			if($rootScope.dataSource=="db" && $rootScope.outputLocation=="s3")
				{
					var urlToSubmitOnline="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=dbProcess&classPath=com.yash.db_process.App&sync=true&context=static&&timeout=60000"
				}
			if($rootScope.dataSource=="db" && $rootScope.outputLocation=="hdfs")
				{
					var urlToSubmitOnline="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=db-hdfs-Process&classPath=com.spark.App&sync=true&context=static&&timeout=60000"
				}
			
			console.log("urlToSubmitOnline: "+urlToSubmitOnline)
			$('#myModal').modal('show');
			$rootScope.showError=true
			$rootScope.showResult=true
			$http({method: 'POST', url: urlToSubmitOnline,transformResponse: [function(data){return data}],data:jsonToSubmit})
			.success(function(data) {
				$('#myModal').modal('hide');
				console.log(data)				
			/*	$scope.ab= JSON.parse(data)
				console.log($scope.ab.result);*/
				
				$scope.obj= angular.fromJson(data)
				console.log($scope.obj.result);
				$rootScope.dataColumns=[]
				var resStr="<tr>";
				var i=1;
				angular.forEach($scope.obj.result,function(value,index){
					if(value.indexOf("[")!= -1)
						{
							if(i==1){resStr=resStr.concat("</tr>")}
							var newObj= value.replace("[",'').replace("]",'').split(",");
							resStr= resStr.concat("<tr>")
							angular.forEach(newObj,function(innerValue,index){
							resStr=resStr.concat("<td>",innerValue,"</td>")
							});
							resStr= resStr.concat("</tr>")
							i=i+1
						}
					else
						{
						resStr=resStr.concat("<th>",value,"</th>")
						$rootScope.dataColumns.push(value)
						}					
				});
				$("#resultTable > tbody").html("");
				$('#resultTable').append(resStr);
				$rootScope.showResult=false
			}).error(function(data) {
				$rootScope.showError=false
				console.log(data);
				if(data==null){data="Some error occurred"};
				$("#showError").val(data);
				$rootScope.showError=false;
				$('#myModal').modal('hide');
			});		
	};		
		
		$scope.savePreviewedConfiguration= function()
		{
			var objToInsertData = new Object()
			/*Checking what is the data Source and setting it in objToInsertData Object*/
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
			}
			
			/*Checking what is the OutputLocation and setting it in objToInsertData Object*/
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
			$http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/insertAllConfigurations',jsonTosend,{headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
			.success(function(data) {
				console.log(data);
			}).error(function(data) {
				console.log(data);
			});
		};

	
})