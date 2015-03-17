app.controller('rowController', function($scope,$modal){

	$scope.edit = function(item){
	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller:'modalFormController',
	      //windowClass:'modal fade in',
	      resolve: {
	      	customer: function(){
	      		return angular.copy(item);
	      	},
	      	title:function(){
	      		return 'Edit data';
	      	}
	      }
	    });

	     modalInstance.result.then(function (customer) {
	     	var index = $scope.custdata.indexOf(item); 
	     	$scope.custdata[index] = customer;
	     });
	}

	$scope.remove = function(item){
		var index = $scope.custdata.indexOf(item);
		$scope.custdata.splice(index,1);
	}

});