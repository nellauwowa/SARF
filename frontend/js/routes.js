app.config(function($stateProvider, $urlRouterProvider){

  // console.log('Loading UI-Router');

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home',{
      url:'/',
      templateUrl: 'templates/home.html'
    })
    .state('create', {
      url: '/reviewer/add/review',
      templateUrl: 'templates/create.html'
    })
    .state('reviews', {
      url: '/reviewer/reviews',
      templateUrl: 'templates/reviews.html'
    })
    .state('reviewsnresult', {
      url: '/admin/reviews/result',
      templateUrl: 'templates/reviewsnresult.html'
    })
    .state('summary', {
      url: '/admin/summary',
      templateUrl: 'templates/summary.html'
    })
    .state('reviewerhome', {
      url: '/reviewer',
      templateUrl: 'templates/reviewerhome.html'
    })
    .state('signin', {
      url: '/reviewer/signin',
      templateUrl: 'templates/signin.html'
    })
    .state('adminsignin', {
      url: '/admin/signin',
      templateUrl: 'templates/adminsignin.html'
    })
    .state('adminhome', {
      url: '/admin',
      templateUrl: 'templates/adminhome.html'
    });


    
});