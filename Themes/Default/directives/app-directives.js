'use strict';

var app = app || {};

app.directive('container', function(){
    return {
        restrict: 'A',
        templateUrl: '/root-container.html'
    };
});

app.directive('navbarHeader', function(){
    return {
        restrict: 'A',
        template: '<div>Header</div>'
    };
});

app.directive('navbarCollapse', function(){
    return {
        restrict: 'A',
        template: '<div>Collapse</div>'
    };
});