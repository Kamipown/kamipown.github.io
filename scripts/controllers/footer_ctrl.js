app.controller("footer_ctrl", function($scope, $http)
{
	$scope.phone_number = "100111011111110100011111000001";
	$scope.phone_decoded = false;

	$scope.email_address = "zbp.yvnzt@yroobyrq.yhnc";
	$scope.email_decoded = false;

	$scope.show_form = true;
	$scope.show_form_process = false;
	$scope.show_form_success = false;
	$scope.show_form_error = false;

	$scope.decode_phone = function()
	{
		if (!$scope.phone_decoded)
			$scope.phone_number = "0" + parseInt($scope.phone_number, 2);
		$scope.phone_decoded = true;
	}

	$scope.decode_email = function()
	{
		if (!$scope.email_decoded)
		{
			$scope.email_decoded = true;
			return (($scope.email_address = ($scope.email_address.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})).split("").reverse().join("")));
		}
		else
			return ($scope.email_address);
	}

	$scope.send_email = function(data)
	{
		$scope.show_form = false;
		$scope.show_form_process = true;
		$http.post("https://formspree.io/" + $scope.decode_email(), data)
		.success(function(data, status)
		{
			if (status == 200)
				$scope.display_form_success(data, status);
			else
				$scope.display_form_error(data, status);
		})
		.error(function(data, status)
		{
			$scope.display_form_error(data, status);
		});
	}

	$scope.display_form_success = function(data, status)
	{
		$scope.show_form_process = false;
		$scope.show_form_success = true;
		console.log("Envoi du formulaire reussi : " + status);
		console.log(data);
	}

	$scope.display_form_error = function(data, status)
	{
		$scope.show_form_process = false;
		$scope.show_form_error = true;
		console.log("Envoi du formulaire echoue : " + status);
		console.log(data);
	}
});
