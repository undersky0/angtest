'use strict';

/**
 * @ngdoc function
 * @name angtestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angtestApp
 */
angular.module('angtestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
