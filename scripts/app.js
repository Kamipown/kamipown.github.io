var app = angular.module("app", [/*"ngRoute"*/]);

// app.config(function($routeProvider)
// {
// 	$routeProvider.when("/", {templateUrl: "partials/home.html", controller: "home_ctrl"});
// 	$routeProvider.otherwise({templateUrl: "partials/notfound.html", controller: "notfound_ctrl"});
// });

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    document.getElementById("main_header").style.backgroundColor = "#55c";
}
else
{
    document.getElementById("main_header").style.backgroundColor = "#c55";
}