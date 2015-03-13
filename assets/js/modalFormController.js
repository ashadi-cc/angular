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