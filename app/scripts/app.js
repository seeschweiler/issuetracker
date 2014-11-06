'use strict';

/**
 * @ngdoc overview
 * @name issuetrackerApp
 * @description
 * # issuetrackerApp
 *
 * Main module of the application.
 */
angular
  .module('issuetrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', '[PLACE YOUR FIREBASE URL HERE]')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/issue/:issueId', {
        templateUrl: 'views/issue.html',
        controller: 'IssueCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
