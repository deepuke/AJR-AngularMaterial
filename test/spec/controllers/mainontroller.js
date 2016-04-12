'use strict';

describe('Controller: MainontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('amV01App'));

  var MainontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainontrollerCtrl = $controller('MainontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
