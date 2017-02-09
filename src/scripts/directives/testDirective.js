'use strict';

angular.module('mytestapp')
    .directive('testDirective', function() {
        return {
            templateUrl: 'views/directive/testDirectiveTemplate.html',
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
