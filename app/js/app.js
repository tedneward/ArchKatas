'use strict';

/* App Module */
angular.module('app', []).
  config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', {templateUrl: 'partials/home.html'}).
      when('/kata', {templateUrl: 'partials/kata.html', controller: KataCtrl}).
      when('/about', {templateUrl: 'partials/about.html'}).
      when('/rules', {templateUrl: 'partials/rules.html'}).
      when('/contribute', {templateUrl: 'partials/contribute.html'}).
      when('/invite', {templateUrl: 'partials/invite.html'}).
      when('/lead', {templateUrl: 'partials/lead.html'}).
      when('/join', {templateUrl: 'partials/join.html'}).
      when('/contact', {templateUrl: 'partials/contact.html'}).
      otherwise({redirectTo: '/home'});
}]);