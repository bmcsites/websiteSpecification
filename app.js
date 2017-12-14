var app = angular.module('myapp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home class="col-xl-12 col-lg-12 col-md-12 col-sm-12"></home>'
        })
        .state('guide', {
            url: '/guide',
            template: '<guide></guide>'
        })
        .state('questions', {
            url: '/questions',
            template: '<questions></questions>'
        })
});

app.controller('mainctrl', function() {
    this.hello = '';
});
