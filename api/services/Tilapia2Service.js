module.exports = {
	getGeneId: async (goList) => {
		try{

			let result = new Array();

			for(var i in goList){

				let goid = goList[i].acc.substr('3');
				goid = parseInt(goid);
				if(!isNaN(goid)){
					let geneId = await sequelize.query("SELECT * FROM `go_annotation` WHERE goid = "+ goid +";");
	
					let goInformation = goList[i];
					
					goInformation.geneId = geneId[0];
					result.push(goInformation);
				}
			}

			return result;

		}catch(e){
			console.error('e->', e);
			return e;
		}
	},
	getSSR: async (geneId) => {
		try{
			let result = new Array();
			let position = await sequelize.query("SELECT * FROM `tilapia_2_information` WHERE geneId = "+ geneId +";");

			//every position should check
			for(var i in position[0]){
				//check if the ssr has been checked
				let start = position[0][i].start;
				let end = position[0][i].end;
				let contig = position[0][i].contig;
				let region = position[0][i].region + "(parent:" + position[0][i].parent + ")";

				//find ssr information
				let SSRList = await sequelize.query("SELECT * FROM `tilapia_2_ssr` WHERE contig = '"+ contig +"' AND start <= "+ end +" AND end >= "+ start +";");

				for(var j in SSRList[0]){
					let index = await module.exports.getIndex(result, SSRList[0][j].id);
	
					if(index && index != undefined){
						result[index].region = result[index].region+" "+region;
					}
					else{
						SSRList[0][j].region = region;
						
						
						let variationList = await sequelize.query("SELECT * FROM `tilapia_2_variation` WHERE contig = '"+ contig +"' AND position <= "+ SSRList[0][j].end +" AND position >= "+ SSRList[0][j].start +";");
						SSRList[0][j].variation = variationList[0];
						result.push(SSRList[0][j]);
						// console.log('->', result);
					}
				}
			}

			return result;
		}catch(e){
			console.error('e->', e);
			return e;
		}
	},
	getContig: async (geneIdList) => {
		try{
			let result = new Array();
			for(var i in geneIdList){
				let geneId = geneIdList[i].geneid;
				let contigInformation = await sequelize.query("SELECT contig FROM `tilapia_2_information` WHERE geneId = "+ geneId +" limit 1;");
				
				if(contigInformation[0].length != 0){
					let contig = contigInformation[0][0].contig;
					let index = await module.exports.getIndex(result, contig);
					
					if(index && index != undefined){
						result[index].geneIdList.push({
							geneId: geneId
						});
					}
					else{
						let contigJson = {
							id: contig,
							geneIdList: new Array()
						}
						contigJson.geneIdList.push({
							geneId: geneId
						});
						result.push(contigJson);
					}
				}
			}

			return result;
		}catch(e){
			console.error('e->', e);
			return e;
		}
	},
	getIndex: (array, id) => {
		try{
			var index;
			for(var i in array){
				if(array[i].id == id){
					index = i;
				}
			}
			return index;
		}catch(e){
			console.error('e->', e);
			return e;
		}
	}
}
