'use strict';


describe('service: testDirective', function() {
    beforeEach(module('mytestapp'));
    beforeEach(module("mytestapp.templates"));
    var scope,
        element,
        compiled;

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        element = angular.element('<test-directive></test-directive>');
        compiled = $compile(element)(scope);
        console.log("beforeEach");

        $rootScope.$digest();
    }));


    it('should test testFactory', function() {
        console.log("test block", compiled);
    });
});
