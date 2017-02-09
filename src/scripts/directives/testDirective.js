'use strict';

angular.module('mytestapp')
    .directive('testDirective', function($templateCache) {
        return {
            template: $templateCache.get('views/directive/testDirectiveTemplate.html'),
            restrict: 'E',
            transclude: true,
            scope: {},
            link: function(scope, element, attrs) {
                scope.greeting = scope.getGreetingMessage();
            },
            controller: function($scope, testService, testFactory) {
                $scope.getGreetingMessage = function() {
                    return testService.greeting + " " + testFactory.message;
                }
            }
        };
    });
