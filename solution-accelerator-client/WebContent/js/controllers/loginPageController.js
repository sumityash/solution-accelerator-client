app.controller("loginPageController",function($rootScope,$scope,$http,$window/*,fetchConfigurationsFactory*/) {

	
	
	
	
	$rootScope.validate = function() {
		$rootScope.user.userId=0
		$rootScope.user.name=""
		$rootScope.user.contactNumber=0
		$rootScope.user.companyName="";
		var userJSON = JSON.stringify($rootScope.user);
		console.log(userJSON);
		$('#myModal').modal('show');
		$rootScope.processingStatus="Validating your credentials...."
		
			
			/*fetchConfigurationsFactory.validateUser(userJSON) .then(
	                function(d) {
	                	if(d!="null")
	                		{
		                		$rootScope.userOptions=true;
		    					$rootScope.user = d
		    					console.log($rootScope.user.userId)
		    					$('#loginModal').modal('hide');
		    					$rootScope.flag="true";
		    					$window.location.href = '#dispatchToHome';
	                		
	                		}
	                	
	                	else
	                		{
		                		console.log("Wrong Credentials");
		        				//$window.location.href = '#index';
		        				$rootScope.loginError="* you have provided wrong credentials"
	                		}
	               },
	                function(errResponse){
	            	   $('#myModal').modal('hide');
		       			$rootScope.processingStatus="processing...."
		       			$rootScope.loginError="*some internal Server problem occured"
		       			console.log(response);
	                }
	       );
		}*/
			
		$http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/validate',userJSON).success(function(response) {
			$('#myModal').modal('hide');
			$rootScope.processingStatus="processing...."
			console.log("USER "+response)
			
			if(response!="null")
				{
					$rootScope.userOptions=true;
					$rootScope.user = response
					console.log($rootScope.user.userId)
					$('#loginModal').modal('hide');
					$rootScope.flag="true";
					$window.location.href = '#dispatchToHome';
				}
			else
				{
				console.log("Wrong Credentials");
				//$window.location.href = '#index';
				$scope.loginError="* you have provided wrong credentials"
				}
			
		}).error(function(response) {
			$('#myModal').modal('hide');
			$rootScope.processingStatus="processing...."
			$scope.loginError="*some internal Server problem occured"
			console.log(response);
		});
	};
})