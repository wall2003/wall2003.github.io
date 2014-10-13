'use strict';

var app = app || {};

app.directive('container', function(){
    return {
        restrict: 'A',
        templateUrl: 'https://s3.amazonaws.com/main-themes/container.html'
    };
});