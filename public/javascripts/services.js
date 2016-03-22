'use strict';
var app = angular.module('resApp');

app.service('Services', function($http) {

  this.getRes = () => {
    $http.get('/res')
      .then(res => {
        this.reservation = res.data;
      }, err => {
        console.log('Service error: ', err);
      });
  };

  this.addRes = (data) => {
    return $http.post('/res', data);
  };

  this.edit = (id, updatedRes) => {
    return $http.put(`/res/${id}`, updatedRes);
  };

  this.delete = (id) => {
    return $http.delete(`/res/${id}`);
  };

});
