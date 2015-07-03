'use strict';

var app = angular.module("app", []);

app.controller("AppCtrl", function ($scope, game) {
    $scope.title = game.title;
})

app.config(function (gameProvider) {
    gameProvider.setType("Puzzel");
})

app.provider("game", function(){
    var type;
    return {
        setType: function(value){
            type = value;
        },
        $get: function(){
            return {
                title: type + "Craft"
            }
        }
    }
})





