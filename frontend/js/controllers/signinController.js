app.controller('signinController', [ '$scope', 'signinService', '$log','$state',
  function($scope, signinService, $log, $state ) {

    $scope.goToHome = function() {
      $state.go('home');
    }
    $scope.goToCreate = function() {
      $state.go('create');
    }
    $scope.goToAdminSignin = function() {
      $state.go('adminsignin');
    }
    $scope.goToReviewerHome = function() {
      $state.go('reviewerhome');
    }

}]);