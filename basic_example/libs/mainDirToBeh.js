'use strict';

var app = angular.module('twitterApp', []);

app.controller("AppCtrl", function ($scope){
    $scope.loadMoreTweets = function(){
        console.log("Loading tweets!");
    }
    $scope.deleteTweets = function(){
        console.log("Delete tweets!");
    }
})

app.directive("enter", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            scope.$apply(attrs.enter);
        })
    }
})

app.directive("leave", function(){
    return function(scope, element, attrs){
        element.bind("mouseleave", function(){
            scope.$apply(attrs.leave);
        })
    }
})