module.exports = {
	getGo: async (req, res) => {
		try{
			let name = req.query.name || '';
			let goList = await sequelize.query("SELECT * FROM `term` WHERE name Like '%"+name+"%' ;");
			
			let result = await Tilapia2Service.getGeneId(goList[0]);

			return res.json(result);
		}
		catch(e){
			return res.serverError(e);
		}
	},
	getContig: async (req, res) => {
		try{
			let geneIdList = JSON.parse(req.query.geneIdList) || new Array();
			console.log('geneIdList->', geneIdList);
			let result = await Tilapia2Service.getContig(geneIdList);
		
			return res.json(result);
		}
		catch(e){
			return res.serverError(e);
		}
	},
	getSSR: async (req, res) => {
		try{
			let geneIdList = JSON.parse(req.query.geneIdList) || new Array();

			
			let SSRObj = {};
			// let query = new Array();
			let SSRList = await Tilapia2Service.getSSR(geneIdList);
			console.log('SSRList->', SSRList);
			for(var i in SSRList){
				for(var k in SSRList[i].tilapia2infs){
					var geneId = SSRList[i].tilapia2infs[k].geneId;
					var SSRId = SSRList[i].id;
					if(!SSRObj[geneId]){
						SSRObj[geneId] = {};
						SSRObj[geneId][SSRId] = SSRList[i];
					}
					else{
						if(!SSRObj[geneId][SSRId]){
							SSRObj[geneId][SSRId] = SSRList[i];
						}
					}
					console.log(i+"	"+k+"	"+SSRList[i].tilapia2infs[k]);
				}
			}
			

			let result = new Array();
			for(var i in SSRObj){
				
				var arr = Object.keys(SSRObj[i]).map(function (key) { 
					return SSRObj[i][key]; 
				});

				for(var k in arr){
					arr[k].dataValues.region = "";
					for(var j in arr[k].dataValues.tilapia2infs){
						arr[k].dataValues.region += arr[k].dataValues.tilapia2infs[j].region + "(parent: " + arr[k].dataValues.tilapia2infs[j].parent + ")	";
					}

					arr[k].dataValues.variationLength = arr[k].dataValues.tilapia2VARs.length;
					arr[k].dataValues.variation = JSON.stringify(arr[k].dataValues.tilapia2VARs);
				}

				console.log('arr->',arr);
				let SSRInformation = {
					geneId: i,
					SSRList: arr
				}
				result.push(SSRInformation);
			}

			return res.json(result);
		}
		catch(e){
			return res.serverError(e);
		}
	}
}