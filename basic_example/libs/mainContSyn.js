'use strict';

var app = angular.module("app", []);

app.controller("RoomCtrl", function () {
    this.openDoor = function () {
        this.buttonTitleText = "Button clicked";
    }
    this.buttonTitle = "Button Title";
    this.foo = "Room foo";
})

app.controller("OtherCtrl", function () {
    this.fooFunc = function () {
        this.fooText = "Foo clicked";
    }
    this.foo = "Other foo";
})
