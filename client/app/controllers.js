/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";

angular.module("myApp.controllers", []).controller("songCtrl", ["scope", "Song", function($scope, Song) {
  
  $scope.songs = Song.query();
  $scope.newSong = { };
  
  $scope.addSong = function(/** String */ artist, /** String */ title) {
    var song = new Song();
    song.artist = artist;
    song.title = title;
    song.score = 0;
    song.$save(function(response) {
      $scope.songs.push(response);
    });

    $scope.newSong.title = "";
    $scope.newSong.artist = "";
  };
  
  $scope.updateSong = function(song) {
    song.$update();
  };
  
  $scope.deleteSong = function(/** Song */ song) {
    var idx = $scope.songs.indexOf(song);
    if (idx >= 0) {
      $scope.songs.splice(idx, 1);
    }
    song.$remove();
  };
  
  $scope.isEmpty = function(/** String */ str) {
    return _.isBlank(str);
  };
}]);
//angular.module("myApp.controllers", []).controller("employeeCtrl", function($scope, Employee) {
//  
//  $scope.employees = Employee.query();
//  $scope.newEmployee = { };
//  
//  $scope.addEmployee = function(/** String */ first_name, /** String */ last_name) {
//    var employee = new Employee();
//    employee.first_name = first_name;
//    employee.last_name = last_name;
//    //employee.score = 0;
//    employee.$save(function(response) {
//      $scope.employees.push(response);
//    });
//
//    $scope.newEmployee.first_name = "";
//    $scope.newEmployee.last_name = "";
//  };
//  
//  $scope.updateEmployee = function(employee) {
//    employee.$update();
//  };
//  
//  $scope.deleteEmployee = function(/** Song */ employee) {
//    var idx = $scope.employees.indexOf(employee);
//    if (idx >= 0) {
//      $scope.employees.splice(idx, 1);
//    }
//    employee.$remove();
//  };
//  
//  $scope.isEmpty = function(/** String */ str) {
//    return _.isBlank(str);
//  };
//});