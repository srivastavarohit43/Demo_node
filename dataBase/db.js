const mongoose		= require('mongoose');

module.exports = function(conf){
	
	/*create connection with mongodb*/
	mongoose.connect(conf.db.URL);

	/*if mongodb connected successfully*/
	mongoose.connection.on('connected', function(){
		console.log("Application connected with TwitterLogin");
	});

	/*if having some problem to create connection with mongodb*/
	mongoose.connection.on('error', function(){
		console.log("unable to connect to DB");
	});
};

