app.service('createService', function($q, $http) {

  function getJsonResponse(category) {
    var deferred = $q.defer();
      $http({
        method: 'GET',
//        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/retrieveAll'
        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/retrieveAll/' + category
      }).then(function(result) {
        deferred.resolve(result.data);
      }, function(error) {
        deferred.reject('Error Retrieving Json');
      });
      return deferred.promise;
  }

  function setReview(reviewJSON) {
    var deferred = $q.defer();
      $http({
        method: 'POST',
//        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/create',
        url: 'https://sarf-dot-cs-development-playground.appspot.com/api/analyzeSentiments/create',
        data: reviewJSON
      }).then(function(result) {
        deferred.resolve(result.data);
      }, function(error) {
        deferred.reject('Error Setting Json');
      });
      return deferred.promise;
  }

  return {
    setReview: setReview,
    getJsonResponse : getJsonResponse
  }
});