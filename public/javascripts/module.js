'use strict';
var app = angular.module('resApp', ['ui.router']);

app.directive('repeatDone', function() {
  return function(scope, element, attrs) {
    if(scope.$last) { scope.$eval(attrs, repeatDone); }
  }
});

app.run((Services) => {
  Services.getRes();
});

app.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('reservations', {
      url: '/reservations',
      templateUrl: 'states/res.html',
      controller: 'resCtrl'
    })
    .state('newRes', {
      url: '/newreservation',
      templateUrl: 'states/newres.html',
      controller: 'newResCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: 'states/home.html',
      controller: 'homeCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
