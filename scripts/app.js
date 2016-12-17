var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider)
{
	$routeProvider.when("/", {templateUrl: "partials/home.html"});
	$routeProvider.when("/projects", {templateUrl: "partials/projects.html"});
	$routeProvider.when("/contact", {templateUrl: "partials/contact.html", controller: "contact_ctrl"});
	$routeProvider.otherwise({templateUrl: "partials/404.html", controller: "404_ctrl"});
});
