'use strict';

var app = app || {};

app.controller('leftCtrl',['$scope', function($scope){
    $scope.menu = 'Menu LEFT';
}]);

app.controller('centerCtrl',['$scope', function($scope){
    $scope.center = 'Menu CENTER';
}]);

app.controller('rightCtrl',['$scope', function($scope){
    $scope.right = 'Menu RIGHT';
}]);