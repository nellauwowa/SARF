app.controller('adminHomeController', [ '$scope', '$log','$state',
  function($scope, $log, $state ) {

    $scope.goToReviewsnResult = function() {
      $state.go('reviewsnresult');
    }
    $scope.goToAdminHome = function() {
      $state.go('adminhome');
    }
    $scope.goToAdminSignin = function() {
      $state.go('adminsignin');
    }
    $scope.goToSummary = function() {
      $state.go('summary');
    }
}]);