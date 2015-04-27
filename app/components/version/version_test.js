'use strict';

describe('travelplanApp.version module', function() {
  beforeEach(module('travelplanApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.2');
    }));
  });
});
