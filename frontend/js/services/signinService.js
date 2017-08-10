app.service('signinService', function($q, $http) {

  function getJsonResponse() {
    var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'http://stats.nba.com/js/data/widgets/home_playoffs.json'
      }).then(function(result) {
        deferred.resolve(result.data);
      }, function(error) {
        deferred.reject('Error Retrieving Json');
      });
      return deferred.promise;
  }

  return {
    getJsonResponse : getJsonResponse
  }
});