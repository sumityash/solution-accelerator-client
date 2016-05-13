var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider/*,$sceDelegateProvider*/) {
	/* $sceDelegateProvider.resourceUrlWhitelist(['**']);*/
	
	$routeProvider
					.when('/index', {
						templateUrl : 'view/LoginPage.html'
					})
					.when('/dispatchToRegistrationPage', {
						templateUrl : 'view/Registration.html'
					})
					.when('/dispatchToHome', {
						resolve :
             		   {
             		     check : function($location,$rootScope)
             		     {
             		    	 console.log($rootScope.flag);
             		    	 if($rootScope.flag == "false")
             		    		 {
             		    		   $rootScope.flag="false";
             		    		   $location.path('/index'); 
             		    		 }
             		     }
             		   },
             		   controller : 'homeController',
						templateUrl : 'view/home.html'
					})
					.when('/dispatchToSelectOutput', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						templateUrl : 'view/selectoutputloc.html'
					})
					.when('/sparkUI', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'SparkUIController',
						templateUrl : 'view/sparkui.html'
					})
					.when('/browseHDFS', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'browseHDFSController',
						templateUrl : 'view/browseHDFS.html'
					})
					.when('/dispatchToIngestion', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						templateUrl : 'view/ingestion.html'
					})
					.when('/dispatchTos3OutputLocation', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 's3LocationController',
						templateUrl : 'view/s3OutputLocation.html'
					})
					.when('/dispatchToHdfsOutputLocation', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'hdfsLocationController',
						templateUrl : 'view/hdfs.html'
					})
					.when('/dispatchToCluster', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'clusterController',
						templateUrl : 'view/clusterdetails.html'
					})
					.when('/dispatchToClusterContext', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'clusterContextController',
						templateUrl : 'view/clusterContextDetails.html'
					})
					.when('/dispatchToDatabase', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'dbConfigController',
						templateUrl : 'view/dbConfig.html'
					})
					.when('/dispatchToEmail', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'EmailSourceController',
						templateUrl : 'view/emailsource.html'
					})
					.when('/dispatchToTwitter', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'TwitterSourceController',
						templateUrl : 'view/twittersource.html'
					})
					.when('/dispatchToSparkJobServerLogs', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'sparkLogsController',
						templateUrl : 'view/sparkJobServerLogs.html'
					})
					.otherwise({
						redirectTo : 'index'
					});
				
				});

app.factory('FetchConfigurationsFactory',['$http','$q','$rootScope',function($http,$q,$rootScope) {
	
    return {
    	fetchDatabaseConfiguration: function() {
    		var userLoggedInId=$rootScope.user.userId;
    		
    		return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/fetchDatabaseConfiguration',params: {userId: userLoggedInId}})
    		.then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while fetching dbConfig');
                        return $q.reject(errResponse);
                    }
            );
        },
    
        fetchEmailConfiguration: function() {
        	var userLoggedInId=$rootScope.user.userId
        	return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/fetchEmailConfiguration',params: {userId: userLoggedInId}})
		.then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.error('Error while fetching emailConfig');
                    return $q.reject(errResponse);
                }
        );
    },
    
    fetchAWSConfiguration: function() {
    	var userLoggedInId=$rootScope.user.userId
    	return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/fetchAWSConfiguration',params: {userId: userLoggedInId}})
		.then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.error('Error while fetching AWSConfig');
                    return $q.reject(errResponse);
                }
        );
    },
    
    fetchClusterConfiguration: function() {
    	var userLoggedInId=$rootScope.user.userId
    	return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/fetchClusterConfiguration',params: {userId: userLoggedInId}})
		.then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.error('Error while fetching clusterConfig');
                    return $q.reject(errResponse);
                }
        );
    },
    
    fetchTwitterConfiguration: function() {
    	var userLoggedInId=$rootScope.user.userId
    	return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/fetchTwitterConfiguration',params: {userId: userLoggedInId}})
		.then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.error('Error while fetching twitterConfig');
                    return $q.reject(errResponse);
                }
        );
    }
     
    };
}]);

