app.service('summaryService', function($q, $http) {

  function getJsonResponse(category) {
    var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/summary/'+category
      }).then(function(result) {
        deferred.resolve(result.data);
      }, function(error) {
        deferred.reject('Error Retrieving Json');
      });
      return deferred.promise;
  }

  function getJsonResponseRatings() {
    var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/ratings'
      }).then(function(result) {
        deferred.resolve(result.data);
      }, function(error) {
        deferred.reject('Error Retrieving Json');
      });
      return deferred.promise;
  }

  return {
    getJsonResponse : getJsonResponse,
    getJsonResponseRatings : getJsonResponseRatings
  }
});