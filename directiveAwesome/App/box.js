app.directive('box', [
'$http',
function ($http) {
    return {        
        restrict: 'A',
        scope: {},
        link: function (scope, el, attr) {            
            el.on('click', function () {
                if (attr.alert) {
                    bootbox.alert(attr.message, function() {
                        console.log("somehting");
                    });
                } else if (attr.confirm) {
                    bootbox.confirm(attr.message, function () {
                        console.log("confirm");
                    });
                } else if (attr.prompt) {
                    bootbox.prompt(attr.message, function (result) {
                        if (result !== null) {
                            console.log(result);
                        }
                    });
                }                
            });
        }
    }
}]);