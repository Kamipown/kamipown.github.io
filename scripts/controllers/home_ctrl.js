app.controller("home_ctrl", function($scope, $timeout)
{
	$scope.init = function()
	{
		$timeout(function()
		{
			document.getElementById("cpp_progress").style.width = "80%";
			document.getElementById("c_progress").style.width = "99%";
			document.getElementById("js_progress").style.width = "75%";
			document.getElementById("unity_progress").style.width = "50%";
			document.getElementById("ue4_progress").style.width = "40%";
			document.getElementById("sdl2_progress").style.width = "85%";
		}, 500);
	}
});