app.run(function($rootScope, $http,$sce,FetchConfigurationsFactory,$window) {
	$rootScope.serverAppIp="YI1004600DT";
	$rootScope.flag = "false";
	$rootScope.userOptions=false;
	$rootScope.DbInsertisHidden = true;
	$rootScope.DbUpdateisHidden = true;
	$rootScope.dataSource;
	$rootScope.outputLocation;
	$rootScope.user=new Object();
	
	$rootScope.dbConfig=[];
	$rootScope.emailConfig=[];
	$rootScope.s3OutputConfig=[];
	$rootScope.hdfsOutputConfig=[];
	$rootScope.clusterConfig=[];
	$rootScope.twitterConfig=[];

	
	$rootScope.validate = function() {
	
		$rootScope.user.userId=0
		$rootScope.user.name=""
		$rootScope.user.contactNumber=0
		$rootScope.user.companyName="";
		var userJSON = JSON.stringify($rootScope.user);
		console.log(userJSON);
		$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/validate',userJSON).success(function(response) {
			console.log("USER "+response)
			
			if(response!="null")
		{
			$rootScope.userOptions=true;
			$rootScope.user = response
			console.log($rootScope.user.userId)
			
			$rootScope.flag="true";
			$window.location.href = '#dispatchToHome';
		}
			else
				{
				$window.location.href = '#index';
				}
			
		}).error(function(response) {
			console.log(response);
		});
	};
	
	$rootScope.newRegistration = function() {
		var userJSON = JSON.stringify($rootScope.user);
		console.log(userJSON);
		$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/register',userJSON).success(function(response) {
			console.log("USER "+response)
			$rootScope.user = null
			$window.location.href = '#index';
			
		}).error(function(response) {
			console.log(response);
		});
	};
	
	$rootScope.logOutUser = function() {
		$rootScope.user = null
		$window.location.href = '#index';
		$rootScope.userOptions=false;
		$rootScope.flag="false";
		
	};
	
	
	$rootScope.fetchAllConfigurations=function(){
		
		FetchConfigurationsFactory.fetchDatabaseConfiguration() .then(
           function(d) {
                	
              if(d!="null")
                {
                	$rootScope.dbConfig = d;
                	/*var dbUrlArray=$rootScope.dbConfig.dbUrl.split('?') //Splitting the DbUrl which contain the Username and Password 
                   	 $rootScope.urlToShow = dbUrlArray[0] //user will only be able to see the URL String not username and password
*/               	}
              else
            	  $rootScope.dbConfig= new Object();
                	
                	/*angular.forEach(d.array, function(value, key){
                	      console.log(value)
                	   });*/
               },
                function(errResponse){
                    console.error('Error while fetching DbConfig');
                }
       );
		
		FetchConfigurationsFactory.fetchEmailConfiguration() .then(
                function(d) {
                	
                	if(d!="null")
                		$rootScope.emailConfig = d;
                	else
                		$rootScope.emailConfig = new Object();
               },
                function(errResponse){
                    console.error('Error while fetching emailConfig');
                }
       );
		
		FetchConfigurationsFactory.fetchAWSConfiguration() .then(
                function(d) {
                	if(d!="null")
                		$rootScope.s3OutputConfig = d;
                	else
                		$rootScope.s3OutputConfig = new Object();
               },
                function(errResponse){
                    console.error('Error while fetching aws Config');
                }
       );
		
		FetchConfigurationsFactory.fetchClusterConfiguration() .then(
                function(d) {
                	if(d!="null")
                	$rootScope.clusterConfig = d;
                	else
                		$rootScope.clusterConfig = new Object();
               },
                function(errResponse){
                    console.error('Error while fetching cluster Config');
                }
       );
		
		FetchConfigurationsFactory.fetchTwitterConfiguration() .then(
                function(d) {
                	if(d!="null")
                	$rootScope.twitterConfig = d;
                	else
                		$rootScope.twitterConfig = new Object();
               },
                function(errResponse){
                    console.error('Error while fetching twitter Config');
                }
       );
	}
	
})
//=============================================================Controllers===============================================================//
app.controller("sparkLogsController",function() {
	
})


app.controller("s3LocationController",function($rootScope) {
	
	$rootScope.outputLocation="s3"
	
})

app.controller("hdfsLocationController",function($rootScope) {
	
	$rootScope.outputLocation="hdfs"
	
})

app.controller("homeController",function($scope, $http, $rootScope) {
	$('#clusterModal').modal('show');
	$scope.validateClusterIP= function()
	{
		$('#clusterModal').modal('hide');
	}
})

app.controller("SparkUIController",function($scope, $http, $rootScope) {
	$scope.sparkUI= true;	
	if($rootScope.clusterConfig.masterNodeUrl!=undefined){
		$('#iframe').attr('src', "http://"+$rootScope.clusterConfig.masterNodeUrl+":8090")
		$scope.sparkUI= false
	};
})

