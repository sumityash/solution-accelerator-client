app.controller("dbConfigController",function($scope, $http, $rootScope,$window) {
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
	
	$scope.dispatchToSelectOutput=function(){
		$window.location.href = '#dispatchToSelectOutput';
	}
	
	$scope.emptyList=function(){
		$scope.databaseList = [];
		$scope.tableList = [];
	}
	
	$scope.emptyTables= function(){
		$scope.tableList = [];
	}
	/*Function to show databases name Dynamically*/
	$scope.retreiveDatabase = function() {
		if($scope.databaseList.length==0)
			{
				if ($rootScope.dbConfig.driver == "com.mysql.jdbc.Driver") {
					$scope.urlToGetDatabaseNames="jdbc:mysql://"+ $rootScope.dbConfig.hostIp + ":" + 3306+"~"+$rootScope.dbConfig.username+"~"+$rootScope.dbConfig.password
				} else if ($rootScope.dbConfig.driver == "oracle.jdbc.driver.OracleDriver") {
					$scope.urlToGetDatabaseNames="jdbc:oracle:"+ $scope.oracleDriverType + ":@" + $rootScope.dbConfig.hostIp+ ":" + 1521+"~"+$rootScope.dbConfig.username+"~"+$rootScope.dbConfig.password
				}else{console.log("driver is not set")}
				console.log($scope.urlToGetDatabaseNames)
				$('#myModal').modal('show');
				$rootScope.processingStatus="Fetching Database's ..."
				$http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/getDatabase',$scope.urlToGetDatabaseNames,{
				    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
				}).success(function(response) {
							console.log(response)
							if(response=="CONNECTION NOT ESTABLISHED WITH PROVIDED URL")
								{
									$scope.connectionError="CONNECTION NOT ESTABLISHED WITH PROVIDED details";
								}
							else
								{
								$scope.connectionError="";
								var obj = response
								$scope.databaseList = obj
								}

							$('#myModal').modal('hide');
							$rootScope.processingStatus="Processing...."
						}).error(function(data) {
							console.log(data);
							$('#myModal').modal('hide');
							$rootScope.processingStatus="Processing...."
						});
			}
	};
	
	
	/*Function to show databases name Dynamically*/
	$scope.retreiveTables = function() {
		if($rootScope.dbConfig.database!=undefined && $scope.tableList.length==0)
			{
				if ($rootScope.dbConfig.driver == "com.mysql.jdbc.Driver") {
					$scope.urlToGetDatabaseNames="jdbc:mysql://"+ $rootScope.dbConfig.hostIp + ":" + 3306+"/"+$rootScope.dbConfig.database+"~"+$rootScope.dbConfig.username+"~"+$rootScope.dbConfig.password
				} else if ($rootScope.dbConfig.driver == "oracle.jdbc.driver.OracleDriver") {
					$scope.urlToGetDatabaseNames="jdbc:oracle:"+ $scope.drivertype + ":@" + $rootScope.dbConfig.hostIp+ ":" + 1521+"/"+$rootScope.dbConfig.database+"~"+$rootScope.dbConfig.username+"~"+$rootScope.dbConfig.password
				}
				$('#myModal').modal('show');
				$rootScope.processingStatus="Fetching Table's ..."
				$http.post('http://'+$rootScope.serverAppIp+'/solutionAccelerator/getTables',$scope.urlToGetDatabaseNames,{
				    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
				}).success(function(response) {
							console.log(response)
							if(response!="No Tables Present"){
							var obj = response
							$scope.tableList = obj
							}
							$('#myModal').modal('hide');
							$rootScope.processingStatus="Processing...."
						}).error(function(data) {
							console.log(data);
							$('#myModal').modal('hide');
							$rootScope.processingStatus="Processing...."
						});
			}
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