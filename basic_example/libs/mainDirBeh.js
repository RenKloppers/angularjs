'use strict';

var app = angular.module("behaviorApp", []);

app.directive("enter", function(){
    return function(scope, element){
        element.bind("mouseenter", function(){
          console.log("mouse enter!");
        })
    }
})

app.directive("leave", function(){
    return function(scope, element){
        element.bind("mouseleave", function(){
            console.log("mouse - leave!");
        })
    }
})