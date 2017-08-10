app.controller('reviewerHomeController', [ '$scope', '$log','$state',
  function($scope, $log, $state ) {

    $scope.goToCreate = function() {
      $state.go('create');
    }
    $scope.goToSignin = function() {
      $state.go('signin');
    }
    $scope.goToReviews = function() {
      $state.go('reviews');
    }
}]);