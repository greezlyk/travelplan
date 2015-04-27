'use strict';

angular.module('travelplanApp.version', [
  'travelplanApp.version.interpolate-filter',
  'travelplanApp.version.version-directive'
])

.value('version', '0.2');
