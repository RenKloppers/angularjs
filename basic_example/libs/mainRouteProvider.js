'use strict';

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
        templateUrl:"app.html",
        controller:"AppCtrl"
        })
        .when('/pizza',
        {
            template:"Yum pizza!"
        })
        .otherwise({
            template:"Does not exist!"
        })
})

app.controller('AppCtrl', function($scope){
    $scope.model = {
        message: "This is my app!!!"
    }
})
