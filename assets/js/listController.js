app.controller('listController',function($scope,$filter,$modal){
	$scope.customers = [
		{name:"Ashadi",address:"Indonesia",email:"gmail@ashadi.com",website:"http://www.berdikaritech.com",checked:false},
		{name:"Adi",address:"Indonesia",email:"gmail@adi.com",website:"http://www.berdikaritech.com",checked:false},
		{name:"Imam",address:"Indonesia",email:"gmail@imam.com",website:"http://www.berdikaritech.com",checked:false}
	];

	$scope.getTotal = function(){
		return $scope.customers.length;
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

