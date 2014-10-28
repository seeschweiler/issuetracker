'use strict';

/**
 * @ngdoc function
 * @name issuetrackerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the issuetrackerApp
 */
angular.module('issuetrackerApp')
  .controller('LoginCtrl', function ($scope, $location, AuthFirebase) {
    $scope.login = function() {
      AuthFirebase.login($scope.user).then(function() {
        $location.path('/issues');
      }, function(error){
        $scope.error = error.toString();
      });
    };
  });
