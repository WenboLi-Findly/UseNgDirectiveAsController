app.directive('datetimepicker', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.datetimepicker({
                minDate:0
            });


        }
    };
})