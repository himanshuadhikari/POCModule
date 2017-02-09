 angular
     .module('mytestapp', []);
;'use strict';

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
;'use strict';

angular.module('mytestapp')
    .service('testFactory', function() {
        return {
            "message": "world!!!"
        }
    });
;'use strict';

angular.module('mytestapp')
    .service('testService', function() {
        return {
            "greeting": "hello"
        }
    });
