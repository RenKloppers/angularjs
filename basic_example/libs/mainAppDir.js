'use strict';

var app = angular.module('superhero', []);

app.directive("superman", function(){
    return {
        restrict: "E",
        template: "<div>Here to save the day!</div>"
    }
})
