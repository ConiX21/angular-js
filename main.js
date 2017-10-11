var productApp = angular.module('productApp', ['ngRoute', 'ngAnimate']);

productApp.config(function($routeProvider){
    $routeProvider
        .when('/home',{
            template : '<h1>Home page</h1>'
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