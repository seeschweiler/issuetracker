'use strict';

/**
 * @ngdoc function
 * @name issuetrackerApp.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the issuetrackerApp
 */
angular.module('issuetrackerApp')
  .controller('IssueCtrl', function ($scope, $routeParams, $location, Issue) {
    var issueId = $routeParams.issueId;
    $scope.issue = Issue.find(issueId);

    $scope.submitIssue = function () {
      $scope.issue.$save().then(function(){
        $location.path('/issues');
      })
    };

    $scope.cancel = function() {
      $location.path('/issues');
    };
  });
