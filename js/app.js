(function() {
  "use strict";

  angular
    .module("lunchTime", [])
    .controller("lunchController", lunchController);
  lunchController.$inject = ["$scope"];
  function lunchController($scope) {
    $scope.Check = function() {
      const items = $scope.lunchItem.split(",");
      if (items.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
