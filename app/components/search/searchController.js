'use strict';

angular.module('travelplanApp.search', ['ngRoute'])

.controller('SearchCtrl', ['$location', function($location) {

        this.search = {from: "From...", to: "To..."};

        this.searchCoomand = function(path) {
           $location.path(path);
        };

}]);



