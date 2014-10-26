'use strict';

/**
 * @ngdoc function
 * @name issuetrackerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the issuetrackerApp
 */
angular.module('issuetrackerApp')
  .controller('LoginCtrl', function ($scope, $location, Auth) {
    $scope.login = function() {
      Auth.login($scope.user).then(function() {
        $location.path('/issues');
      }, function(error){
        $scope.error = error.toString();
      });
    };
  });
