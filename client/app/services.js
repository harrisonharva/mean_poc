/*jslint node: true */
/*global angular */
"use strict";

angular.module("myApp.services", []).factory("Song", function($resource) {
  return $resource('/api/songs/:id', {
    id: '@id'
  }, {
    update: {
      method: "PUT"
    },
    remove: {
      method: "DELETE"
    }
  });
});
angular.module("myApp.services", []).factory("Employee", function($resource) {
  return $resource('/api/Employee/:id', {
    id: '@id'
  }, {
    update: {
      method: "PUT"
    },
    remove: {
      method: "DELETE"
    }
  });
});