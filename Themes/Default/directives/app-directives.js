'use strict';

var app = app || {};

app.directive('container', function(){
    return {
        restrict: 'A',
        templateUrl: 'http://wall2003.github.io/Themes/Default/views/container.html'
    };
});

app.directive('navbarHeader', function(){
    return {
        restrict: 'E',
        templateUrl: 'http://wall2003.github.io/Themes/Default/views/navbar-header.html'
    };
});

app.directive('navbarCollapse', function(){
    return {
        restrict: 'E',
        templateUrl: 'http://wall2003.github.io/Themes/Default/views/navbar-collapse.html'
    };
});