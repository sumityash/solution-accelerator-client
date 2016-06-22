app.factory('fetchConfigurationsFactory',['$http','$q','$rootScope',function($http,$q,$rootScope) {
	
    return {
    	fetchDatabaseConfiguration: function() {
    		var userLoggedInId=$rootScope.user.userId;
    		
    		return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+'/solutionAccelerator/fetchDatabaseConfiguration',params: {userId: userLoggedInId}})
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
        
        fetchHDFSConfiguration: function() {
    		var userLoggedInId=$rootScope.user.userId;
    		
    		return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+'/solutionAccelerator/fetchHDFSConfiguration',params: {userId: userLoggedInId}})
    		.then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while fetching hdfsConfig');
                        return $q.reject(errResponse);
                    }
            );
        },
    
        fetchEmailConfiguration: function() {
        	var userLoggedInId=$rootScope.user.userId
        	return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+'/solutionAccelerator/fetchEmailConfiguration',params: {userId: userLoggedInId}})
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
    	return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+'/solutionAccelerator/fetchAWSConfiguration',params: {userId: userLoggedInId}})
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
    	console.log("USER ID IN CLUSTER "+$rootScope.user.userId);
    	var userLoggedInId=$rootScope.user.userId
    	return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+'/solutionAccelerator/fetchClusterConfiguration',params: {userId: userLoggedInId}})
		.then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                	con
                    console.error('Error while fetching clusterConfig');
                    return $q.reject(errResponse);
                }
        );
    },
    
    fetchTwitterConfiguration: function() {
    	var userLoggedInId=$rootScope.user.userId
    	return	$http({method: 'GET', url: 'http://'+$rootScope.serverAppIp+'/solutionAccelerator/fetchTwitterConfiguration',params: {userId: userLoggedInId}})
		.then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.error('Error while fetching twitterConfig');
                    return $q.reject(errResponse);
                }
        );
    },
    
    validateUser: function(userJson) {
    	var urlBase='http://'+$rootScope.serverAppIp+'/solutionAccelerator/validate'
    	return $http.post(urlBase, userJson)
		.then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.error('Error while fetching user');
                    return $q.reject(errResponse);
                }
        );
    	}
    }
}]);
