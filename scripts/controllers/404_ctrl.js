app.controller("404_ctrl", function($scope, $interval, $location)
{
	$scope.remaining_time = "5 secondes";
	var sec = 4;
	var int;

	$scope.deduct = function()
	{
		int = $interval(function()
		{
			$scope.remaining_time = sec > 1 ? sec + " secondes" : sec + " seconde";
			if (sec == 0)
				$location.path("/");
			--sec;
		}, 1000);
	}

	$scope.deduct();

	$scope.$on("$destroy", function()
	{
		$interval.cancel(int);
	});
});
