'use strict';

var app = angular.module('phoneApp', []);

app.controller("AppCtrl", function($scope){
    $scope.leaveVoiceMail = function(number, message){
        alert("Number: " + number + " Message: " + message);
    }
    $scope.leaveVoiceMailHome = function(number, message){
        alert("Home Number: " + number + " Home Message: " + message);
    }
})

app.directive("phone", function(){
    return {
        restrict: "E",
        scope: {
            number:"@",
            network:"&",
            makeCall:"&"
        },
        template: '<div class="panel">Number: {{number}} Network:<select ng-model="network" ng-options="net for net in networks"></select> </div>' +
            '<input type="text" ng-model="value">' +
            '<div class="button" ng-click="makeCall({number:number, message:value})"> Call home! </div>',
        link: function(scope){
            scope.networks = ["MTN", "Vodacom", "Telkom"];
            scope.network = scope.networks[Math.floor(Math.random()*((scope.networks.length-1)-0+1)+0)];
        }
    }
})

