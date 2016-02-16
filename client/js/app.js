angular.module('app', [
    'ui.router',
    'lbServices'
])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) { 
    $stateProvider
    
    .state('sign-up', {
      url: '/sign-up',
      templateUrl: 'views/sign-up-form.html',
      controller: 'SignUpController'
    })
    
    .state('sign-up-success', {
      url: '/sign-up/success',
      templateUrl: 'views/sign-up-success.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'AuthLoginController'
    })

    .state('all-videos', {
      url: '/all-videos',
      templateUrl: 'views/all-videos.html'
    })
    
    .state('logout', {
      url: '/logout',
      controller: 'AuthLogoutController'
    })

  }
]);