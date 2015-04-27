'use strict';


angular.module('travelplanApp', [
  'ngRoute', 'travelplanApp.search', 'travelplanApp.travelplan', 'travelplanApp.version'
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
      when('/phoneCatalog', {
          templateUrl: 'components/travelplan/phoneCatalog.html',
          controller:  'PhoneController'
      }).
      otherwise({redirectTo: '/search'});

}]);

