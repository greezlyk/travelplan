'use strict';

angular.module('travelPlaneApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'components/search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', [function() {

}]);