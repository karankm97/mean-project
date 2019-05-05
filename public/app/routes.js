angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'app/views/pages/home.html'
  })
  .when('/login', {
    templateUrl: 'app/views/pages/users/login.html'
  })
  .when('/register', {
    templateUrl: 'app/views/pages/users/register.html',
    controller: 'regCtrl',
    controllerAs: 'register'
  })
  .otherwise({ redirectTo: '/home' })
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
  });
})
