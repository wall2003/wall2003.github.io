var appMain = appMain || {};

(function(){
    'use strict';

    appMain
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

})();
