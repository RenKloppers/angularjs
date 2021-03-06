'use strict';

var app = angular.module('drinkApp', []);

app.controller("AppCtrl", function($scope){
    $scope.ctrlFlavor = "coke zero";
})

app.directive("drink", function(){
    return {
        scope:{
            flavour:"@"
        },
        template: '<div>{{flavour}}</div>'
    }
})