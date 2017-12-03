'use strict';

module.exports = {
	db: {
		URL: "mongodb://localhost/TwitterLogin",
		OPTIONS: {
			USER: '',
			PASS: ''
		}
	},
  
	twitter: {
		  KEY: 'bmJ9API8FYQb2dnAFMMa0WgOt',
  		  SECRET: '7k9S3iTmvUqsg00AjK5AMt9SWu7p32R5MdHLVms71MOKXrG4Cq',
  		  REQUESTTOKENURL: 'https://api.twitter.com/oauth/request_token',
  		  ACCESSTOKENURL: 'https://api.twitter.com/oauth/access_token',
  		  PROFILEURL: 'https://api.twitter.com/1.1/users/show.json?screen_name='
	} 	
};