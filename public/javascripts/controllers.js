'use strict';
var app = angular.module('resApp');

app.controller('resCtrl', function($scope, Services, $state) {
  console.log('in the resCtrl');

  $scope.initModals = function() {
  $('.modal-trigger').leanModal();
  }

  $scope.$watch(function() {
    return Services.reservation;
  }, function(newVal, oldVal) {
    $scope.reservation = newVal;
  });

});

app.controller('newResCtrl', function($scope, Services, $state) {
  console.log('in the new res ctrl');
});

app.controller('homeCtrl', function($scope, Services, $state) {
  console.log('in the home page');
});
