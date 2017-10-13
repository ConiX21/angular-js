(function () {
    'use strict';

    productApp.controller('productCtrl', productCtrl);
    productCtrl.$inject = ['$log', '$scope', '$interval', '$timeout', '$routeParams', '$location', 'productService', 'configProductApp'];

    function productCtrl($log, $scope, $interval, $timeout, $routeParams, $location, productService, configProductApp) {
        var vm = this;
        $scope.size = 0;
        $scope.stateWait = true;
        $scope.counter = 0;
        $scope.status = 200;
        $scope.title = "Products";

        $scope.totalItems = 0;
        $scope.currentPage = 1;
        $scope.itemsPerPage = configProductApp.itemPerPage;

        
        ////////////////
        if ($location.path().split('/').includes("details")) {
            
            if (angular.isDefined($routeParams.id)) {
                $scope.title = "Details product - " + $routeParams.id;
                
                productService.getDetails($routeParams.id).then(
                    function (result) {
                        $scope.product = result.data
                    }, function (response) {
                        $scope.data = response.data || 'Request failed';
                        $scope.status = response.status;
                    });
                }
            }
            else if ($location.path().split('/').includes("add")) {
                $scope.title = "Add product";


            }
            else{

                activate();
            }


        /*************Public Functions************/

        $scope.onDetails = function (id) {
            $timeout(function () {
                $location.url('/product/details/' + id)
            }, 800);
        }

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
            showDatasPagination();
        };

        $scope.addProduct = function(product){
            $log.info(product);
        }

        /*************Private Functions************/
        function activate() {

            var cpt = 0;

            var increaseCounter = function () {
                $scope.size = { 'width': cpt + '%' };
                cpt += 10;
            }

            var loop = $interval(increaseCounter, 100, 12);

            loop.then(function () {
                $scope.stateWait = false;
                showDatasPagination();
            })
        }

        function showDatasPagination() {
            productService.getCount().then(function (result) {
                $scope.totalItems = result.data.count;
            });

            productService.getPagination($scope.currentPage).then(function (result) {
                $scope.products = result.data;
            },
                function (response) {
                    $scope.data = response.data || 'Request failed';
                    $scope.status = response.status;
                });
        }

    }
})();