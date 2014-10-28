'use strict';

/**
 * @ngdoc service
 * @name issuetrackerApp.Auth
 * @description
 * # AuthFirebase
 * Factory in the issuetrackerApp.
 */
angular.module('issuetrackerApp')
  .factory('AuthFirebase', function ($rootScope, $location, $q, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);

    var AuthFirebase = {
      register: function(user) {
        var deferred = $q.defer();
        ref.createUser({
          email: user.email,
          password: user.password
        }, function(err) {
          if (err) {
            console.log('Error: ' + err);
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      },
      signedIn: function() {
        var authObj = ref.getAuth();
        return authObj !== null;
      },
      login: function(user) {
        var deferred = $q.defer();
        ref.authWithPassword({
          email: user.email,
          password: user.password
        }, function (err, authData) {
          if (err) {
            deferred.reject(err);
          } else if (authData) {
            deferred.resolve(authData);
          }
        });
        return deferred.promise;
      },
      logout: function() {
        ref.unauth();
      }
    };

    $rootScope.signedIn = function() {
      return AuthFirebase.signedIn();
    };

    return AuthFirebase;
  });
