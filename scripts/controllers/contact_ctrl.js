app.controller("contact_ctrl", function($scope, $timeout, $http)
{
	$scope.numero = "0000000000";
	$scope.update_numero = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	$scope.email_address = "zbp.yvnzt@yroobyrq.yhnc";
	$scope.email_decoded = false;

	$scope.show_form = true;
	$scope.show_form_process = false;
	$scope.show_form_success = false;
	$scope.show_form_error = false;


	$scope.display_phone = function()
	{
		for (var i = 0; i < 6; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 1, ++$scope.update_numero[0]);}, i * 50);
		for (var i = 0; i < 6; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 2, ++$scope.update_numero[1]);}, 300 + i * 50);
		for (var i = 0; i < 2; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 3, ++$scope.update_numero[2]);}, 600 + i * 50);
		for (var i = 0; i < 6; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 4, ++$scope.update_numero[3]);}, 700 + i * 50);
		for (var i = 0; i < 5; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 5, ++$scope.update_numero[4]);}, 1000 + i * 50);
		for (var i = 0; i < 2; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 6, ++$scope.update_numero[5]);}, 1250 + i * 50);
		for (var i = 0; i < 8; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 7, ++$scope.update_numero[6]);}, 1350 + i * 50);
		for (var i = 0; i < 6; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 8, ++$scope.update_numero[7]);}, 1750 + i * 50);
		for (var i = 0; i < 5; ++i)
			$timeout(function(){$scope.numero = update($scope.numero, 9, ++$scope.update_numero[8]);}, 2050 + i * 50);
	}
	$scope.display_phone();

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
		if (!data)
		{
			$scope.email_error = "(doit etre valide)";
			$scope.message_error = "(10 caractères minimum)";
			return ;
		}
		if (!data._replyto)
		{
			$scope.email_error = "(doit etre valide)";
			return ;
		}
		if (!data.message)
		{
			$scope.message_error = "(10 caractères minimum)";
			return ;
		}
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

String.prototype.replace_at = function(i, c)
{
    return (this.substr(0, i) + c + this.substr(i + c.length));
}

function update(str, i, c)
{
	return (str.replace_at(i, c.toString()));
}
