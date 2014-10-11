window.app = angular.module('app', [
  'ui.router'
]);

// Configure routes
app.config(['$stateProvider', '$urlRouterProvider', 
                                                   function ($stateProvider, $urlRouterProvider) {
                           
                                                       // For any unmatched url, redirect to /state1
                                                       $urlRouterProvider.otherwise("/home");
                                                       //
                                                       // Now set up the states
                                                       $stateProvider
                                                           .state('home', {
                                                               url: "/home",
                                                               template: "<home></home>"
                                                           })
                                                           .state('sales', {
                                                               url: "/sales",
                                                               template:"<sales></sales>"
                                                           });
                                                   }]);



