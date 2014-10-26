'use strict';

angular.module('issuetrackerApp')
  .factory('Issue', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'issues');
    var issues = $firebase(ref).$asArray();

    var Issue = {
      all: issues,
      create: function (issue) {
        return issues.$add(issue);
      },
      find: function (issueId) {
        return $firebase(ref.child(issueId)).$asObject();
      },
      delete: function (issue) {
        return issues.$remove(issue);
      }
    };

    return Issue;
  });
