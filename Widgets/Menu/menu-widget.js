'use strict';

var menuWidget = angular.module('menuWidget', [])
    .controller('menuWidgetCtrl', ['$scope', function($scope){
        $scope.tab = 'The story of the cat';
        $scope.subtab=['first', 'second'];
    }]);

menuWidget.directive('menuWidget', function(){
        return {
            restrict: 'A',
            templateUrl: 'menu-widget.html'
        };
    });