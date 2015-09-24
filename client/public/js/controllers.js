app.controller('BeerController', function($scope, BeerFactory){
  $scope.message = 'testing beer controller';

  $scope.getData = function(url){
    BeerFactory.get(url).then(function(response){
      $scope.beers = response.data;
    });
  };

  $scope.postData = function(url){
    var payload = {
      name : $scope.name,
      type: $scope.type,
      abv : $scope.abv
    };
    BeerFactory.post(url, payload).then(function(response){
      console.log(response);
      $scope.beers.push(response.data);
    });
  };



});
