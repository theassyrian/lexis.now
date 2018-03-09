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

jQuery(document).ready(function($) {
	$('textarea').on('input paste propertychange', counter);
});