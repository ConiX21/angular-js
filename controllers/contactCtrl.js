(function() {
    'use strict';

    productApp.controller('contactCtrl', contactCtrl);
    contactCtrl.$inject = ['$scope', '$timeout'];

    function contactCtrl($scope, $timeout) {
        $scope.state = false;
        $scope.online = false;

        var vm = this;
        
        activate();

        ////////////////
        //private function
        function activate() {
            $scope.title = "Contact title";

            $timeout(function(){
                $scope.online = true;
            }, 2000);

        }
        


        //public on scope
        $scope.onClick = function(){
           $scope.state = !$scope.state;

            $scope.contactObject = {
                'contactName' : 'WebMaster',
                'email' : 'contact-webmaster@m2i-foramtion.fr',
                'src' : '/assets/social-m2i.png'
            };
        }

        $scope.onInit = function(){
            console.log("Controller init...");
        }
    }
})();

