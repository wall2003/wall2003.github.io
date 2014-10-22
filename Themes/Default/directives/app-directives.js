'use strict';

var app = app || {};

app.directive('container', function(){
    return {
        restrict: 'A',
        templateUrl: 'root-container.html'
    };
});

app.directive('navbarHeader', function(){
    return {
        restrict: 'A',
        templateUrl: 'navbar-header.html'
    };
});

app.directive('navbarMenu', function(){
    return {
        restrict: 'A',
        templateUrl: 'navbar-menu.html'
    };
});

app.directive('centerBox', function(){
    return {
        restrict: 'A',
        templateUrl: 'center-box.html'
    };
});

app.directive('rightBox', function(){
    return {
        restrict: 'A',
        templateUrl: 'right-box.html'
    };
});