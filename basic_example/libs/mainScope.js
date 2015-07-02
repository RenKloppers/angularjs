'use strict';

var app = angular.module("app", []);

//the order matters here because we define it below, this way protects against minifiers
app.controller("MyCtrl", ['$scope', '$http', '$parse', function(a,b,c){
    console.log("--> scope 1: " + c);
}]);

app.directive("myDirective", function(){
    return {
        //scope: {},
        //order matters here do not swap params around
        link: function (scope, element, attrs) {
            console.log("--> scope 2: " +element);
        }
    }
})

//order does not matter here
app.controller("MyOtherCtrl", function($scope, $http){
    console.log("--> scope 3: " + $http);
});