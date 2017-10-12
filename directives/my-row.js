(function() {
    'use strict';

    productApp.directive('myRow', myRow);
    myRow.$inject = [];

    function myRow() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            replace : true,
            restrict: 'A',
            templateUrl : '/directives/my-row.html',
            transclude: true,
            scope: {
                prod : '='
            }
        };

        return directive;
        
        function link(scope, element, attrs) {
            
        }
    }

})();