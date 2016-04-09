



angular.module('myapp')

.controller('ChosesController', ['$scope', function($scope) {
    $scope.choses = [
        { id: 1, firstAttribute: 'Chose 1', secondAttribute: 'La super chose 1' }
      , { id: 2, firstAttribute: 'Chose 2', secondAttribute: 'La super chose 2' }
      , { id: 3, firstAttribute: 'Chose 3', secondAttribute: 'La super chose 3' }
      , { id: 4, firstAttribute: 'Chose 4', secondAttribute: 'La super chose 4' }
      , { id: 5, firstAttribute: 'Chose 5', secondAttribute: 'La super chose 5' }
      , { id: 6, firstAttribute: 'Chose 6', secondAttribute: 'La super chose 6' }
    ]
}])
