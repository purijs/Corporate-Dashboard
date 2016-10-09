/**
 * Created by JaskaranSingh on 04-10-2016.
 */
angular.module('dsb.controller_2', [])
    .controller('masterd2', ['$scope', '$http','$interval',function($scope,$http,$interval){
        $interval(function() {
            $http.get("./issues.json").then(function(response) {
                $scope.issues = response.data.issue;
            });
        }, 100);
        $scope.filterTypeSa=true
        $scope.filterTypeEp=false
        $scope.filterTypeEj=false
        $scope.filterTypeEg=false
        $scope.filterTypeAo=false
        $scope.filterTypeAc=false
        $scope.filterTypeDa=false
        $scope.filters=["Show All","Emp: M. Panda","Emp: Jackie Rob","Emp: George","All Open","All Closed"]
        $scope.sorts=["None","Date"]
        $scope.updS= function() {
            $scope.form = {sorts : $scope.filters[0].value};
        }
        $scope.updF= function() {
            $scope.form = {filters : $scope.sorts[0].value};
        }
        $scope.sort = function()
        {
            $scope.sortType=$scope.form.sort
            if($scope.sortType=='None') {
                $scope.filterTypeSa=true
                $scope.filterTypeSe=false
                $scope.filterTypeSc=false
                $scope.filterTypeAo=false
                $scope.filterTypeAc=false
                $scope.filterTypeEp=false
                $scope.filterTypeEj=false
                $scope.filterTypeEg=false
                $scope.filterTypeDa=false
            }
            if($scope.sortType=='Date') {
                $scope.filterTypeSa=false
                $scope.filterTypeSe=false
                $scope.filterTypeSc=false
                $scope.filterTypeAo=false
                $scope.filterTypeAc=false
                $scope.filterTypeEp=false
                $scope.filterTypeEj=false
                $scope.filterTypeEg=false
                $scope.filterTypeDa=true
            }
        }
        $scope.filter = function()
        {
            $scope.filterType=$scope.form.filter
            if($scope.filterType=='Emp: M. Panda') {
                $scope.filterTypeSa=false
                $scope.filterTypeSe=false
                $scope.filterTypeSc=false
                $scope.filterTypeAo=false
                $scope.filterTypeAc=false
                $scope.filterTypeEp=true
                $scope.filterTypeEj=false
                $scope.filterTypeEg=false
                $scope.filterTypeDa=false
            }
            if($scope.filterType=='Emp: Jackie Rob') {
                $scope.filterTypeSa=false
                $scope.filterTypeSe=false
                $scope.filterTypeSc=false
                $scope.filterTypeAo=false
                $scope.filterTypeAc=false
                $scope.filterTypeEp=false
                $scope.filterTypeEj=true
                $scope.filterTypeEg=false
                $scope.filterTypeDa=false
            }
            if($scope.filterType=='Emp: George') {
                $scope.filterTypeSa=false
                $scope.filterTypeSe=false
                $scope.filterTypeSc=false
                $scope.filterTypeAo=false
                $scope.filterTypeAc=false
                $scope.filterTypeEp=false
                $scope.filterTypeEj=false
                $scope.filterTypeEg=true
                $scope.filterTypeDa=false
            }
            if($scope.filterType=='Show All') {
                $scope.filterTypeSa=true
                $scope.filterTypeSe=false
                $scope.filterTypeSc=false
                $scope.filterTypeAo=false
                $scope.filterTypeAc=false
                $scope.filterTypeEp=false
                $scope.filterTypeEj=false
                $scope.filterTypeEg=false
            }
            if($scope.filterType=='Same Employee') {
                $scope.filterTypeSa=false
                $scope.filterTypeSe=true
                $scope.filterTypeSc=false
                $scope.filterTypeAo=false
                $scope.filterTypeAc=false
                $scope.filterTypeEp=false
                $scope.filterTypeEj=false
                $scope.filterTypeEg=false
                $scope.filterTypeDa=false
            }
            if($scope.filterType=='All Open') {
                $scope.filterTypeSa=false
                $scope.filterTypeSe=false
                $scope.filterTypeSc=false
                $scope.filterTypeAo=true
                $scope.filterTypeAc=false
                $scope.filterTypeEp=false
                $scope.filterTypeEj=false
                $scope.filterTypeEg=false
                $scope.filterTypeDa=false
            }
            if($scope.filterType=='All Closed') {
                $scope.filterTypeSa=false
                $scope.filterTypeSe=false
                $scope.filterTypeSc=false
                $scope.filterTypeAo=false
                $scope.filterTypeAc=true
                $scope.filterTypeEp=false
                $scope.filterTypeEj=false
                $scope.filterTypeDa=false
                $scope.filterTypeEg=false
            }
        }
    }]);