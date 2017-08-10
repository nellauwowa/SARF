app.controller('summaryController', [ '$scope', 'summaryService', '$log','$state',
  function($scope, summaryService, $log, $state ) {

    pos_rate = 0;
    neut_rate = 0;
    neg_rate = 0;
    pos_revs = 0;
    neg_revs = 0;
    neut_revs = 0;
    total_revs = 0;

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
        summaryService.getJsonResponse($scope.category).then(function(response){
        $log.info('JSON Response(reviewsnresultPage) =======>', response);

        $scope.content = {};
        $scope.result = {};
        $scope.count = {};
        i = 0;

        var models = response;

    //  $log.info('JSON Response(reviewsPage) =======>', models.Positive_rating);
        pos_rate = models.Positive_rating * 100;
        neut_rate = models.Neutral_rating * 100;
        neg_rate = models.Negative_rating * 100;

        if(pos_rate%1 != 0){
            pos_rate = (models.Positive_rating * 100).toFixed(2);
        }
        if(neg_rate%1 != 0){
            neg_rate = (models.Negative_rating * 100).toFixed(2);
        }
        if(neut_rate%1 !=0){
            neut_rate = (models.Neutral_rating * 100).toFixed(2);
        }





        pos_revs = models.Positive_count;
        neut_revs = models.Neutral_count;
        neg_revs = models.Negative_count;

        $scope.result[i] = "Positive rating: " + models.Positive_rating + "    |     Neutral rating:" + models.Neutral_rating + "    |     Negative rating:"  + models.Negative_rating;
        $scope.count[i] = "Totals: " + models.Total_count + "Positives: " + models.Positive_count + "    |     Neutrals:" + models.Neutral_count + "    |     Negatives:"  + models.Negative_count;

        Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
              Chart.defaults.global.defaultFontColor = 'white';
            let massPopChart = new Chart(myChart, {
                type:'pie', //bar, horizontalBar, pie, line, doughnut, polarArea
                data:{ labels:[' N e g a t i v e ',' N e u t r a l ',' P o s i t i v e '],
                    datasets:[{ label: 'S E N T I M E N T  S C O R E',


                    data: [neg_rate, neut_rate, pos_rate],
                        backgroundColor: ['rgba(245, 0, 0, 0.1)','rgba(0, 20, 245, 0.1)', 'rgba(33, 250, 0, 0.1)'],
                        borderWidth:2, borderColor: ['rgba(245, 0, 0, 1)','rgba(0, 20, 245, 1)','rgba(33, 250, 0, 1)'],
                        hoverBorderWidth: 3, hoverBorderColor:['red','blue','green'],
                         }] },
                options:{ title:{display:true, text: 'RA T I N G S'},
                    legend:{display: true, position: 'bottom', labels: {fontColor: 'white'}}, tooltips: {enabled:true}} });
    //    $log.info('JSON Response(reviewsPage) =======>', $scope.content);

        Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
              Chart.defaults.global.defaultFontColor = 'white';
            massPopChart = new Chart(myChart2, {
                type:'bar', //bar, horizontalBar, pie, line, doughnut, polarArea
                data:{ labels:[' N e g a t i v e ',' N e u t r a l ',' P o s i t i v e '],
                    datasets:[{ label: 'S E N T I M E N T  S C O R E',


                    data: [neg_revs, neut_revs, pos_revs],
                       backgroundColor: ['rgba(245, 0, 0, 0.1)','rgba(0, 20, 245, 0.1)', 'rgba(33, 250, 0, 0.1)'],
                        borderWidth:2, borderColor: ['rgba(245, 0, 0, 1)','rgba(0, 20, 245, 1)','rgba(33, 250, 0, 1)'],
                        hoverBorderWidth: 3, hoverBorderColor:['red','blue','green'],
                         }] },
                options:{ title:{display:true, text: 'S E N T I M E N T  C O U N T S'},
                    legend:{display: false, position: 'bottom', labels: {fontColor: 'white'}}, tooltips: {enabled:true}} });

        //-------------------------------------------------------------------------------
        Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
              Chart.defaults.global.defaultFontColor = 'white';
            massPopChart = new Chart(myChart3, {
                type:'pie', //bar, horizontalBar, pie, line, doughnut, polarArea
                data:{ labels:[' N e g a t i v e ',' N e u t r a l ',' P o s i t i v e '],
                    datasets:[{ label: 'S E N T I M E N T  S C O R E',


                    data: [neg_rate, neut_rate, pos_rate],
                        backgroundColor: ['rgba(245, 0, 0, 0.1)','rgba(0, 20, 245, 0.1)', 'rgba(33, 250, 0, 0.1)'],
                        borderWidth:2, borderColor: ['rgba(245, 0, 0, 1)','rgba(0, 20, 245, 1)','rgba(33, 250, 0, 1)'],
                        hoverBorderWidth: 3, hoverBorderColor:['red','blue','green'],
                         }] },
                options:{ title:{display:true, text: 'RA T I N G S'},
                    legend:{display: true, position: 'bottom', labels: {fontColor: 'white'}}, tooltips: {enabled:true}} });
    //    $log.info('JSON Response(reviewsPage) =======>', $scope.content);

        Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
              Chart.defaults.global.defaultFontColor = 'white';
            massPopChart = new Chart(myChart4, {
                type:'bar', //bar, horizontalBar, pie, line, doughnut, polarArea
                data:{ labels:[' N e g a t i v e ',' N e u t r a l ',' P o s i t i v e '],
                    datasets:[{ label: 'S E N T I M E N T  S C O R E',


                    data: [neg_revs, neut_revs, pos_revs],
                       backgroundColor: ['rgba(245, 0, 0, 0.1)','rgba(0, 20, 245, 0.1)', 'rgba(33, 250, 0, 0.1)'],
                        borderWidth:2, borderColor: ['rgba(245, 0, 0, 1)','rgba(0, 20, 245, 1)','rgba(33, 250, 0, 1)'],
                        hoverBorderWidth: 3, hoverBorderColor:['red','blue','green'],
                         }] },
                options:{ title:{display:true, text: 'S E N T I M E N T  C O U N T S'},
                    legend:{display: false, position: 'bottom', labels: {fontColor: 'white'}}, tooltips: {enabled:true}} });

        //-------------------------------------------------------------------------------

        Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
              Chart.defaults.global.defaultFontColor = 'white';
            massPopChart = new Chart(myChart5, {
                type:'pie', //bar, horizontalBar, pie, line, doughnut, polarArea
                data:{ labels:[' N e g a t i v e ',' N e u t r a l ',' P o s i t i v e '],
                    datasets:[{ label: 'S E N T I M E N T  S C O R E',


                    data: [neg_rate, neut_rate, pos_rate],
                        backgroundColor: ['rgba(245, 0, 0, 0.1)','rgba(0, 20, 245, 0.1)', 'rgba(33, 250, 0, 0.1)'],
                        borderWidth:2, borderColor: ['rgba(245, 0, 0, 1)','rgba(0, 20, 245, 1)','rgba(33, 250, 0, 1)'],
                        hoverBorderWidth: 3, hoverBorderColor:['red','blue','green'],
                         }] },
                options:{ title:{display:true, text: 'RA T I N G S'},
                    legend:{display: true, position: 'bottom', labels: {fontColor: 'white'}}, tooltips: {enabled:true}} });
    //    $log.info('JSON Response(reviewsPage) =======>', $scope.content);

        Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
              Chart.defaults.global.defaultFontColor = 'white';
            massPopChart = new Chart(myChart6, {
                type:'bar', //bar, horizontalBar, pie, line, doughnut, polarArea
                data:{ labels:[' N e g a t i v e ',' N e u t r a l ',' P o s i t i v e '],
                    datasets:[{ label: 'S E N T I M E N T  S C O R E',


                    data: [neg_revs, neut_revs, pos_revs],
                        backgroundColor: ['rgba(245, 0, 0, 0.1)','rgba(0, 20, 245, 0.1)', 'rgba(33, 250, 0, 0.1)'],
                        borderWidth:2, borderColor: ['rgba(245, 0, 0, 1)','rgba(0, 20, 245, 1)','rgba(33, 250, 0, 1)'],
                        hoverBorderWidth: 3, hoverBorderColor:['red','blue','green'],
                         }] },
                options:{ title:{display:true, text: 'S E N T I M E N T  C O U N T S'},
                    legend:{display: false, position: 'bottom', labels: {fontColor: 'white'}}, tooltips: {enabled:true}} });

//        $scope.displayReview = $scope.result;
        });
    }






    $scope.back = function () {
        window.location.reload();
    }

    $scope.goToAddapp = function() {
      $state.go('addapp');
    }
    $scope.goToAdminSignin = function() {
      $state.go('adminsignin');
    }
    $scope.goToAdminHome = function() {
      $state.go('adminhome');
    }
    $scope.goToReviewsnResult = function() {
      $state.go('reviewsnresult');
    }
}]);