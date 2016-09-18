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

			let result = new Array();
		
			for(let i in geneIdList){
				let geneId = geneIdList[i].geneId;
				let SSRList = await Tilapia2Service.getSSR(geneId);
				let SSRInformation = {
					geneId: geneId,
					SSRList: SSRList
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