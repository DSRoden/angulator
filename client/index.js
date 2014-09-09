(function(){
  'use strict';

  angular.module('angulator', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.display = '0';

    $scope.answer = function(){
      var result= 0;
      switch($scope.operator){
        case '+':
          result = parseInt($scope.memory) + parseInt($scope.display);
          break;
        case '-':
          result = parseInt($scope.memory) - parseInt($scope.display);
          break;
        case '/':
          result = parseInt($scope.memory) / parseInt($scope.display);
          break;
        case '*':
          result = parseInt($scope.memory) * parseInt($scope.display);
      }

      $scope.display = result;
      $scope.operator = $scope.memory = '';
    };

    $scope.calculate = function(op){
      $scope.operator = op;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };

    $scope.clearDisplay = function(){
      $scope.display = '0';
    };

    $scope.addDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}

      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };
  }]);
})();
