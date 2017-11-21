$(document).ready(function() {

	$("#adventures").hover(function(){
		if ($("#adventuredrop").hasClass("active")) {
			$("#adventuredrop").removeClass("active");
			setTimeout(function(){
				$("#adventuredrop").hide();
			}, 500);
		} else {
			$("#adventuredrop").show();
			setTimeout(function()
				{$("#adventuredrop").addClass("active");
			}, 0);
		}	
	})

	$("#projects").hover(function(){
		if ($("#projectdrop").hasClass("active")) {
			$("#projectdrop").removeClass("active");
			setTimeout(function(){
				$("#projectdrop").hide();
			}, 500);
		} else {
			$("#projectdrop").show();
			setTimeout(function()
				{$("#projectdrop").addClass("active");
			}, 0);
		}	
	})

/*	
	$("#design").hover(function(){
		if ($("#designdrop").hasClass("active")) {
			$("#designdrop").removeClass("active");
			setTimeout(function(){
				$("#designdrop").hide();
			}, 500);
		} else {
			$("#designdrop").show();
			setTimeout(function()
				{$("#designdrop").addClass("active");
			}, 0);
		}	
	})
*/
	setTimeout(function() {$("#aboutbox").fadeIn();}, 8000);

});