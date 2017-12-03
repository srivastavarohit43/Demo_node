app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'clientMvc/partialPages/login.html',
            controller: 'ctrl1'
        })
});