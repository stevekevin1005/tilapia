/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = async cb => {
	try{

		// var tilapia_2_go_annotation_json = require('../json/tilapia_2_go_annotation.json');
		// tilapia_2_go_annotation_json.forEach(async (tilapia_2_go_annotation,index) => {
		// 	tilapia_2_go_annotation.create(tilapia_2_go_annotation);
		// });
		
		cb();
	}
	catch(e){
		cb(e);
	}
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  
};
