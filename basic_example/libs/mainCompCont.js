'use strict';

var app = angular.module("app", []);

app.directive("clock", function () {
    return {
        restrict: "E",
        scope: {
            timezone: "@"
        },
        template: "<div>12:01 {{timezone}}</div>"
    }
})

app.directive("panel", function () {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        template: "<div style='border: 2px solid cadetblue'> "+
            "<div class='alert-box'>{{title}}</div>" +
            "<div ng-transclude></div>" +
        "</div>"
    }
})
