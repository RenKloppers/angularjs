'use strict';

var app = angular.module("superApp", []);

app.directive("superhero", function(){
    return {
        restrict: "E",
        scope:{},

        controller: function($scope){
            $scope.abilities = [];

            this.addStrength = function(){
                $scope.abilities.push("strenght");
            }

            this.addSpeed = function(){
                $scope.abilities.push("speed");
            }

            this.addFlight = function(){
                $scope.abilities.push("flight");
            }
        },

        link: function(scope, element){
            element.addClass("button");
            element.bind("mouseenter", function(){
                console.log(scope.abilities);
            })
        }
    }
});

app.directive("strenght", function(){
    return {
        require:"superhero",
        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addStrength();
        }
    }
})

app.directive("speed", function(){
    return {
        restrict: "C",
        require:"superhero",

        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addSpeed();
        }
    }
})

app.directive("flight", function(){
    return {
        require:"superhero",
        link: function(scope, element, attrs, superheroCtrl){
            superheroCtrl.addFlight();
        }
    }
})