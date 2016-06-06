app.controller("footer_ctrl", function($scope, $timeout)
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
			document.getElementById("footer_form").action = "https://formspree.io/" + ($scope.email_address.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})).split("").reverse().join("");
		$scope.email_decoded = true;
	}
});
