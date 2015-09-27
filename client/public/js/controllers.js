app.controller('BeerController', function($scope, $timeout, BeerFactory){

  $scope.success = false;
  $scope.beer = {};
  $scope.edit = false;
  $scope.findBeer = '';

  $scope.getData = function(url){
    BeerFactory.get(url).then(function(response){
      $scope.beers = response.data;
    });
  };

  function successMessage(){
    $scope.success = false;
  }

  $scope.postData = function(url){
    var payload = $scope.beer;
    BeerFactory.post(url, payload).then(function(response){
      console.log(response);
      $scope.beers.push(response.data);
      $scope.beer = {};
      $scope.success = true;
      $scope.message = 'Bam, Beer to the FACE';
      $timeout(successMessage, 10000);
    });
  };

  $scope.putBeer = function(id){
    $scope.findBeer = '/api/v1/beer/' + id;
    BeerFactory.get($scope.findBeer).then(function(response){
      console.log(response);
      $scope.beer = response.data;
      $scope.edit = true;
    });
  };

  $scope.updateBeer = function(){
    var payload = $scope.beer;
    console.log(payload);
    BeerFactory.put($scope.findBeer, payload).then(function(response){
      console.log(response);
      $scope.beer = {};
      $scope.getData('/api/v1/beers');
    });
  };

  $scope.deleteBeer = function(id){
    $scope.findBeer = 'api/v1/beer/'+id;
    BeerFactory.delete($scope.findBeer).then(function(response){
      console.log(response);
      $scope.getData('/api/v1/beers');
        $scope.success = true;
        $scope.message = 'Bam, Beer DELETED';
        $timeout(successMessage, 10000);
    });
  };


});
