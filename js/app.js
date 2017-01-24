angular.module('devmtnTravel', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })

            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl'
            })
    .state('packages',{
        url:'/packages',
        templateUrl: "../views/packages.html",
        controller: 'packagesCtrl'
    })

      .state('contact',{
        url:'/',
        templateUrl: "../views/contact.html"
})
      .state('booked',{
        url:'/booked.id/',
        templateUrl: "../views/booked.html",
        controller: 'bookedCtrl'
      })
      .state('about-adventurers',{
        url: '/about-adventurers',
        templateUrl: "../views/about-adventurers.html"
      })

$urlRouterProvider.otherwise('/');
});
