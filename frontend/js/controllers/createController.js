app.controller('createController', [ '$scope', 'createService', '$log','$state', '$http',
  function($scope, createService, $log, $state, $http ) {

    $scope.goToSignin = function() {
      $state.go('signin');
    }
    $scope.goToReviews = function() {
      $state.go('reviews');
    }
    $scope.goToReviewerHome = function() {
      $state.go('reviewerhome');
    }
    $scope.createReview = function() {



        $scope.reviewJSON = {"category": $scope.category, "review": $scope.review1};



        if (!$scope.category) {
            alert('You must choose a category.');
        }
        else if (!$scope.review1) {
            alert('Your review is empty.');
        }
        else {

            createService.setReview($scope.reviewJSON).then(function(data){
                alert('Your review was successfully submitted.');
                $scope.review1 = "";
            });
        }

        $log.info('JSON Response(create) ====>', $scope.review1);
        $scope.review1 = "";










    }



//
//    var length = addappService.getLength();
//    $scope.lengthDisplay = length;

}]);