var myApp = angular.module('myapp', []);

myApp.factory('Data', function(){
    return {message:"data from service"}
})

myApp.controller('FirstCtrl', function($scope, Data){
    $scope.data = Data;
})

myApp.controller('SecondCtrl', function($scope, Data){
    $scope.data = Data;

    $scope.reversedMessage = function(message){
        return message.split("").reverse().join("");
    }
})