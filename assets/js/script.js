$(document).ready(function() {

	setTimeout(function() {$("#aboutbox").fadeIn();}, 5000);

	$("navbaritem").hover(function(){
		$("dropdown").hasClass("inactive")
	})
});