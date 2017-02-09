angular.module('mytestapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directive/testDirectiveTemplate.html',
    "<h1>{{greeting}}</h1>\n"
  );

}]);
