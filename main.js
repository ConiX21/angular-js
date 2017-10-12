var productApp = angular.module('productApp', ['ngRoute', 'ngAnimate']);

productApp.config(function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl : 'views/home/index.html'
        })
        .when('/mentions', {
            templateUrl : 'views/mention/index.html',
            controller : 'mentionCtrl'
        })
        .when('/contact', {
            templateUrl : 'views/contact/index.html',
            controller : 'contactCtrl'
        })
        .otherwise({
            redirectTo : '/home'
        })
})