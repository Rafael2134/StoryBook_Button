
export default function myButton(){

var myApp = angular.module("app", []);
myApp.controller("controller", function ($scope) {
    $scope.myButton = 'btn-first';
    $scope.changeCol = function () {
        $scope.myButton = "btn-second";
    };
});
}