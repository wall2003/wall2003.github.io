'use strict';

var app = angular.module('app', []);

app.run(function($templateCache){
   $templateCache.put('root-container.html','<div>Root Container</div>');
});

app.config(function($sceProvider) {
        // Completely disable SCE.  For demonstration purposes only!
        // Do not use in new projects.
        $sceProvider.enabled(false);
    })
    .controller('appCtrl', ['$scope', function($scope){
        $scope.title = 'The story of the cat';
        var list = JSON.parse($('#content-linked-data').html());
        var tt=0;
    }]);