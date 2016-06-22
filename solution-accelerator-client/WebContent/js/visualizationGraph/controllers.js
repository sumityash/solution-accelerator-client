google.load('visualization', '1', {packages:['corechart']});
/*google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});*/
angular.module('app.controllers', []).
  controller('staticVisualizationControllerPg2',function($http,$scope,$rootScope,$timeout) {
	  $rootScope.showChart= false;
	  $scope.disableAggregate= false;
        //other functionalities
	  $scope.allColumns=[];
	  $scope.getAllColumns= function(){
		  console.log($rootScope.dynamicColumns)
		  angular.forEach($rootScope.dynamicColumns,function(innerArray,index){
			  var obj= new Object();
			  obj.column=innerArray[0];
			  obj.dataType=innerArray[1];
			  $scope.allColumns.push(obj);
		  });
		  
	  }
	  
	  $scope.getAllColumns();
	  
		$rootScope.objToSend.subGroupStr="N.A" //to be commented
		$rootScope.xColumns= $scope.allColumns //to be commented
		$rootScope.yColumns= $scope.allColumns //to be commented
		$rootScope.objToSend.aggregate="N.A"
		
			
		$scope.aggregateColumn=$scope.allColumns[0];
		$scope.groupByColumn=$scope.allColumns[0];
			
		/*	if($scope.aggregateColumn.dataType=="string")
			{
			$rootScope.objToSend.aggregate="count"
			}*/
		
			/*$scope.refreshBreakDown =function(){
				$rootScope.objToSend.subGroupStr="N.A"
			}*/
		/*	$scope.refreshAggregate =function(){
				if($scope.aggregateColumn.dataType !="string")
				{
					$rootScope.objToSend.aggregate="N.A"
				}
			}*/
			
		$scope.setXcolumn= function(){
			$rootScope.objToSend.subGroupStr="N.A" 
			$rootScope.objToSend.groupByColumn=$scope.groupByColumn.column;
		};
		
		$scope.setXcolumn();
		
		$scope.setYcolumn= function(){
			$scope.disableAggregate= false;
			if($scope.aggregateColumn.dataType!="integer" && $scope.aggregateColumn.dataType!="long" && $scope.aggregateColumn.dataType!="float"&& $scope.aggregateColumn.dataType!="double")
				{$scope.disableAggregate= true;
				/*$rootScope.objToSend.aggregate="count"*/
				$scope.count=true;
				$scope.sum =false;
				$scope.max=false;
				$scope.min=false;
				$scope.avg=false;
				}
			
			$rootScope.objToSend.aggregateColumn =$scope.aggregateColumn.column;
		};
		$scope.setYcolumn();
	
	var urlToSubmitOnline="http://"+$rootScope.clusterConfig.masterNodeUrl+":8090/jobs?appName=visualize&classPath=com.yash.app.App&sync=true&context=static&&timeout=60000"
	var urlToShowGraph='http://'+$rootScope.serverAppIp+'/solutionAccelerator/getLightning'
	
	$scope.checkBoxes= function(){
		$rootScope.objToSend.aggregate=[];
		$scope.firstArray=[];
		$scope.firstArray.push($rootScope.objToSend.groupByColumn);
		var isAggregateSet =false;
		
		console.log("count "+$scope.count);
		if($scope.count===true)
			{
			$rootScope.objToSend.aggregate.push("count")
			$scope.firstArray.push("Count of "+$rootScope.objToSend.aggregateColumn)
			isAggregateSet =true
			}
		if($scope.sum===true)
			{
			$rootScope.objToSend.aggregate.push("sum")
			$scope.firstArray.push("Sum of "+$rootScope.objToSend.aggregateColumn)
			isAggregateSet =true
			}
		if($scope.max===true)
			{
			$rootScope.objToSend.aggregate.push("max")
			$scope.firstArray.push("Max of "+$rootScope.objToSend.aggregateColumn)
			isAggregateSet =true
			}
		if($scope.min===true)
			{
			$rootScope.objToSend.aggregate.push("min")
			$scope.firstArray.push("Minimum of "+$rootScope.objToSend.aggregateColumn)
			isAggregateSet =true
			}
		if($scope.avg===true)
			{
			$rootScope.objToSend.aggregate.push("avg")
			$scope.firstArray.push("Average of "+$rootScope.objToSend.aggregateColumn)
			isAggregateSet =true
			}
		if(isAggregateSet ==false)
			{
				$scope.firstArray.push($rootScope.objToSend.aggregateColumn)
			}
	}
		
		$scope.getGraph= function(){
			$scope.error="";
			$scope.checkBoxes();
			
		console.log(urlToSubmitOnline)
		var jsonToSubmit= JSON.stringify($rootScope.objToSend)
		console.log(jsonToSubmit)
		$('#myModal').modal('show');
		$rootScope.processingStatus="Loading data...."
			$http({method: 'POST', url: urlToSubmitOnline,transformResponse: [function(data){return data}],data:jsonToSubmit})
		.success(function(data) {
					var objToSend= new Object();
					console.log(data);
					$scope.obj= angular.fromJson(data)
					console.log($scope.obj.result)
					if($scope.obj.result!="something went wrong()")
						{
						
						
								var arrToVisualize=  [ $scope.firstArray ];
										
					
								angular.forEach($scope.obj.result,function(value,index){
									try {
											var innerArray= value.replace("[",'').replace("]",'').split(",");
									    	var modifiedArray=[];
									    	/*var temp=innerArray[0];
						                	for (i = 0; i < innerArray.length-1; i++) { 
						                		temp+=innerArray[i].toString()+" ";
						                	}*/
									    	var isParsed= false
						                	modifiedArray[0]=innerArray[0].trim();
						                	for (i = 1; i < innerArray.length; i++) { 
						                		modifiedArray[i]=parseFloat(innerArray[i]);
						                		if(isParsed==false)
						                			{
							                			isParsed= isNaN(modifiedArray[i])
						                			}
						                	}
						                	
						                	var filter= (modifiedArray[0].includes("Not Defined") || modifiedArray[0].includes("(NULL)") || modifiedArray[0].includes("null")   || modifiedArray[0].includes("1991-12-01") ||modifiedArray[0]==="0.0f"||modifiedArray[0]==="0.0"||modifiedArray[0]==="0L"||modifiedArray[0]==="0" ||modifiedArray[0]===""||isParsed);
						                	console.log("Got cleaned values "+filter);
						                	if(!filter)
						                		{
						                			arrToVisualize.push(modifiedArray)
						                		}
									}
									catch(err) {
										console.log("in error");
										console.log(err.message);
									}
				                	
				            
								})
								console.log(arrToVisualize);
								$rootScope.showChart= true;
								
				                        
								
								var data = google.visualization.arrayToDataTable(arrToVisualize);
								var options = {
							          title: 'Company Performance',
							          width:1000,
							          height:480
							        };
							        var chart = {};
							        chart.data = data;
							        chart.options = options;
			
								$scope.chartTypes = [
							            { typeName: 'LineChart', typeValue: '1' },
							            { typeName: 'BarChart', typeValue: '2' },
							            { typeName: 'ColumnChart', typeValue: '3' },
							            { typeName: 'PieChart', typeValue: '4' }
							            ];
								$scope.selectType = function (type) {
							        	$scope.chart.type = type.typeValue;
									$scope.chart.typeName = type.typeName;
							    	}
							        chart.type = $scope.chartTypes[0].typeValue;
							        chart.typeName = $scope.chartTypes[0].typeName;
							        $scope.chartType = $scope.chartTypes[0];
								
							        $scope.chart = chart;
						}
					else
						{
							$scope.error="Sorry due to some internal error graph cannot be displayed";
						}
					$('#myModal').modal('hide');
					$rootScope.processingStatus="Processing Please Wait...";
					
					
				}
		
		)
		.error(function(data) {console.log(data);
			$('#myModal').modal('hide');
			$rootScope.processingStatus="Processing Please Wait...";
		})
	}

	
        
        
        
  })/*
  .controller('MyCtrl2', [function() {

  }])
  .controller('TabsDemoCtrl', ['$scope',function($scope) {
    

  $scope.navType = 'pills';
  }])*/;
