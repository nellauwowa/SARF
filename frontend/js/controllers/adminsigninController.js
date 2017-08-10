app.controller('adminsigninController', [ '$scope', 'adminsigninService', '$log','$state',
  function($scope, adminsigninService, $log, $state ) {

    $scope.goToSignin = function() {
      $state.go('signin');
    }
    $scope.goToHome = function() {
      $state.go('home');
    }
    $scope.goToReviewsnResult = function() {
      $state.go('reviewsnresult');
    }
    $scope.goToAdminHome = function() {
      $state.go('adminhome');
    }
}]);