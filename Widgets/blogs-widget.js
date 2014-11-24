'use strict';

angular
    .module('appBlogs', [])
    .config(function($sceDelegateProvider){
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from outer templates domain.
            'http://wall2003.github.io/Widgets/**'
        ]);
    })
    .directive('blogsWidget', function(){
        return {
            restrict: 'A',
            templateUrl: 'http://wall2003.github.io/Widgets/blogs-widget.html',
            scope: {},
            controller: function($scope){
                $scope.title = 'blogs widget directive';
            }
        };
    });