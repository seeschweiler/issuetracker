'use strict';

/**
 * @ngdoc function
 * @name issuetrackerApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the issuetrackerApp
 */
angular.module('issuetrackerApp')
  .controller('RegisterCtrl', function ($scope, $location, Auth) {
    if (Auth.signedIn()) {
      $location.path('/issues');
    }

    $scope.register = function () {
      Auth.register($scope.user).then(function (authUser) {
        console.log(authUser);
        Auth.login($scope.user).then(function () {
          $location.path('/home');
        }, function(error){
          $scope.error = error.toString();
        });
      });
    };
  });
