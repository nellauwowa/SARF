app.controller('reviewsController', [ '$scope', 'reviewsService', 'createService', 'summaryService','$log','$state',
  function($scope, reviewsService, createService, summaryService, $log, $state ) {

    summaryService.getJsonResponseRatings().then(function(response){
        $log.info('JSON Response(reviewsnresultPage) =======>', response);

        var models = response;
        $scope.movie1Ratings = Math.round(models['Movie1'].Positive_rating * 100);
        $scope.movie2Ratings = Math.round(models['Movie2'].Positive_rating * 100);
        $scope.movie3Ratings = Math.round(models['Movie3'].Positive_rating * 100);
//        $log.info('JSON Response(reviewsnresultPage) =======>', $scope.movie3Ratings);

    });


    $scope.displayReview = {};

    $scope.setMovies = function(cat) {
        $scope.category = cat;

        createService.getJsonResponse($scope.category).then(function(response){
        $log.info('JSON Response(reviewsPage) =======>', response);

        $scope.content = {};
        i = 0;
        var models = response;
        for (var model in models){
    //        $log.info('JSON Response(reviewsPage) =======>', models[model].content);
            $scope.content[i] = models[model].content;
            i = i+1;
        }


    //    $log.info('JSON Response(reviewsPage) =======>', $scope.content);
        $scope.displayReview = $scope.content;
        });
    }

    $scope.back = function () {
        window.location.reload();
    }

    $scope.goToCreate = function() {
      $state.go('create');
    }
    $scope.goToSignin = function() {
      $state.go('signin');
    }
    $scope.goToReviewerHome = function() {
      $state.go('reviewerhome');
    }
//    var newReview = createService.getJsonResponse();


}]);