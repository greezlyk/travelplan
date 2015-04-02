'use strict';

describe('travelPlaneApp.travelplan module', function() {

    beforeEach(module('travelPlaneApp.travelplan'));

    describe('travelPlaneApp.travelplan controller', function(){
        it('should ....', inject(function($controller) {
            //spec body
            var traveCtrl = $controller('TravelplanCtrl');
            expect(traveCtrl).toBeDefined();
        }));
    });


    var controller;

    beforeEach(inject(function ($controller) {

        controller = $controller('TravelplanCtrl', {});
    }));

    it('should define a days array', function () {
        expect(controller.days).toBeDefined();
    });

    it('should contains contans some data in days array', function () {
        expect(controller.days).toBeDefined();

        var day = controller.days[0];
        var title = day.plan.title;

        expect(title).toBe("Flight Oslo to Barcelona");
    });



});