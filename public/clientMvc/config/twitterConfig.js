'use strict';


var API = "http://localhost:3030/";

app.config(function($authProvider) {
    $authProvider.twitter({
        url: API + 'auth/twitter'
    });
});