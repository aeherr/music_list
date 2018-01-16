'use strict';

angular.module('musicBrowsing', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!'); //default value
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/browse'}); //Right now we only have /browse, so always redirect there
}]);