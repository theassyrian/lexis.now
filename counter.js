counter = function() {
	var value = $('textarea').val();
	if (value.length === 0) {
		$('span').html(0);
		return;
	}
	
	var regex = /\s+/gi;
	var count = value.trim().match(/\S+/g).length;
	
	$('span').html(count);
};

callCounter = function() {
	setTimeout(counter);
}

jQuery(document).ready(function($) {
	$('textarea').change(callCounter);
	$('textarea').keydown(callCounter);
	$('textarea').keypress(callCounter);
	$('textarea').keyup(callCounter);
	$('textarea').blur(callCounter);
	$('textarea').focus(callCounter);
});