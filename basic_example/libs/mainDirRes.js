'use strict';

var app = angular.module('superhero', []);

app.directive("superman", function(){
    return {
        //E = element
        //A = attribute
        //C = class
        //M = comment
        restrict: "A",
        link: function () {
            alert("Alert Superman attribute!")
        }
    }
})

app.directive("flash", function(){
    return {
        restrict: "C",
        link: function (){
            alert("Alert Flash class!");
        }
    }
})