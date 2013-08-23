$(document).ready(function(){
	var d = new Date();
	$('#countdown').countdown( {date: d.toString()} );
});