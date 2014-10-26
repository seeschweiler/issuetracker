'use strict';

/**
 * @ngdoc function
 * @name issuetrackerApp.controller:NavctrlCtrl
 * @description
 * # NavctrlCtrl
 * Controller of the issuetrackerApp
 */
angular.module('issuetrackerApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.getClass = function(path) {
        console.log('Navigation: ');
        console.log($location.path().substr(0, path.length));
        console.log(' = ');
        console.log(path.toString());
        if ($location.path().substr(0, path.length) == path) {
          return "active";
        } else {
          return "";
        }
    };
  });
