/**
 * Created by JaskaranSingh on 04-10-2016.
 */
angular.module('dsb.controller_1', [])
    .controller('masterd1', ['$scope', '$http','$interval',function($scope,$http,$interval){
        var promise=$interval(function() {
            $http.get("./issues.json").then(function(response) {
                $scope.issues = response.data.issue;
            });
            $http.get('./customers.csv').success(function(data) {
                var allTextLines = data.split(/\r\n|\n/);
                var data = [];
                angular.forEach(allTextLines, function(item) {
                    if (item) data.push(item);
                });
                $scope.data=data
                $scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sept","Oct","Nov","Dec"];
                $scope.series = ['Customers Paying'];
                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };
                $scope.options = {
                    scales: {
                        yAxes: [
                            {
                                id: 'y-axis-1',
                                type: 'linear',
                                display: true,
                                position: 'left'
                            }
                        ]
                    }
                };
            });
            $http.get('./issues_r.csv').success(function(data) {
                var allTextLines1 = data.split(/\r\n|\n/);
                var data1 = [];
                angular.forEach(allTextLines1, function(item) {
                    if (item) data1.push(item);
                });
                $scope.data1=data1
                $scope.labels1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sept","Oct","Nov","Dec"];
                $scope.series1 = ['Issues reported last year'];
            });
        }, 100);
    }]);