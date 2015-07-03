'use strict';

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/map/:country/:area/:city',
        {
            templateUrl:"app.html",
            controller:"AppCtrl"
        })
})

app.controller('AppCtrl', function($scope, $routeParams){
    $scope.model = {
        message: "Address: " + $routeParams.country + ", " + $routeParams.area + ", " + $routeParams.city
    }
})

// to test: for example go to
// http://localhost:63342/angularjs/basic_example/$routeParams.html#/map/SA/Durban/LaLucia