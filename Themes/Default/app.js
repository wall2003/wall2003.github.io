
var app = angular.module('app', []);

app.controller('appCtrl', ['$scope', function($scope){
    $scope.model = {};
    var init = function(){
        var model = $('#').html();
        $scope.model = JSON.stringify(model);
    };

    init();
}]);