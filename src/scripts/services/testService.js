'use strict';

angular.module('mytestapp')
    .service('testService', function() {
        this.getGreetings = function() {
            return "hello";
        }
    });
