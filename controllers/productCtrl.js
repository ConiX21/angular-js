(function () {
    'use strict';

    productApp.controller('productCtrl', productCtrl);
    productCtrl.$inject = ['$scope', '$interval', 'productService'];

    function productCtrl($scope, $interval, productService) {
        var vm = this;
        $scope.size = 0;
        $scope.stateWait = true;
       
        $scope.counter = 0;
        

        activate();

        ////////////////

        function activate() {

            var cpt = 0;
            
            var increaseCounter = function () {
                  $scope.size = {'width' : cpt + '%'} ;
                  cpt += 10;
            }
    
            var loop = $interval(increaseCounter, 100, 12);
    
            loop.then(function(){
                $scope.stateWait = false;
                $scope.products = productService.getAll();
            })
        }
    }
})();