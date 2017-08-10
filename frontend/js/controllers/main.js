var app = angular.module('appViewer', ['ui.router']);

app.controller('mainController', [ '$scope', '$log','$state',
  function($scope, $log, $state ) {

    $scope.goToSignin = function() {
      $state.go('signin');
    }
}]);