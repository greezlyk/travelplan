'use strict';

// Declare app level module which depends on views, and components
angular.module('travelPlaneApp', [
  'ngRoute', 'travelPlaneApp.search', 'travelPlaneApp.travelplan', 'travelPlaneApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/search', {
          templateUrl: 'components/search/search.html',
          controller: 'SearchCtrl'
      }).
      when('/travelplan', {
          templateUrl: 'components/travelplan/travelplan.html',
          controller: 'TravelplanCtrl'
      }).
      otherwise({redirectTo: '/search'});
}]);
