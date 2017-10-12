(function() {
    'use strict';

    productApp.directive('homePanel', homePanel);
    homePanel.$inject = [];

    function homePanel() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controller : homePanelCtrl,
            restrict: 'E',
            templateUrl : '/directives/home-panel.html',
            transclude: true,
            scope: {
                paragraph : '=',
                onExternalClick : '&'
            }
        };

        return directive;
        
        function link(scope, element, attrs) {
            
        }
    }
    
    function homePanelCtrl($scope, $log){
        $scope.onClick = function(){
            $log.info("Click in directive" + $scope.paragraph);
        }
    }
})();