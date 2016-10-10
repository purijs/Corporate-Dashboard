/**
 * Created by JaskaranSingh on 04-10-2016.
 */
angular.module('dsb.controller_0', [])
    .controller('master', ['$scope','$interval','$http', function($scope,$interval,$http){
        var promise=$interval(function() {
            $http.get("./locations.json").then(function (response) {
                $scope.points = response.data.loc;
            });
        },5000);
        $scope.customIcon = {
            "scaledSize": [32, 32],
            "url": "http://www.myiconfinder.com/uploads/iconsets/256-256-a5485b563efc4511e0cd8bd04ad0fe9e.png"
        };
    }]);