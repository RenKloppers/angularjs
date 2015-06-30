'use strict';

var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function(){
    var Avengers = {};
    Avengers.cast = [
        {
            name: "Robert Downey Jr",
            character: "Tony Stark / Iron Man"
        },
        {
            name: "Chris Evans",
            character: "Steve Rogers / Captain America"
        },
        {
            name: "Mark Ruffalo",
            character: "Bruce Bannner / The Hulk"
        }
    ];
    return Avengers;
})

myApp.controller('AvengersCtrl', function($scope, Avengers){
    $scope.avengers = Avengers;
})


