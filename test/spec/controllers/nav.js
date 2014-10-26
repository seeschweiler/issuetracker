'use strict';

describe('Controller: NavctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('issuetrackerApp'));

  var NavctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavctrlCtrl = $controller('NavctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
