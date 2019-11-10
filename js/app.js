(function() {
  "use strict";

  angular
    .module("lunchTime", [])
    .controller("lunchController", lunchController);
  lunchController.$inject = ["$scope"];
  function lunchController() {
    var vm = this;
    vm.Check = function() {
      const items = vm.lunchItem.split(",");
      if (items.length <= 3) {
        vm.message = "Enjoy!";
      } else {
        vm.message = "Too much!";
      }
    };
  }
})();
