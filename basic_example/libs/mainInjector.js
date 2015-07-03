'use strict';

var app = angular.module("app", []);

app.factory("game", function () {
    return {
        title: "WarCraft",
        gameType: "Console"
    }
})

app.controller("AppCtrl", function ($scope, $injector) {
    $injector.invoke(function (game) {
        $scope.title = game.title;
        $scope.gameType = game.gameType;
    })
})