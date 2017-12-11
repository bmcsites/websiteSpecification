var app = angular.module('myapp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>'
        })
        .state('questions', {
            url: '/questions',
            template: '<questions></questions>'
        })
});

app.controller('mainctrl', function() {
    this.hello = '';
});
