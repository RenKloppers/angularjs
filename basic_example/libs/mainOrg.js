'use strict';

var app = angular.module("phoneApp", []);

var phoneObj = {};
phoneObj.ctrl = {};

phoneObj.ctrl.AppCtrl = function($scope){

    this.sayHi = function(){
        alert("hi!");
    }
    return $scope.AppCtrl = this;
}

app.controller(phoneObj.ctrl);