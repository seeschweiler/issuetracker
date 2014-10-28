'use strict';

/**
 * @ngdoc function
 * @name issuetrackerApp.controller:IssuesCtrl
 * @description
 * # IssuesCtrl
 * Controller of the issuetrackerApp
 */
angular.module('issuetrackerApp')
  .controller('IssuesCtrl', function ($scope, $location, Issue, AuthFirebase) {
      if (!AuthFirebase.signedIn()) {
        $location.path('/home');
      }

      $scope.issues = Issue.all;
      $scope.issue = {};

      var initializeIssue = function() {
        $scope.issue = {
          title: '',
          description: '',
          dueDate: '',
          priority: ''
        };
      };

      initializeIssue();

      $scope.submitIssue = function () {
        Issue.create($scope.issue).then(function() {
          initializeIssue();
        });
      };

      $scope.deleteIssue = function(issue) {
        Issue.delete(issue);
      };
  });
