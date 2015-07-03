'use strict';

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
        templateUrl:"app.html",
        controller:"ViewCtrl",
            resolve : {
                loadData: viewCtrl.loadData
            }
        })
})

//note is not good practise to pass in $rootScope into a directive! example only
app.directive("error", function($rootScope){
    return{
        restrict: "E",
        template: '<div class="alert-box alert" ng-show="isError">Error!!!</div>',
        link: function (scope){
            $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
                scope.isError = true;
            })
        }
    }
})

app.controller('AppCtrl', function($rootScope){
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
        console.log(event);
        console.log(current);
        console.log(previous);
        console.log(rejection);
    })
})

var viewCtrl = app.controller('ViewCtrl', function($scope, $route){
    console.log($route);
    $scope.model = {
        message: "This is great app!!!"
    }
})

viewCtrl.loadData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.reject("Your connection is down");
    }, 500);
    return defer.promise;
}


