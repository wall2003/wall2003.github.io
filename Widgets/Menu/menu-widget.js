'use strict';

var menuWidget = angular.module('menuWidget', [])
    .controller('menuWidgetCtrl', ['$scope', function($scope){
        $scope.title = 'The story of the cat';
        var list = 0;
        var tt=0;
    }])
    .directive('menuWidget', function(){
        return {
            restrict: 'E',
            templateUrl: 'menu-widget.html'
        };
    });