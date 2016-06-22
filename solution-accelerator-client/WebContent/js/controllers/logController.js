app.controller("logsController",function($scope, $http,$rootScope) {
	
	
	$scope.getLogs= function()
	
	{	$('#myModal').modal('show');
		$rootScope.processingStatus="Loading Logs ..."
		$http({method: 'GET', url: 'http://ec2-23-20-30-83.compute-1.amazonaws.com:9091/solutionAccelerator/getLogs'})
		.success(function(data) {
			console.log("hitted");
			console.log(data);
			$("#logTextbox").val(data);
			$('#myModal').modal('hide');
			$rootScope.processingStatus="Processing ..."
		}).error(function(data) {
			$("#logTextbox").val(data);
			console.log(data);
			console.log("hitted with error");
			$('#myModal').modal('hide');
			$rootScope.processingStatus="Processing ..."
		});	
	}

})