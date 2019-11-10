"use strict";

angular.module("lunchTime", []).controller("lunchController", lunchController);
lunchController.$inject = ["$scope"];
function lunchController($scope) {
  $scope.name = "hello Friend";
}
