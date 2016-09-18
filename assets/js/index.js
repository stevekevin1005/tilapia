$(function(){
	//tilapia 2 go detection "step 1"

	$("#tilapia_2_go_search").on('click', function(){	
		$("#tilapia_2_step1_table").html("");
		var key = $("#GODetection input").val();
		if(key != ''){
			$(".tilapia_2_load").addClass("loader");
			$.ajax({
				url: "/tilapia/2/go?name="+key,
				type: 'get',
				success: function(goList){
					$(".tilapia_2_load").removeClass("loader");
					var goListTemplate = $.templates( "#goList" );
					var goListHtml = goListTemplate.render(goList);
					$("#tilapia_2_step1_table").append(goListHtml);
					/////step2////
					$(".tilapia_2_step1_row").on('click', function(){
						var index = $(this).data('index');
						var geneIdList = JSON.stringify(goList[index].geneId);
						
						$("#GeneCluster >div:last").html("");
						$(".tilapia_2_load").addClass("loader");
						$('#Tilapia2 a[href="#GeneCluster"]').tab('show');

						$.ajax({
							url: "/tilapia/2/contig?geneIdList="+geneIdList,
							type: 'get',
							success: function(geneClusterList){
								console.log('res->', geneClusterList);
								$(".tilapia_2_load").removeClass("loader");
								var geneClusterTemplate = $.templates( "#geneClusterList" );
								var geneClusterHtml = geneClusterTemplate.render(geneClusterList);
								$("#GeneCluster >div:last").append(geneClusterHtml);
								/////step3////

								$(".tilapia_2_step2_button").on('click', function(){
									var index = $(this).data('index');
									var geneIdList = JSON.stringify(geneClusterList[index].geneIdList);
									var contig = geneClusterList[index].id;
									$("#SSRDetection >div:last").html("");
									$(".tilapia_2_load").addClass("loader");
									$('#Tilapia2 a[href="#SSRDetection"]').tab('show');

									$.ajax({
										url: "/tilapia/2/ssr?geneIdList="+geneIdList,
										type: 'get',
										success: function(SSRClusterList){
											console.log('SSRClusterList->', SSRClusterList);
											$(".tilapia_2_load").removeClass("loader");
											var SSRClusterTemplate = $.templates( "#SSRClusterList" );
											var SSRClusterHtml = SSRClusterTemplate.render(SSRClusterList);
											$("#SSRDetection >div:last").append(SSRClusterHtml);


										},
										error: function(e){
											$(".tilapia_2_load").removeClass("loader");
											console.log(e);
											sweetAlert(
											  'Oops...',
											  e,
											  'error'
											);
										}
									});
								});
							},
							error: function(e){
								$(".tilapia_2_load").removeClass("loader");
								sweetAlert(
								  'Oops...',
								  e,
								  'error'
								);
							}
						});
					});
				},
				error: function(e){
					$(".tilapia_2_load").removeClass("loader");
					sweetAlert(
					  'Oops...',
					  e,
					  'error'
					)
				}
			});
		}
		else{
			sweetAlert(
			  'Oops...',
			  'Please input key word!',
			  'error'
			)
		}
	});
});