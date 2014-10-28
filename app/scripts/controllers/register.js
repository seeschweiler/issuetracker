'use strict';

/**
 * @ngdoc function
 * @name issuetrackerApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the issuetrackerApp
 */
angular.module('issuetrackerApp')
  .controller('RegisterCtrl', function ($scope, $location, AuthFirebase) {
    if (AuthFirebase.signedIn()) {
      $location.path('/issues');
    }

    $scope.register = function () {
      AuthFirebase.register($scope.user).then(function (authUser) {
          AuthFirebase.login($scope.user).then(function () {
            $location.path('/home');
          }, function(error) {
            $scope.error = error.toString();
          });
        }, function(error) {
          $scope.error = error.toString();
        });
    };
  });
