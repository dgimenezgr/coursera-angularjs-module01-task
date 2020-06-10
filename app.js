(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope) {

  /** Variable declaration */
  $scope.items = "";
  $scope.result = "";
  $scope.boxStyle = "";
  $scope.fontStyle = "";

  /**
   * checkItems - Checks the number of items by splitting string in array of elements and evaluating length of array. Serves data to evaluate() function
   * @param {String} $scope.items Input from items input box
   * @return {Number} $scope.itemNo Integer equaling length of $scope.items or zero if empty array
   */
  $scope.checkItems = function () {
    /** If items string is empty, length equals zero. Else, split by comma, filter null, undefined, whitespace and empty values and evaluate length */
    if ($scope.items == "") {
      $scope.itemNo = 0;
    } else {
      var itemsUnf = $scope.items.split(',');
      var itemsFilt = itemsUnf.filter(function (e) {
        return (e.replace(/ /g,'') !== (undefined || null || ''));
      });
      console.log(itemsFilt);

      $scope.itemNo = itemsFilt.length;
    }
    
    /** Serve length to evaluator function */
    $scope.evaluate();
  };

  /**
   * evaluate - Checks number of items and constructs user prompt.
   * @param {Number} $scope.itemNo Integer output from checkItems() function
   * @return {String} $scope.result String for user prompt
   */
  $scope.evaluate = function() {
    /** Concatenate if loops to check item number condition and string to return */
    if ($scope.itemNo == 0) {
      $scope.result = "Please enter data first";
      $scope.boxStyle = {"border-color": 'red'};
      $scope.fontStyle = {"color": 'red'};
    } else if ($scope.itemNo > 3) {
      $scope.result = "Too much!";
      $scope.boxStyle = {"border-color": 'green'};
      $scope.fontStyle = {"color": 'green'};
    } else {
      $scope.result = "Enjoy!";
      $scope.boxStyle = {"border-color": 'green'};
      $scope.fontStyle = {"color": 'green'};
    }
  };
 
}

})();
