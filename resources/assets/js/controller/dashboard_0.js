/**
 * Created by JaskaranSingh on 04-10-2016.
 */
angular.module('dsb.controller_0', [])
    .controller('master', ['$scope','$interval','$http', function($scope,$interval,$http){
        $http.get("./locations.json").then(function (response) {
            $scope.points = response.data.loc;
        });
        $scope.customIcon = {
            "scaledSize": [32, 32],
            "url": "http://www.myiconfinder.com/uploads/iconsets/256-256-a5485b563efc4511e0cd8bd04ad0fe9e.png"
        };

    }]);