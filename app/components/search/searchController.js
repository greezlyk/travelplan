'use strict';

angular.module('travelPlaneApp.search', ['ngRoute'])

.controller('SearchCtrl', ['$location', function($location) {
        this.searchCoomand = function(path) {
           $location.path(path);
        };

}]);



