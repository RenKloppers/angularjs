'use strict';

var app = angular.module("app", []);

app.config(function ($logProvider) {
    $logProvider.debugEnabled(true);
})

app.run(function ($rootScope, $log) {
    $rootScope.$log = $log;
})

app.controller("foo", function ($scope) {
    $scope.myFunc = function (ev) {
        console.log(ev)
    }
})