'use strict';

angular.module('musicBrowsing', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!'); //default value
  $locationProvider.html5Mode(true);

  $routeProvider.when('/browse', 
  {
    templateUrl: 'views/browse.html'
  })
  .otherwise({redirectTo: '/browse'}); //Right now we only have /browse, so always redirect there
}]).
filter('secondsToTime', ['$filter', function($filter) { //Convert seconds to m:ss
  return function(seconds) {
    return $filter('date')(new Date(0, 0, 0).setSeconds(seconds), 'm:ss');
  };
}])