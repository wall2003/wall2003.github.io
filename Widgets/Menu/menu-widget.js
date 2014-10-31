'use strict';

var menuWidget = angular.module('menuWidget', [])
    .controller('menuWidgetCtrl', ['$scope', function($scope){
        $scope.title = 'The story of the cat';
        var tt=0;
    }]);

menuWidget.directive('menuWidget', function(){
        return {
            restrict: 'E',
            templateUrl: 'menu-widget.html'
        };
    });