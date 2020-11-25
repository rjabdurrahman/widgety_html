var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        // .when('/', {
        //     templateUrl: 'pages/home.html',
        //     controller: 'HomeCntlr',
        //     activetab: 'home'
        // })
        .when('/', {
            templateUrl: 'pages/operators.html',
            controller: 'OperatorsCntlr',
            activetab: 'operators'
        })
        .otherwise({ redirectTo: '/' });
});
app.run(function ($rootScope, $location, $route) {
    console.log('Root Controller');
    $rootScope.appId = '42cf78079a43a583c06de728156d43c8da12422d';
    $rootScope.appToken = 'efe2bb8312123a712f65164a85b4df7f93a0187629543b40ac95b88d13f32d61';
});

app.controller('HomeCntlr', function ($scope) {
    console.log('Home Controller');
});

app.controller('OperatorsCntlr', function ($scope, $rootScope, $http) {
    $scope.operators = [];
    $scope.loading = true;
    $http.get(`https://www.widgety.co.uk/api/operators.json?app_id=${$rootScope.appId}&token=${$rootScope.appToken}`)
    .then(res => {
        // console.log(res.data.operators);
        $scope.operators = res.data.operators;
        $scope.loading = false;
    })
    .catch(err => {
        console.log(err);
    })
});