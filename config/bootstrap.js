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

		// let go_annotation = await tilapia2annotation.findAll();
		// for(var i in go_annotation){
		// 	var geneId = go_annotation[i].geneid;
		// 	var goid = go_annotation[i].goid;

		// 	var go_terms = await tilapia2term.findAll({
		// 		where:{
		// 			id: goid
		// 		}
		// 	});

		// 	var informations = await tilapia2inf.findAll({
		// 		where:{
		// 			geneId: geneId
		// 		}
		// 	});
		
		// 	console.log('informations->', informations);
		// 	console.log('go_terms->', go_terms);
		// 	// await go_annotation[i].setTilapia2terms(go_terms);
		// 	await go_annotation[i].setTilapia2infs(informations);
		// 	if(i % 1000 == 0){
		// 		console.log('now-->', i);
		// 	}
		// }
		// let go_terms = await tilapia2term.findAll();
		// for(var i in go_terms){
		// 	var goid = go_terms[i].id;
		// 	var tilapia2annotation = await tilapia2annotation.findOne({
		// 		where:{
		// 			goid: goid
		// 		}
		// 	});
		// 	console.log('-->',go_terms[i].setTilapia2annotations);
		// 	await go_terms[i].setTilapia2annotations(tilapia2annotation);
		// }
		let tilapia_ssr = await tilapia2SSR.findOne();
		console.log(tilapia_ssr);
		// for(var i in tilapia_ssr){
		// 	var contig = tilapia_ssr[i].contig;
		// 	var start = tilapia_ssr[i].start - 200;
		// 	var end = tilapia_ssr[i].end + 200;
		// 	let tilapia2infs = await tilapia2inf.findAll({
		// 		where:{
		// 			contig: contig,
		// 			start: {
		// 				$lte: end
		// 			},
		// 			end: {
		// 				$gte: start
		// 			}
		// 		}
		// 	});
		// 	await tilapia_ssr[i].setTilapia2infs(tilapia2infs);
		// 	if(i % 1000 == 0){
		// 		console.log('now-->', i);
		// 	}
		// }
		
		cb();
	}
	catch(e){
		cb(e);
	}
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  
};
