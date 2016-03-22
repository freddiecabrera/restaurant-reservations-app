'use strict';
var app = angular.module('resApp');

app.controller('resCtrl', function($scope, Services, $state) {
  $(".button-collapse").sideNav();
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
  $(".button-collapse").sideNav();
  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  console.log('in the new res ctrl');

  $scope.submitForm = () => {
    console.log($scope.newForm);
  }
});

app.controller('homeCtrl', function($scope, Services, $state) {
  console.log('in the home page');
});
