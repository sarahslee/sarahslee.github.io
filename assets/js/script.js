$(document).ready(function(){

	$("#adventures").hover(function(){
	// jquery function number 1
		if ($("#adventuredrop").hasClass("active")) {
			// jquery function number 2
			$("#adventuredrop").removeClass("active");
			// jquery function number 3
			setTimeout(function(){
				$("#adventuredrop").hide();
				// jquery function number 4
			}, 500);
		} else {
			$("#adventuredrop").show();
			// jquery function number 5
			setTimeout(function()
				{$("#adventuredrop").addClass("active");
				// jquery function number 6
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