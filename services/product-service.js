(function () {
    'use strict';

    productApp.factory('productService', productService);

    productService.$inject = ['$log', '$http', 'urlWebApi'];
    function productService($log, $http, urlWebApi) {
       
        ////////////////
        function getDetails(id) {
            return  $http({method: 'GET', url: urlWebApi + '/products/'+ id});
        }

        function getPagination(page) {
            return  $http({method: 'GET', url: urlWebApi + '/products/page/'+ page});
        }

        function getAll() {
            return  $http({method: 'GET', url: urlWebApi + '/products'});
        }

        function getCount() {
            return  $http({method: 'GET', url: urlWebApi + '/products/count'});
        }

        return {
            getDetails : getDetails,
            getAll : getAll,
            getCount : getCount,
            getPagination : getPagination
        }
    }
})();

