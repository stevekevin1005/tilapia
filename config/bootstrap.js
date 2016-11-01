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

		let tilapia_ssr = await tilapia_2_SSR.findAll();
		for(var i in tilapia_ssr){
			var contig = tilapia_ssr[i].contig;
			var start = tilapia_ssr[i].start - 200;
			var end = tilapia_ssr[i].end + 200;
			let tilapia_2_variation = await tilapia_2_VAR.findAll({
				where:{
					contig: contig,
					position: {
						$gte: start,
						$lte: end
					}
				}
			});

			await tilapia_ssr[i].setTilapia_2_VARs(tilapia_2_variation);
		}
		
		cb();
	}
	catch(e){
		cb(e);
	}
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  
};
