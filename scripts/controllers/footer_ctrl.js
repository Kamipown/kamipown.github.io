app.controller("footer_ctrl", function($scope, $http)
{
	$scope.phone_number = "100111011111110100011111000001";
	$scope.phone_decoded = false;

	$scope.email_address = "zbp.yvnzt@yroobyrq.yhnc";
	$scope.email_decoded = false;

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
		$http.post("https://formspree.io/" + $scope.decode_email(), data)
		.success(function(data, status)
		{
			console.log("Envoi du formulaire reussi : " + status);
			console.log(data);
		})
		.error(function(data, status)
		{
			console.log("Envoi du formulaire echoue : " + status);
			console.log(data);
		});
	}
});
