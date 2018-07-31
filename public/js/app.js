var app = angular.module("myApp",[]);
app.controller("myCtrl",function ($scope,$http) {
	 $scope.names = ["pune", "mumbai", "indores"];
	
	$scope.alldata = [];
	$scope.newdata = {};

		$scope.add=function(){
		if($scope.newdata._id)
		{
			$http({
				method : "PUT",
				url : "userwebservice",
				data : $scope.newdata
			}).then(function(res){
				for(var i = 0; i < $scope.alldata.length; i++)
				{
					if($scope.alldata[i]._id == $scope.newdata._id)
					{
						$scope.alldata[i]=$scope.newdata;
					}
				}
			});	
		}
		else
		{
			$http({
				method : "POST",
				url : "userwebservice",
				data : $scope.newdata
			}).then(function(res){
				$scope.alldata.push(res.data);
			});	
			
		}
	}

	$scope.getdata = function(){
		$http({
			method:"GET",
			url:"userwebservice"
		}).then(function(res){
			// console.log(res.data);
			$scope.alldata = res.data;
		});
	}

	$scope.delete = function(){
		$http({
			method:"DELETE",
			url:"userwebservice/?id="+$scope.selectedobj._id
			// data:$scope.selectedobj
		}).then(function(res){
			var i = 
			$scope.alldata.splice($scope.alldata.indexOf($scope.selectedobj), 1);
		});
	}

	$scope.askdel = function(obj){
		$scope.selectedobj = obj;
	}

	$scope.askupdate=function(obj){
		// $scope.newData=obj;
		angular.copy(obj, $scope.newdata);
	}

});