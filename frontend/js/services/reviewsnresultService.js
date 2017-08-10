app.service('reviewsnresultService', function($q, $http) {

  function getJsonResponse(category) {
    var deferred = $q.defer();
      $http({
        method: 'GET',
//        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/evaluation'
        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/evaluation/' + category
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