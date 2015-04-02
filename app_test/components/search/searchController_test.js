/**
 * Created by greezlyk on 02.04.15.
 */

describe('travelPlaneApp.search module', function() {

    beforeEach(module('travelPlaneApp.search'));

    describe('travelPlaneApp.search controller', function(){
        it('should ....', inject(function($controller) {
            //spec body
            var searchCtrl = $controller('SearchCtrl');
            expect(searchCtrl).toBeDefined();
        }));
    });


    var controller;

    beforeEach(inject(function ($controller) {

        controller = $controller('SearchCtrl', {});
    }));

    it('Should defined search', function () {
        expect(controller.search).toBeDefined();
    });

    it('Should set default text for From and To ', function () {
        expect(controller.search.from).toBe("From...");
        expect(controller.search.to).toBe("To...");
    })

});