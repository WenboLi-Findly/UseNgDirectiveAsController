app.directive('home', [
'$http',
function ($http) {
    return {
        replace: true,
        restrict: 'E',
        scope: {},
        templateUrl: '/app/home/home.html',
        link: function (scope, el, attr) {

        }
    }
}]);