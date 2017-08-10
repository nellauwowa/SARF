app.controller('reviewsnresultController', [ '$scope', 'reviewsnresultService', 'summaryService', '$log','$state',
  function($scope, reviewsnresultService, summaryService, $log, $state ) {

    $scope.goToAddapp = function() {
      $state.go('addapp');
    }
    $scope.goToAdminSignin = function() {
      $state.go('adminsignin');
    }
    $scope.goToAdminHome = function() {
      $state.go('adminhome');
    }
    $scope.goToSummary = function() {
      $state.go('summary');
    }

    $scope.displayReview = {};

    $scope.back = function () {
        window.location.reload();
    }

    summaryService.getJsonResponseRatings().then(function(response){
        $log.info('JSON Response(reviewsnresultPage) =======>', response);

        var models = response;
        $scope.movie1Ratings = Math.round(models['Movie1'].Positive_rating * 100);
        $scope.movie2Ratings = Math.round(models['Movie2'].Positive_rating * 100);
        $scope.movie3Ratings = Math.round(models['Movie3'].Positive_rating * 100);
//        $log.info('JSON Response(reviewsnresultPage) =======>', $scope.movie3Ratings);

    });

    $scope.setMovies = function(cat) {
        $scope.category = cat;
        reviewsnresultService.getJsonResponse($scope.category).then(function(response){


        $scope.result = {};
        i = 0;
        var models = response;
        for (var model in models){
    //        $log.info('JSON Response(reviewsPage) =======>', models[model].content);
//              for checking scores
//            $scope.result[i] = models[model].content + "    |     " + models[model].polarity + " review." + "    |     " + models[model].score;
              $scope.result[i] = models[model].content + "    |     " + models[model].polarity + " review.";
            i = i+1;
        }
        $log.info('JSON Response(wew) =======>', $scope.result);
        $scope.displayReview = $scope.result;
        });
    }

}]);