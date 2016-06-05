app.controller("footer_ctrl", function($scope)
{
	$scope.phone_number = "100111011111110100011111000001";
	$scope.phone_displayed = false;

	$scope.display_phone = function()
	{
		if (!$scope.phone_displayed)
			$scope.phone_number = "0" + parseInt($scope.phone_number, 2);
		$scope.phone_displayed = true;
	}
});
