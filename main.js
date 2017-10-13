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
        .when('/product', {
            templateUrl : 'views/product/index.html',
            controller : 'productCtrl'
        })
            .when('/product/add', {
                templateUrl : 'views/product/add.html',
                controller : 'productCtrl'
            })
            .when('/product/edit/:id', {
                templateUrl : 'views/product/edit.html',
                controller : 'productCtrl'
            })
            .when('/product/details/:id', {
                templateUrl : 'views/product/details.html',
                controller : 'productCtrl'
            })
        .otherwise({
            redirectTo : '/home'
        })
})