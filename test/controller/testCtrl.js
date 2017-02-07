'use strict';


describe('Controller: testCtrl', function() {
    beforeEach(module('mytestapp'));
    var scope,
        ctrl;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('testCtrl', {
            $scope: scope
        });

        $rootScope.$digest();
    }));


    it('should test testCtrl', function() {
        console.log("starting test");
    });
});