app.controller("browseHDFSController",function($scope, $http, $rootScope) {
	$scope.hdfsUI= true;	
	if($rootScope.clusterConfig.masterNodeUrl!=undefined){
		var url="http://"+$rootScope.clusterConfig.masterNodeUrl+":50070/explorer.html#/"
		console.log(url)
		$('#iframe').attr('src', url)
		$scope.hdfsUI= false
	};
})
app.controller("clusterController", function($rootScope,$scope, $http) {
	$scope.showResult=true;
	$scope.processConfiguration	 = function() {
		/*var f =document.getElementById('file')
		angular.forEach(f.files,function(file,index){
					console.log(file.name +" RECEIVED")
					$rootScope.clusterConfig.jarName=file.name.replace(".jar","");
					var url= $rootScope.clusterConfig.masterNodeUrl+"/jars/"+$rootScope.clusterConfig.jarName
					r = new FileReader();
					r.readAsBinaryString(file);
					r.onloadend = function(e){
					    var data = e.target.result;
						console.log(url);
						
						$http({method: 'POST', url: url,transformResponse: [function(data){return data}], data: data}).success(function(data) {
							console.log("SUCCESSFULL "+data)
						}).error(function(data) {
							console.log("ERROR "+data);
						});
						
						$scope.submitJar()
					  }
				});*/
		
		var objectToSubmit = new Object()
		/*Checking what is the data Source and setting it in objectToSubmit Object*/
		if($rootScope.dataSource=="db"){	
		/*	objToInsertData.driver=$rootScope.dbConfig.driver;
			objToInsertData.driver=$rootScope.dbConfig.driver;
			objToInsertData.dbUrl=$rootScope.dbConfig.dbUrl;
			objToInsertData.table="item";*/
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
		
			var jsonToSubmit= JSON.stringify(objectToSubmit)
			console.log(jsonToSubmit)
				$('#myModal').modal('show');
			var urlToSubmitOnline="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=dbProcess&classPath=com.yash.db_process.App&sync=true"
			console.log("urlToSubmitOnline: "+urlToSubmitOnline)
			$scope.showResult=true
			$http({method: 'POST', url: urlToSubmitOnline,transformResponse: [function(data){return data}],data:jsonToSubmit})
			.success(function(data) {
				console.log(data)
				$scope.showResult=false
				document.getElementById("showResult").value="Job has been completed successfully"
				$scope.showResult=false
				$('#myModal').modal('hide');
			}).error(function(data) {
				$scope.showResult=false
				console.log(data);
				document.getElementById("showResult").value=data
				$scope.showResult=false
				$('#myModal').modal('hide');
			});
		
		}
		/*Checking what is the OutputLocation and setting it in objectToSubmit Object*/
		if($rootScope.outputLocation=="hdfs"){
		console.log($rootScope.hdfsOutputConfig.hdfsLocation)
		/*objectToSubmit=angular.extend(objectToSubmit,$rootScope.s3OutputConfig)*/
		objectToSubmit.destination=$rootScope.hdfsOutputConfig.hdfsLocation
		
			var jsonToSubmit= JSON.stringify(objectToSubmit)
			console.log(jsonToSubmit)
				$('#myModal').modal('show');
			var urlToSubmitOnline="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=db-hdfs-Process&classPath=com.spark.App&sync=true"
			console.log("urlToSubmitOnline: "+urlToSubmitOnline)
			$scope.showResult=true
			$http({method: 'POST', url: urlToSubmitOnline,transformResponse: [function(data){return data}],data:jsonToSubmit})
			.success(function(data) {
				console.log(data)
				$scope.showResult=false
				document.getElementById("showResult").value="Job has been completed successfully"
				$scope.showResult=false
				$('#myModal').modal('hide');
			}).error(function(data) {
				$scope.showResult=false
				console.log(data);
				document.getElementById("showResult").value=data
				$scope.showResult=false
				$('#myModal').modal('hide');
			});
		}
	};
		
	/*	$scope.submitJar= function()
		{	}*/
		
		
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
			
			/*if($rootScope.outputLocation=="hdfs"){
				objToInsertData.dbConfig=$rootScope.hdfsOutputConfig;	
				}*/
			console.log($rootScope.user.userId)
			$rootScope.clusterConfig.aliasName=$rootScope.aliasName;;
			$rootScope.clusterConfig.userId=$rootScope.user.userId
			objToInsertData.cluster=$rootScope.clusterConfig
			console.log("CLUSTER DATA TO BE INSERTED "+objToInsertData.Cluster)
			
			var jsonTosend= JSON.stringify(objToInsertData)
			console.log("OBJECT SENT "+jsonTosend)
			$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/insertAllConfigurations', jsonTosend)
			.success(function(data) {
				console.log(data);
			}).error(function(data) {
				console.log(data);
			});
		};

		
		
});

