'use strict';

// Declare app level module which depends on views, and components
angular.module('travelPlaneApp', [
  'ngRoute', 'myApp.version',
    'travelPlaneApp.search'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.
      when('/search', {
          templateUrl: 'components/search/search.html',
          controller: 'SearchCtrl'
      }).otherwise({redirectTo: '/view1'});
}]);
