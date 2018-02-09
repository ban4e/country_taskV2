$(document).ready(function(){

	$('.inp').on('keyup', function () {
		switch ($(this).attr('id')) {
			case 'less' : 
				$('.l_less').html($('#less').val());
				defValue($('#less'), $('.l_less'), $('.less'));
				break;
			case 'sass' : 
				$('.l_sass').html($('#sass').val());
				defValue($('#sass'), $('.l_sass'), $('.scss'));
				break;
			case 'coffee' : 
				$('.l_coffee').html($('#coffee').val());
				defValue($('#coffee'), $('.l_coffee'), $('.coffee'));
				break;					
		}	
	});

	function defValue(elem, elem1, elem2){
		if (!($(elem).val())) {
			$(elem1).html($(elem).attr('placeholder'));
			$(elem2).css({'color' : '#043493'});
			$(elem).css({'color' : '#c4c4c4'}); }
		else {
			$(elem2).css({'color' : '#c4c4c4'});
			$(elem).css({'color' : '#043493'});
		};
			
	};

	$(window).scroll(function() {

		var scrl = $(this).scrollTop();
		$('.illustration').css({
			'transform' : 'translate(0%, -' + scrl / 20 + '%)'
		});

	});


	function copyFunc(elem) {
		var $temp = $("<input>");
		var $success;
		$("body").append($temp);
		$temp.val($(elem).text()).select();
		$success = document.execCommand("copy");
		$temp.remove();
		return $success;
	};

	$(".btn_copy").click(function(){
		if(copyFunc('.code')) {
			$(".tooltip").fadeIn().delay(1200).fadeOut();
		};
	});

});
