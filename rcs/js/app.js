var app = angular.module("app", ["ngRoute", "audioModule"]);

app.config(function($routeProvider) {
	// HOME
	$routeProvider.when("/", {
		templateUrl: "html/home.html",
		controller: "homeCtrl"
	});
});

app.config(function($locationProvider) {
	$locationProvider.hashPrefix("");
});

app.run(function($rootScope, $location) {
	$rootScope.isActive = function(path) {
		return ($location.path() === path) ? "active" : "";
	};
});