/*app.controller("clusterContextController", function($rootScope, $scope, $http) {
		$rootScope.dbConfig.dbTable = "sadsd"
		$scope.hideProcessBtn=true;
		$scope.hideSubmitBtn=false;
		$rootScope.aliasName;
			
		$scope.createContext = function() {
			var url= $rootScope.clusterConfig.masterNodeUrl+"/contexts/"+$rootScope.clusterConfig.contextUrl+"?numCores="+$rootScope.clusterConfig.coresPerCPU+"&memPerNode="+$rootScope.clusterConfig.memoryPerNode+"&spark.executor.instances="+$rootScope.clusterConfig.sparkExecutorInstance
			console.log(url)
			$http({method: 'POST', url: url,transformResponse: [function(data){return data}]})
			.success(function(data) {
				console.log(data)
				$scope.hideSubmitBtn = true;
				$scope.hideProcessBtn = false
			}).error(function(data) {
				console.log(data);
			});
	};
		
		
	 Rest call to submit the jar and process further
	$scope.processConfiguration= function()
	{
		var urlToSubmit= $rootScope.clusterConfig.masterNodeUrl+"/jobs?appName="+$rootScope.clusterConfig.jarName+"&classPath="+$rootScope.clusterConfig.jarClassPath+"&context="+$rootScope.clusterConfig.context+"&sync=true"
		$http({method: 'POST', url: urlToSubmit,transformResponse: [function(data){return data}]})
		.success(function(data) {
			console.log(data)

		}).error(function(data) {
			console.log(data);
		});
	}
	
	//Saving all the data from preview page
	});*/

app.controller("dbConfigController",function($scope, $http, $rootScope) {
	$rootScope.dataSource="db"
	$scope.createURLDisabled= true; //Create URL button will be disabled initially it will be enable once the user will select DataBase Type
	$scope.databaseList = []
	$scope.tableList = []
	/*$scope.processURL = function() {
		if ($rootScope.dbConfig.driver == "com.mysql.jdbc.Driver") {
			$scope.urlToGetDatabaseNames="jdbc:mysql://"+ $scope.host + ":" + $scope.port+"-"+$scope.username+"-"+$scope.password
			$rootScope.urlToShow = "jdbc:mysql://"+ $scope.host + ":" + $scope.port +"/"+$scope.database;
			$rootScope.dbConfig.dbUrl = $rootScope.urlToShow +"?user=" + $scope.username + "&password="+ $scope.password
		} else if ($rootScope.dbConfig.driver == "oracle.jdbc.driver.OracleDriver") {
			$scope.urlToGetDatabaseNames="jdbc:oracle:"+ $rootScope.driverType + ":@" + $scope.host+ ":" + $scope.port+"-"+$scope.username+"-"+$scope.password
			$rootScope.urlToShow = "jdbc:oracle:"+ $rootScope.driverType + ":@" + $scope.host+ ":" + $scope.port+"/"+$scope.database;
				$rootScope.dbConfig.dbUrl = $rootScope.urlToShow+ "?user=" + $scope.username + "&password="+ $scope.password
		}
	};*/
	
	/*Function to show databases name Dynamically*/
	$scope.retreiveDatabase = function() {
		if ($rootScope.dbConfig.driver == "com.mysql.jdbc.Driver") {
			$scope.urlToGetDatabaseNames="jdbc:mysql://"+ $rootScope.dbConfig.hostIp + ":" + 3306+"~"+$rootScope.dbConfig.username+"~"+$rootScope.dbConfig.password
		} else if ($rootScope.dbConfig.driver == "oracle.jdbc.driver.OracleDriver") {
			$scope.urlToGetDatabaseNames="jdbc:oracle:"+ $scope.oracleDriverType + ":@" + $rootScope.dbConfig.hostIp+ ":" + 1521+"~"+$rootScope.dbConfig.username+"~"+$rootScope.dbConfig.password
		}else{console.log("driver is not set")}
		console.log($scope.urlToGetDatabaseNames)
		$('#myModal').modal('show');
		$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/getDatabase',$scope.urlToGetDatabaseNames).success(function(response) {
					console.log(response)
					var obj = response
					$scope.databaseList = obj
					$('#myModal').modal('hide');
				}).error(function(data) {
					console.log(data);
					$('#myModal').modal('hide');
				});
	};
	
	
	/*Function to show databases name Dynamically*/
	$scope.retreiveTables = function() {
		if ($rootScope.dbConfig.driver == "com.mysql.jdbc.Driver") {
			$scope.urlToGetDatabaseNames="jdbc:mysql://"+ $rootScope.dbConfig.hostIp + ":" + 3306+"/"+$rootScope.dbConfig.database+"~"+$rootScope.dbConfig.username+"~"+$rootScope.dbConfig.password
		} else if ($rootScope.dbConfig.driver == "oracle.jdbc.driver.OracleDriver") {
			$scope.urlToGetDatabaseNames="jdbc:oracle:"+ $scope.drivertype + ":@" + $rootScope.dbConfig.hostIp+ ":" + 1521+"/"+$rootScope.dbConfig.database+"~"+$rootScope.dbConfig.username+"~"+$rootScope.dbConfig.password
		}
		$('#myModal').modal('show');
		$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/getTables',$scope.urlToGetDatabaseNames).success(function(response) {
					console.log(response)
					if(response!="No Tables Present"){
					var obj = response
					$scope.tableList = obj
					}
					$('#myModal').modal('hide');
				}).error(function(data) {
					console.log(data);
					$('#myModal').modal('hide');
				});
	};
	
	/*To show Database Type we are maintaining a list which contain object with attribute Type and driverClass
	 *In database driverClass is saved*/
	$scope.databaseDriver = [ {type : "MySQL",driverClass : "com.mysql.jdbc.Driver"}, {type : "Oracle",driverClass : "oracle.jdbc.driver.OracleDriver"} ]
	/*For setting dbConfig.driver*/
	$scope.setDbDriver = function() {
	/*	when user select any option in 'Database Type' input,the value that is set is an object that is provided in list 'databaseDriver' in model driverType
		that's why here that object attribute 'driverClass' is set as 'dbConfig.driver'*/
		try{
			console.log($scope.driverType)
			console.log($scope.driverType.driverClass)
			$rootScope.dbConfig.driver = $scope.driverType.driverClass
			$rootScope.driverType=$scope.driverType
			$scope.createURLDisabled= false;
			}
		catch(e){$scope.createURLDisabled= true;}
	};
	
	/*Setting the driverType Model in Select as the object which has same driverClass in databaseDriver List */
	angular.forEach($scope.databaseDriver,function(value,index){
		if (value.driverClass==$rootScope.dbConfig.driver)
			$scope.driverType= value
	});
	if($scope.driverType!=undefined){$scope.createURLDisabled= false;}
});




