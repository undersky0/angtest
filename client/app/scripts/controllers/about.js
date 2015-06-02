'use strict';

/**
 * @ngdoc function
 * @name angtestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angtestApp
 */
angular.module('angtestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
