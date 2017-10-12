(function() {
    'use strict';

    productApp.controller('mentionCtrl', mentionCtrl);

    mentionCtrl.$inject = ['$scope'];
    function mentionCtrl($scope) {
        var vm = this;
        $scope.paragraph1 = "Aliqua voluptate adipisicing est duis deserunt do sunt reprehenderit anim eiusmod aliqua. Voluptate sit laborum magna quis commodo cupidatat labore in irure do mollit eiusmod exercitation labore. Veniam aliqua voluptate dolore ullamco ad consectetur et tempor ipsum. Incididunt officia anim consequat est nostrud. Officia dolor culpa dolor est. Consectetur aute culpa labore mollit. In ad ullamco ea dolore est aliquip do sunt proident esse consequat deserunt.";   
        $scope.paragraph2 = "Ipsum minim pariatur ea occaecat dolore id. Id aliquip voluptate ut non tempor et ex. Laborum ea ad tempor ipsum laborum mollit nostrud ea reprehenderit occaecat commodo consectetur occaecat. Pariatur nulla ad in ut ad nulla magna cillum sit pariatur. Adipisicing eu est voluptate labore. Adipisicing excepteur reprehenderit laboris cillum culpa aliquip consectetur consectetur in laboris non in.";
        $scope.paragraph3 = "Voluptate incididunt incididunt cupidatat occaecat culpa laboris anim fugiat. Incididunt fugiat labore Lorem fugiat dolor in ullamco officia. Ad voluptate non ex tempor.";
        
        activate();

        ////////////////
        function activate() { }
    }
})();