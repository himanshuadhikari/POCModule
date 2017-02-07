'use strict';

angular.module('mytestapp')
    .directive('testDirective', function() {
        return {
            templateUrl: 'views/directive/testDirectiveTemplate.html',
            restrict: 'E',
            transclude: true,
            scope: {
            },
            link: function(scope, element, attrs) {

            },
            controller: function($scope) {

            }
        };
    });
