'use strict';

/* jasmine specs for controllers go here */
describe('Kata controllers', function() {

  describe('KataCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectJSONP('https://api.bitbucket.org/1.0/repositories/TedNeward/' +
                               'archkatas/src/tip/?callback=JSON_CALLBACK').
          respond([{ "files" : [
                              {"size": 803,
                               "path": "WheresFluffy.json",
                               "timestamp": "2012-03-05 12:22:49",
                               "utctimestamp": "2012-03-05 12:22:49+00:00",
                               "revision": "0090bf41673c"},
                              {"size": 803,
                               "path": "WheresFluffy.json",
                               "timestamp": "2012-03-05 12:22:49",
                               "utctimestamp": "2012-03-05 12:22:49+00:00",
                               "revision": "0090bf41673c"}
                              ]
                    }]);
      $httpBackend.expectJSONP('https://api.bitbucket.org/1.0/repositories/TedNeward/' +
                               'archkatas/src/tip/WheresFluffy.json?callback=JSON_CALLBACK').
          respond([{"path": "WheresFluffy.json",
                    "data": "{\n  \"title\" : \"Where's Fluffy?\",\n  \"description\" : [\n    \"People who lose their pets often post on Craigslist or post fliers around the neighborhood. Local business folks want to go one better, a service describing missing pets, pet rewards (brokered/managed by the service), and location data points (GPS) of pet sightings\",\n    \"Requirements: users interested in finding pets register on the site; anyone can see a list of pets missing near to their location; pet finders can post \\\"pet found\\\" messages (with mandatory photo proof) and collect rewards on confirmation from pet owners; users can comment on pet missing entries, offering data points (sighted, area checked with no results, etc); local scalability (per-city), but possibly scaling out to other cities; mobile device accessibility\"\n  ]\n}",
                    "size": 803}]);

      scope = $rootScope.$new();
      ctrl = $controller(KataCtrl, {$scope: scope});
    }));


    it('should find one kata, WheresFluffy', function() {
      expect(scope.kata.title).toEqual([{title: 'Where\'s Fluffy?'}]);
    });
  });
});
