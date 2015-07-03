'use strict';

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
        templateUrl:"app.html",
        controller:"AppCtrl"
        })
})

app.controller('AppCtrl', function($scope, $q){

    var defer = $q.defer();

    defer.promise
        .then(function (weapon) {
            alert("You can have my " + weapon);
            return "bow"
        })
        .then(function (weapon) {
            alert("And my " + weapon);
            return "axe"
        })
        .then(function (weapon) {
            alert("Also my " + weapon);
        })

    defer.resolve("sword");

    $scope.model = {
        message: "Promise example"
    }
})
