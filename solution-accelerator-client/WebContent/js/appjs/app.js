var app = angular.module('app', ['ngRoute',
                                 'app.filters',
                                 'app.services',
                                 'app.directives',
                                 'app.controllers',
                                 'ui.bootstrap']);

/*
app.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common["Content-Type"]='application/x-www-form-urlencoded; charset=UTF-8';
}])*/



app.config(function($routeProvider/*,$sceDelegateProvider*/) {
	/* $sceDelegateProvider.resourceUrlWhitelist(['**']);*/
	
	$routeProvider
					.when('/index', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=true;
	             		    	$rootScope.hideButons=true;
	             		     }
	             		   },
						 controller : 'loginPageController',
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
             		    	$rootScope.hideNavBarBtn=true;
             		    	 console.log($rootScope.flag);
             		    	 if($rootScope.flag == "false")
             		    		 {
             		    		   $rootScope.flag="false";
             		    		   $location.path('/index'); 
             		    		 }
             		     }
             		   },
             		   controller : 'homeController',
						templateUrl : 'view/Ingestion/home.html'
					}).when('/logs', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {	
	             		    	 $rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
							controller : 'logsController',
							templateUrl : 'view/logs.html'
						}).when('/visualizationOptions', {
						resolve :
             		   {
             		     check : function($location,$rootScope)
             		     {	
             		    	 $rootScope.hideNavBarBtn=false;
             		    	 console.log($rootScope.flag);
             		    	 if($rootScope.flag == "false")
             		    		 {
             		    		   $rootScope.flag="false";
             		    		   $location.path('/index'); 
             		    		 }
             		     }
             		   },
						templateUrl : 'view/Visualization/visualizationOptions.html'
					}).when('/dispatchToStaticVisualizationPg1', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {	
	             		    	 $rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
	             		   	controller : 'staticVisualizationControllerPg1',
							templateUrl : 'view/Visualization/staticVisualizationPg1.html'
						}).when('/dispatchToStaticVisualizationPg2', {
							resolve :
		             		   {
		             		     check : function($location,$rootScope)
		             		     {	
		             		    	 $rootScope.hideNavBarBtn=false;
		             		    	 console.log($rootScope.flag);
		             		    	 if($rootScope.flag == "false")
		             		    		 {
		             		    		   $rootScope.flag="false";
		             		    		   $location.path('/index'); 
		             		    		 }
		             		     }
		             		   },
		             		   	controller : 'staticVisualizationControllerPg2',  // in visualizationGraph folder
								templateUrl : 'view/Visualization/staticVisualizationPg2.html'
							}).when('/dispatchToStreamingVisualization', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {	
	             		    	 $rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
	             		   	controller : 'streamingVisualizationController',
							templateUrl : 'view/Visualization/streamingVisualization.html'
						})
					.when('/dispatchToSelectOutput', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						templateUrl : 'view/Ingestion/selectoutputloc.html'
					})
					.when('/CleanDataHome', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
	             		  controller : 'cleanDataController',
						templateUrl : 'view/Cleaning/CleanHome.html'
					})
					.when('/cleanConfigurationSource', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
	             		  controller : 'cleanDataController',
						templateUrl : 'view/Cleaning/cleanInputSource.html'
					})
					.when('/cleaningWays', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
	             		  controller : 'cleanDataController',
						templateUrl : 'view/Cleaning/CleaningWays.html'
					})
					.when('/sparkUI', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'sparkUIController',
						templateUrl : 'view/sparkui.html'
					}).when('/sparkResMng', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'sparkResMngController',
						templateUrl : 'view/sparkResMng.html'
					})
					.when('/browseHDFS', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
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
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
	             		  controller : 'ingestionController',
						templateUrl : 'view/Ingestion/ingestion.html'
					})
					.when('/dispatchTos3OutputLocation', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 's3LocationController',
						templateUrl : 'view/Ingestion/s3OutputLocation.html'
					})
					.when('/dispatchToHdfsOutputLocation', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'hdfsLocationController',
						templateUrl : 'view/Ingestion/hdfsOutputLocation.html'
					})
					.when('/dispatchToDatabase', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'dbConfigController',
						templateUrl : 'view/Ingestion/dbConfig.html'
					})
					.when('/dispatchToEmail', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'emailSourceController',
						templateUrl : 'view/Ingestion/emailsource.html'
					})
					.when('/dispatchToTwitter', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'twitterController',
						templateUrl : 'view/Ingestion/twittersource.html'
					})
					.when('/dispatchToCEP', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
	             		    	 console.log($rootScope.flag);
	             		    	 if($rootScope.flag == "false")
	             		    		 {
	             		    		   $rootScope.flag="false";
	             		    		   $location.path('/index'); 
	             		    		 }
	             		     }
	             		   },
						controller : 'cepController',
						templateUrl : 'view/Ingestion/cepSource.html'
					})
					.when('/dispatchToSparkJobServerLogs', {
						resolve :
	             		   {
	             		     check : function($location,$rootScope)
	             		     {
	             		    	$rootScope.hideNavBarBtn=false;
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






//=============================================================Controllers===============================================================//

















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






/*app.controller("ConfigController",function($rootScope, $scope, $http) {
	$rootScope.dbConfig.dbtable = "item"
		$rootScope.dbConfig.partitionColumn = "sad"
			$scope.processConfiguration = function() {
		var dbJSON = JSON.stringify($rootScope.dbConfig);
		console.log(dbJSON);
		$http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/db',dbJSON).success(function(data) {
			alert(data);
			$rootScope.dbConfig = null
		}).error(function(data) {
			console.log(data);
		});
	};

	$scope.insertDatabaseConfiguration = function() {
		var dbJSON = JSON.stringify($rootScope.dbConfig);
		console.log(dbJSON);
		$http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/insertdbconfiguration',
				dbJSON).success(function(data) {
					alert(data);
					$rootScope.dbConfig = null
				}).error(function(data) {
					console.log(data);
				});
	};
});*/



/*app.controller("EmailSourceController", function($scope, $http, $rootScope) {
	$scope.emailSource = new Object();
	$scope.emailSource.s3Location = $rootScope.s3Location
	$scope.emailSource.awsAccessKey = $rootScope.awsaccesskey
	$scope.emailSource.awsSecretKey = $rootScope.awssecretkey
	$scope.processEmail = function() {
		var emailJSON = JSON.stringify($scope.emailSource);
		console.log(emailJSON);
		$http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/email',
				emailJSON).success(function(data) {
					alert(data);
					$scope.emailSource = null;
				}).error(function(data) {
					console.log(data);
				});
	};

});*/

