'use strict';

/* Controllers */

/**
 * A controller for doing the fetch from BitBucket
 */
function KataCtrl($scope, $routeParams, $http) {
  var kataBase = 'https://api.bitbucket.org/1.0/repositories/TedNeward/' +
                 'archkatas/src/tip/';

  var fetch = function(path, onSuccess) {
    $http({method:'jsonp', url: kataBase + path + '?callback=JSON_CALLBACK'}).success(function(contents) {
      onSuccess(contents);
    }).error(function(data, status) {
      console.log(data);
      console.log("Failure: " + status);
    })
  };
  var fetchKata = function(path) {
    fetch(path, function(contents) {
      $scope.kata = angular.fromJson(contents.data);
      $scope.kata.filename = path;
    });
  };

  if (typeof $routeParams.kata !== 'undefined') {
    // Choose one at random--this requires two trips, once to figure out how
    // big the directory containing all the .json files is, then once we've
    // chosen one at random, a second to get the actual kata
    //
    if ($routeParams.kata == 'all') {
      // fetch all katas and determine the size of the collection
      fetch('', function(contents) {
        var items = contents.files.length;
        if (items > 0)
        {
          $scope.kata = {};
          $scope.kata.title = "All Katas";
          $scope.kata.description = [];
          angular.forEach(contents.files, function(it) {
            $scope.kata.description.push(it.path);
          });
          $scope.kata.filename = "all";
        }
      });
    }
    else if ($routeParams.kata.length > 0) {
      // Fetch a particular kata
      fetchKata($routeParams.kata);
    }
  }
  else {
    // fetch a kata at random
    fetch('', function(data) {
      var contents = angular.fromJson(data);
      var items = contents.files.length;
      if (items > 0)
      {
        var which = Math.floor(Math.random() * items);
        var path = contents.files[which].path;
        fetchKata(path)
      }
    });
  }
}

/**
 * A No-op controller as a placeholder for otherwise static content
 */
function NoopCtrl($scope, $http) {
}


//NoopCtrl.$inject = ['$scope', '$http'];
