(function() {
    'use strict';

    productApp.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$log'];
    function homeCtrl($scope, $log) {
        var vm = this;
        $scope.title = "Home";
        $scope.paragraphs = [
            "Aliqua voluptate adipisicing est duis deserunt do sunt reprehenderit anim eiusmod aliqua. Voluptate sit laborum magna quis commodo cupidatat labore in irure do mollit eiusmod exercitation labore. Veniam aliqua voluptate dolore ullamco ad consectetur et tempor ipsum. Incididunt officia anim consequat est nostrud. Officia dolor culpa dolor est. Consectetur aute culpa labore mollit. In ad ullamco ea dolore est aliquip do sunt proident esse consequat deserunt.",
            "Ipsum minim pariatur ea occaecat dolore id. Id aliquip voluptate ut non tempor et ex. Laborum ea ad tempor ipsum laborum mollit nostrud ea reprehenderit occaecat commodo consectetur occaecat. Pariatur nulla ad in ut ad nulla magna cillum sit pariatur. Adipisicing eu est voluptate labore. Adipisicing excepteur reprehenderit laboris cillum culpa aliquip consectetur consectetur in laboris non in.",
            "Voluptate incididunt incididunt cupidatat occaecat culpa laboris anim fugiat. Incididunt fugiat labore Lorem fugiat dolor in ullamco officia. Ad voluptate non ex tempor."
        ];

        $scope.onSendIndex = function($index){
            $log.info("Index paragraph => "+ $index);
        }
        
        activate();

        ////////////////
        function activate() { }
    }
})();