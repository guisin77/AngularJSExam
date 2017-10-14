'use strict';

describe('Controller: UserWithdrawCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexamApp'));

  var UserWithdrawCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserWithdrawCtrl = $controller('UserWithdrawCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserWithdrawCtrl.awesomeThings.length).toBe(3);
  });
});
