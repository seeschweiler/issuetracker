'use strict';

describe('Service: issue', function () {

  // load the service's module
  beforeEach(module('issuetrackerApp'));

  // instantiate service
  var issue;
  beforeEach(inject(function (_issue_) {
    issue = _issue_;
  }));

  it('should do something', function () {
    expect(!!issue).toBe(true);
  });

});
