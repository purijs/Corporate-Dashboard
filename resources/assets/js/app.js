/**
 * Created by JaskaranSingh on 27-09-2016.
 */
var app=angular.module("dsb",['dsb.controller_0','dsb.controller_1','dsb.controller_2',"ngRoute","chart.js"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/gview', {
            templateUrl: 'gview.php',
            controller: 'master'
        })
        .when('/kmview', {
            templateUrl: 'kmview.php',
            controller: 'masterd1'
        })
        .when('/dview', {
            templateUrl: 'dview.php',
            controller: 'masterd2'
        })
        .otherwise({
            redirectTo: '/'
        });
});