'use strict';

var app = angular.module('choreApp', []);

app.controller("ChoreCtrl", function($scope){
    $scope.logChore = function(task){
        alert(task + " is done!");
    }
})

app.directive("kid", function(){
    return {
        restrict: "E",
        scope:{
            done:"&" //& is the expression value
        },
        template: '<input type="text" ng-model="task">' +
                  ' <div class="button" ng-click="done({task:task})">I\'m done!</div>'
    }
})