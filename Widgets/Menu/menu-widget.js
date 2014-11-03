'use strict';

var menuWidget = angular.module('menuWidget', [])
    .controller('menuWidgetCtrl', ['$scope', '$location', function($scope, $location){
        $scope.tab = 'The story of the cat';
        $scope.subtab=['first', 'second'];

        var init = function(){
            var searchObject = $location.search();
            var tt=0;
        };

        init();
    }]);

menuWidget.directive('menuWidget', function(){
        return {
            restrict: 'A',
            templateUrl: 'menu-widget.html'
        };
    });