(function() {
'use strict';

angular.module('Assignment1', [])

.controller('ThisIsWhatIEat', function ($scope) {
  $scope.inpt="";
  $scope.isOk = "";

  $scope.evalIfTooMuch = function() {
    if ( $scope.inpt.split(',').length < 4 ) {
      $scope.isOk = "this is Ok";
    } else {
      $scope.isOk = "Too Much";
    }

  $scope.changeMeal = function() {
    $scope.isOk = "";
  }

  }



});

}) ();
