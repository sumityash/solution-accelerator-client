app.run(function($rootScope, $http,$sce,fetchConfigurationsFactory,$window,$route) {
	$rootScope.serverAppIp="yi1004600dt:9090";
	$rootScope.processingStatus="Processing Please Wait...";
	$rootScope.hideButons=true;
	$rootScope.hideNavBarBtn=true;
	$rootScope.flag = "false";
	$rootScope.userOptions=false;
	$rootScope.DbInsertisHidden = true;
	$rootScope.DbUpdateisHidden = true;
	$rootScope.dataSource;
	$rootScope.outputLocation;
	$rootScope.showClusterPrompt=false;
	$rootScope.hideFooter=false;
	
	
	$rootScope.Context=new Object();
	$rootScope.availableContext=[];
	
	$rootScope.user=new Object();
	$rootScope.userToRegister=new Object();	
	
	$rootScope.s3InputConfig=new Object();
	$rootScope.hdfsInputConfig=new Object();
	$rootScope.objectToClean=new Object();
	
	$rootScope.staticSource = true
	$rootScope.streamSource = true
	
	$rootScope.dbConfig=[];
	$rootScope.emailConfig=[];
	$rootScope.s3OutputConfig=[];
	$rootScope.hdfsOutputConfig=[];
	$rootScope.clusterConfig=[];
	$rootScope.twitterConfig=[];
	
	$rootScope.cepConfig=new Object();
	
	$rootScope.cepError=null;
	$rootScope.cleanedMessage=null;
	$rootScope.cleanErrorMessage=null;
	$rootScope.showCleanErrorMessage=true;
	/*$scope.showCleanedMessage=true;*/
	$rootScope.setColor=false;

	$rootScope.objToSend= new Object();// to be send when doing graphs visualization
	
	

	
	$rootScope.newRegistration = function() {
		  
		 
		  
		  var userRegisterJSON = JSON.stringify($rootScope.userToRegister);
		  console.log(userRegisterJSON);
		  $http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/register',userRegisterJSON).success(function(response) {
		   console.log("USER "+response)
		   $rootScope.userToRegister = new Object();
		   if(response=="Email Id already Exists")
		    {
		     $rootScope.registrationStatus=response;
		    }
		   else
		    {
		     $rootScope.registrationStatus=response;
		     $window.location.href = '#index';
		    }
		   
		  }).error(function(response) {
		   $rootScope.userToRegister = new Object();
		   console.log(response);
		  });
		 };
	
	$rootScope.logOutUser = function() {
		$rootScope.user = new Object();
		$rootScope.userToRegister=new Object();
		$rootScope.userOptions=false;
		$rootScope.flag="false";
		$rootScope.hideNavBarBtn=false;
		$window.location.href = '#index';
		location.reload();

	};
	
	$rootScope.fetchClusterDetails=function(){
		

		fetchConfigurationsFactory.fetchClusterConfiguration() .then(
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
		
		
	}
	
	$rootScope.fetchAllConfigurations=function(){
		
		fetchConfigurationsFactory.fetchDatabaseConfiguration() .then(
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
		
		fetchConfigurationsFactory.fetchEmailConfiguration() .then(
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
		
		fetchConfigurationsFactory.fetchAWSConfiguration() .then(
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
		
		
		fetchConfigurationsFactory.fetchTwitterConfiguration() .then(
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
		
		fetchConfigurationsFactory.fetchHDFSConfiguration() .then(
                function(d) {
                	if(d!="null")
                	$rootScope.hdfsOutputConfig = d;
                	else
                		$rootScope.hdfsOutputConfig = new Object();
               },
                function(errResponse){
                    console.error('Error while fetching HDFS Config');
                }
       );
	};
	
	$rootScope.staticContextExist=false;
	$rootScope.streamingContextExist=false;
	
	//GET Call to retreive existing context on the spark job server
	$rootScope.checkStaticContexts= function(){
		
		$http({method: 'GET', url: 'http://'+$rootScope.clusterConfig.masterNodeUrl+':8090/contexts',timeout: 1000})
		.then(
	            function(response){

           		
	            	if(response.data.length!=0)
	            		{
	            		 var i = response.data.length;
	            		    while (i--) {
	            		       if (response.data[i] === "static") {
	            		    	   $rootScope.staticContextExist=true;
	            		           console.log("STATIC CONTEXT EXISTS")
	            		       }
	            		    }
	    	            	if($rootScope.staticContextExist==false)
		            		{
		            		 $rootScope.createStaticContext()
		            		}
	            		}
	            	else
	            		{
	            		console.log("STATIC CONTEXT DOES NOT EXISTS")
	            		  $rootScope.createStaticContext();
	            		}

	            	
	            }, 
	            function(errResponse){
	            	$rootScope.hideButons=true;
	            	console.log("Problem while creating Context")
	            }
	    	);
		
	};
	
	
$rootScope.checkStreamingContexts= function(){
		
		$http({method: 'GET', url: 'http://'+$rootScope.clusterConfig.masterNodeUrl+':8090/contexts',timeout: 1000})
		.then(
	            function(response){

           		
	            	if(response.data.length!=0)
	            		{
	            		 var i = response.data.length;
	            		    while (i--) {
	            		  
	            		       if (response.data[i] === "streaming") {
	            		    	   $rootScope.streamingContextExist=true;
	            		           console.log("streaming CONTEXT EXISTS")
	            		       }
	            		    }
	    	            
			            	if($rootScope.streamingContextExist==false)
		            		{
		            		 $rootScope.createStreamingContext()
		            		}
	            		}
	            	else
	            		{
	            		console.log("Streaming Context Doesnot Exists")
	            		  $rootScope.createStreamingContext();
	            		}

	            	
	            }, 
	            function(errResponse){
	            	$rootScope.hideButons=true;
	            	console.log("Problem while creating Context")
	            }
	    	);
		
	};
	
	
	
	 $rootScope.createStaticContext=function(){
		 console.log("In createStaticContext");
			var urlToCreateContext="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/contexts/static?num-cpu-cores=2&memory-per-node=1g&spark.executor.instances=1"
			$('#myModal').modal('show');
			$rootScope.processingStatus="Creating Context for Static Sources.."
			$http({method: 'POST', url: urlToCreateContext,headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},transformResponse: [function(data){return data}]})
			.success(function(data) {
				
				console.log(" STATIC CONTEXT CREATED AT START "+data);
				
            	$('#myModal').modal('hide');
            	$rootScope.processingStatus="Processing...";
				
			}).error(function(data) {
				$('#myModal').modal('hide');
				console.log(" STATIC CONTEXT CREATION FAILED "+data);
				$rootScope.processingStatus="Processing...";
			});

		 };
	 
	 
			 $rootScope.createStreamingContext=function(){
				 console.log("In createStreamingContext");
				 $rootScope.processingStatus="Creating Context for Streaming Sources.."
					var urlToCreateContext="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/contexts/streaming?num-cpu-cores=2&memory-per-node=1g&spark.executor.instances=1"
					$('#myModal').modal('show');
					$rootScope.processingStatus="Processing.."
					$http({method: 'POST', url: urlToCreateContext,headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},transformResponse: [function(data){return data}]})
					.success(function(data) {
						$('#myModal').modal('hide');
						console.log(" streaming CONTEXT CREATED AT START "+data);
						$rootScope.processingStatus="Processing...";
						
					}).error(function(data) {
						$('#myModal').modal('hide');
						console.log(" streaming CONTEXT CREATION FAILED "+data);
						$rootScope.processingStatus="Processing...";
					});

				 };
	
})