app.factory('BeerFactory', ['$http', function($http){
  var obj = {};

  obj.get = function(url){
    return $http.get(url);
  };

  obj.post = function(url, payload){
    return $http.post(url, payload);
  };

  obj.delete = function(url){
    return $http.delete(url);
  };

  obj.put = function(url, payload){
    return $http.put(url, payload);
  };

  return obj;
}]);
