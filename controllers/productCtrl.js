(function () {
    'use strict';

    productApp.controller('productCtrl', productCtrl);
    productCtrl.$inject = ['$scope', '$interval'];

    function productCtrl($scope, $interval) {
        var vm = this;
        $scope.size = 0;
        $scope.stateWait = true;
        $scope.products = [
            {
                "idProduct": 1,
                "reference": "AA1230",
                "description": "Consequat dolore proident pariatur anim laboris.",
                "image": "/assets/img1.jpg",
                "priceHT": 120.99
            },
            {
                "idProduct": 2,
                "reference": "AA4569",
                "description": "Nostrud esse minim reprehenderit laborum et pariatur.",
                "image": "/assets/img2.jpg",
                "priceHT": 100
            },
            {
                "idProduct": 3,
                "reference": "AA5897",
                "description": "Excepteur adipisicing proident adipisicing consectetur duis consequat et occaecat et labore.",
                "image": "/assets/img3.jpg",
                "priceHT": 50.20
            },
            {
                "idProduct": 4,
                "reference": "AA4512",
                "description": "Fugiat culpa ex velit est in est nisi Lorem sit duis amet.",
                "image": "/assets/img4.jpg",
                "priceHT": 127.90
            },
            {
                "idProduct": 5,
                "reference": "AA4698",
                "description": "Do non Lorem velit fugiat in dolor quis eiusmod velit et aliquip ex excepteur ea.",
                "image": "/assets/img5.jpg",
                "priceHT": 200.99
            },
            {
                "idProduct": 6,
                "reference": "AA1111",
                "description": "Ex sint reprehenderit amet commodo minim.",
                "image": "/assets/img6.jpg",
                "priceHT": 500.60
            },
            {
                "idProduct": 7,
                "reference": "AA2367",
                "description": "Ea ut non Lorem adipisicing commodo et proident deserunt dolore excepteur anim anim culpa.",
                "image": "/assets/img7.jpg",
                "priceHT": 80.99
            },
        ]
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
            })


        }
    }
})();