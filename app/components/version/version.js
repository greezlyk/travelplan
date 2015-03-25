'use strict';

angular.module('travelPlaneApp.version', [
  'travelPlaneApp.version.interpolate-filter',
  'travelPlaneApp.version.version-directive'
])

.value('version', '0.2');
