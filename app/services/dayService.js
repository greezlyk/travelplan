// http://plnkr.co/edit/Ofq7Md8udEnIhAPF1NgL?p=preview
angular.module('travelplanApp.travelplanService', ['ngResource'])


    .factory('dayList', ['$http', function($http) {
        $http.get('days.json').success(function(data) {
            var days = data;

            var deletMeAfter = data;

            var del1 = deletMeAfter[1];
            return days;
        });
    }])
    .factory('phoneList', ['$http', function($http) {
        $http.get('data/phones.json').success(function(data) {
            var phones = data;
            return phones;
        });
    }])
    .factory('JsonService', function($resource) {
        return $resource('data/data.json');
    })
    .factory('JsonServicePlanList', function($resource) {
        return $resource('data/days.json');
    })
;

