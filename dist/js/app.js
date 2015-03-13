var app = angular.module("myApp", ['ui.bootstrap']);
app.controller('listController',function($scope,$filter,$modal){
	$scope.customers = [
		{name:"Ashadi",address:"Indonesia",email:"gmail@ashadi.com",website:"http://www.berdikaritech.com",checked:false},
		{name:"Adi",address:"Indonesia",email:"gmail@adi.com",website:"http://www.berdikaritech.com",checked:false},
		{name:"Imam",address:"Indonesia",email:"gmail@imam.com",website:"http://www.berdikaritech.com",checked:false}
	];

	$scope.getTotal = function(){
		return $scope.customers.length;
	}

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
	     	var index = $scope.customers.indexOf(item); 
	     	$scope.customers[index] = customer;
	     });
	}

	$scope.remove = function(item){
		var index = $scope.customers.indexOf(item);
		$scope.customers.splice(index,1);
	}

	$scope.removeSelected = function(){
		var not_removed = $filter('filter')($scope.customers,{checked:false});
		$scope.customers = not_removed;

	}

	$scope.addNew = function(){
	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller:'modalFormController',
	      //windowClass:'modal fade in',
	      resolve: {
	      	customer: function(){
	      		return null;
	      	},
	      	title:function(){
	      		return 'New Data';
	      	}
	      }
	    });

	     modalInstance.result.then(function (customer) {
	     	customer.checked = false;
	     	$scope.customers.push(customer);
	     });
	}


});


app.controller('modalFormController',function($scope,$modalInstance,customer,title){
	$scope.tmp =12;
	$scope.customer = customer;
	$scope.title = title;
	$scope.ok = function(){
		$modalInstance.close($scope.customer);
	}

	$scope.cancel = function(){
		$modalInstance.dismiss('cancel');
	}
});