app.service('reviewsService', function($q, $http) {

  function getJsonResponse() {
    var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/retrieveAll'
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