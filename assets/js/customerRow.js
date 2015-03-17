app.directive('rowCustomer', function(){
	return {
		restrict:'E',
		templateUrl:'templates/customers.html',
		scope:{
			custdata:'=info',
			filterdata:'=search'
		},
		controller:'rowController'
	};
});