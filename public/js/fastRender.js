$(document).ready(function(){
		$("#learnersSearchBar").keyup(function(){
			var searchValue = $("#learnersSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/Name/search/" + searchValue, function(results){
				$("#learnerList" ).html(results);
				//async: true;
			});
		});

});



$(document).ready(function(){
		$("#coursesSearchBar").keyup(function(){
			var searchValue = $("#coursesSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/course/search/" + searchValue, function(results){
				$("#courseList" ).html(results);
				//async: true;
			});
		});
});

$(document).ready(function(){
		$("#surnamesSearchBar").keyup(function(){
			var searchValue = $("#surnamesSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/surname/search/" + searchValue, function(results){
				$("#surnameList").html(results);
				//async: true;
			});
		});
});

$(document).ready(function(){
		$("#gendersSearchBar").keyup(function(){
			var searchValue = $("#gendersSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/gender/search/" + searchValue, function(results){
				$("#genderList").html(results);
				//async: true;
			});
		});

});

$(document).ready(function(){
		$("#racesSearchBar").keyup(function(){
			var searchValue = $("#racesSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/race/search/" + searchValue, function(results){
				$("#raceList" ).html(results);
				//async: true
			});
		});

});


$(document).ready(function(){
		$("#languagesSearchBar").keyup(function(){
			var searchValue = $("#languagesSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/Language/search/" + searchValue, function(results){
				$("#languageList" ).html(results);
				//async: true
			});
		});

});



$(document).ready(function(){
		$("#addressesSearchBar").keyup(function(){
			var searchValue = $("#addressesSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/address/search/" + searchValue, function(results){
				$("#addressList" ).html(results);
				//async: true
			});
		});

});

$(document).ready(function(){
		$("#facilitatorsSearchBar").keyup(function(){
			var searchValue = $("#facilitatorsSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/facilitator/search/" + searchValue, function(results){
				$("#facilitatorList" ).html(results);
				//async: true
			});
		});

});

$(document).ready(function(){
		$("#graduatesSearchBar").keyup(function(){
			var searchValue = $("#graduatesSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/graduate/search/" + searchValue, function(results){
				$("#graduateList" ).html(results);
				//async: true
			});
		});

});

$(document).ready(function(){
		$("#locatesSearchBar").keyup(function(){
			var searchValue = $("#locatesSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/search/" + searchValue, function(results){
				$("#locationList" ).html(results);
				//async: true
			});
		});

});

$(document).ready(function(){
		$("#locationssSearchBar").keyup(function(){
			var searchValue = $("#locationssSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/location/search/" + searchValue, function(results){
				$("#locationsssList" ).html(results);
				//async: true
			});
		});

});

$(document).ready(function(){
		$("#attendedsSearchBar").keyup(function(){
			var searchValue = $("#attendedsSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/accountNo/search/" + searchValue, function(results){
				$("#attendedList" ).html(results);
				//async: true
			});
		});

});

$(document).ready(function(){
		$("#profilesSearchBar").keyup(function(){
			var searchValue = $("#profilesSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/interest/search/" + searchValue, function(results){
				$("#profileList" ).html(results);
				//async: true
			});
		});

});


$(document).ready(function(){
		$("#work_locationsSearchBar").keyup(function(){
			var searchValue = $("#work_locationsSearchBar").val();
			if(searchValue == ""){
				searchValue = "all";
			}

			$.get("/work_location/search/" + searchValue, function(results){
				$("#work_locationList" ).html(results);
				//async: true
			});
		});

});