app.controller("ConfigController",function($rootScope, $scope, $http) {
	$rootScope.dbConfig.dbtable = "item"
		/*$rootScope.dbConfig.partitionColumn = "sad"*/
			$scope.processConfiguration = function() {
		var dbJSON = JSON.stringify($rootScope.dbConfig);
		console.log(dbJSON);
		$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/db',dbJSON).success(function(data) {
			alert(data);
			$rootScope.dbConfig = null
		}).error(function(data) {
			console.log(data);
		});
	};

	$scope.insertDatabaseConfiguration = function() {
		var dbJSON = JSON.stringify($rootScope.dbConfig);
		console.log(dbJSON);
		$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/insertdbconfiguration',
				dbJSON).success(function(data) {
					alert(data);
					$rootScope.dbConfig = null
				}).error(function(data) {
					console.log(data);
				});
	};
});



/*app.controller("EmailSourceController", function($scope, $http, $rootScope) {
	$scope.emailSource = new Object();
	$scope.emailSource.s3Location = $rootScope.s3Location
	$scope.emailSource.awsAccessKey = $rootScope.awsaccesskey
	$scope.emailSource.awsSecretKey = $rootScope.awssecretkey
	$scope.processEmail = function() {
		var emailJSON = JSON.stringify($scope.emailSource);
		console.log(emailJSON);
		$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/email',
				emailJSON).success(function(data) {
					alert(data);
					$scope.emailSource = null;
				}).error(function(data) {
					console.log(data);
				});
	};

});*/

/*app.controller("TwitterSourceController", function($scope, $http, $rootScope) {
	$scope.twitterSource = new Object();
	$scope.twitterSource.s3Location = $rootScope.s3Location
	$scope.twitterSource.awsAccessKey = $rootScope.awsaccesskey
	$scope.twitterSource.awsSecretKey = $rootScope.awssecretkey
	$scope.processTwitter = function() {
		$scope.twitterSource.keywords = "[" + $scope.twitterSource.keywords
		+ "]"
		var twitterJSON = JSON.stringify($scope.twitterSource);
		console.log(twitterJSON);
		$http.post('http://'+$rootScope.serverAppIp+':9090/solutionAccelerator/twitter',
				twitterJSON).success(function(data) {
					alert(data);
					$scope.twitterSource = null;
				}).error(function(data) {
					console.log(data);
				});
	};

});*/