$(document).ready( function(){

	$('.box').hover(function(){
		$(this).css('background-color', 'red');
	});

	$('#myForm').submit(function(e) {
		e.preventDefault();
		var val = $('input:first').val();

		if (val>50) {
			alert('Number too big! Try less than 50.')
			return;
		}

    // Get all the forms elements and their values in one step
    	var newWidth = val*25;
    	$('.playArea').css('width',newWidth+'px');
    	$('.playArea').css('height',newWidth+'px');
		var num = val;
		$('.box').remove();
		for(var i=0; i<num*num; i++){
			$('.playArea').append('<div class=box></div>');
		}
		$('.box').hover(function(){
			$(this).css('background-color', 'red');
		});
	});
});
