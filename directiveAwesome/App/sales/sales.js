app.directive('sales', [
'$http',
function ($http) {
    return {
        replace: true,
        restrict: 'E',
        scope: {},
        templateUrl: '/app/sales/sales.html',
        link: function (scope, el, attr) {
            scope.items = [{ customer: "Owen", product: "Phone" }, { customer: "Lucas", product: "TV" }, { customer: "John", product: "Toys" }];


        }
    }
}]);