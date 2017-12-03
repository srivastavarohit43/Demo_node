'use strict';

const mongoose = require('mongoose'),
    path = require('path'),
    request = require('request'),
    qs = require('querystring'),
    conf = require(path.resolve(`./config/env/${process.env.PROJECT_ENV}`)),
    userModel = require(path.resolve('./models/userModel'));



exports.twitterLogin = (req, res) => {

    if (!req.body.oauth_token || !req.body.oauth_verifier) {

        var requestTokenOauth = {
            consumer_key: conf.twitter.KEY,
            consumer_secret: conf.twitter.SECRET,
            callback: req.body.redirectUri
        };

        request.post({

            url: conf.twitter.REQUESTTOKENURL,
            oauth: requestTokenOauth

        }, (err, response, body) => {

            var oauthToken = qs.parse(body);
            res.send(oauthToken);

        });

    } else {
        var accessTokenOauth = {
            consumer_key: conf.twitter.KEY,
            consumer_secret: conf.twitter.SECRET,
            token: req.body.oauth_token,
            verifier: req.body.oauth_verifier
        };

        request.post({

            url: conf.twitter.ACCESSTOKENURL,
            oauth: accessTokenOauth

        }, (err, response, accessToken) => {

            accessToken = qs.parse(accessToken);

            var profileOauth = {
                consumer_key: conf.twitter.KEY,
                consumer_secret: conf.twitter.SECRET,
                oauth_token: accessToken.oauth_token
            };

            request.get({
                url: conf.twitter.PROFILEURL + accessToken.screen_name,
                oauth: profileOauth,
                json: true
            }, (err, response, profile) => {
                console.log(profile);

            });
        });
    }
};



                // _key: userKey,
                // OAuthID: profile.id,
                // OAuthType: 'twitter',
                // created_at: time,
                // isActive: true,
                // registrationCompleted: false 