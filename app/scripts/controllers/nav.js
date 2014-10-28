'use strict';

/**
 * @ngdoc function
 * @name issuetrackerApp.controller:NavctrlCtrl
 * @description
 * # NavctrlCtrl
 * Controller of the issuetrackerApp
 */
angular.module('issuetrackerApp')
  .controller('NavCtrl', function ($scope, $location, AuthFirebase) {
    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) === path) {
          return 'active';
        } else {
          return '';
        }
    };

    $scope.logout = function() {
      AuthFirebase.logout();
    };
  });
