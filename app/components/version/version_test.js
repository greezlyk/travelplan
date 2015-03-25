'use strict';

describe('travelPlaneApp.version module', function() {
  beforeEach(module('travelPlaneApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
