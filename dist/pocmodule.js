 angular
     .module('mytestapp', []);
;'use strict';

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
                    return testService.getGreetings() + " " + testFactory.message;
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
        this.getGreetings = function() {
            return "hello";
        }
    });
;angular.module('mytestapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directive/testDirectiveTemplate.html',
    "<h1>{{greeting}}</h1>\n"
  );

}]);
