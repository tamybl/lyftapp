$(document).ready(function () {
	var pagesID = 0;
	var phoneNumber = '';
	var code = '';
	// Paginas en Hide()
	$('.pages').hide();
	$('#page_0').show();
	// Splash Page 0
	splash(3000);
	function splash(time) {
		setTimeout(function () {
  	$('#page_0').fadeOut(); }, time);
  	$('#page_1').delay(3500).fadeIn();
  	pagesID++;
	}
	// Page 1 - 2
	$('#btn-sign').click(function () {
		$('#page_1').hide();
		pagesID++;
		$('#page_2').show();
		$('#btn-next-signup').prop( "disabled", true );		
	});

	// Page 2 - 3
	$('#btn-next-signup').click(function () {
		phoneNumber = $('#phone').val();
		// Numeros random del 100 al 900
		code = random();
		alert('Tu código es: LAB-' + code);
		$('#page_'+pagesID).hide();
		pagesID++;
		$('#page_'+pagesID).show();
		$('#telephone-note').html('<p class="text-center padding-t">Enter de code send to +'+phoneNumber+'</p><button type="button" class="btn btn-default btn-md center-block" id="resend-code">Resend code</button>');

		$('#resend-code').click(function () {
			code = random();
			alert('Tu nuevo código es: LAB-' + code);
		});
	});

	$('#countries-code').change(function () {
		var code = $(this).val();
		$('#phone').val(code);
	});

	$('#phone').keyup( function () {
		if($(this).val().length == 10) {
			$('#btn-next-signup').prop( "disabled", false);
			$('#btn-next-signup').addClass('btn-enabled');
		}
		else {
			$('#btn-next-signup').prop( "disabled", true);
			$('#btn-next-signup').removeClass('btn-enabled');
		}
	})

	$('#code-number').keyup( function () {
		if($(this).val().length == 3) {
			$('#btn-next-verify').prop( "disabled", false);
			$('#btn-next-verify').addClass('btn-enabled');
		}
		else {
			$('#btn-next-verify').prop( "disabled", true);
			$('#btn-next-verify').removeClass('btn-enabled');
		}
	});

	// Page 3 - 4
	$('#btn-next-verify').click(function () {
		if($('#code-number').val() == code) {
			$('#page_'+pagesID).hide();
			pagesID++;
			$('#page_'+pagesID).show();
		}
		else {
			alert('El código ingresado no es válido');
		}
	});

	

	// Boton volver atras generico
	$('.btn-back').click(function () {
		$('#page_'+pagesID).hide();
		pagesID--;
		$('#page_'+pagesID).show();
	})

	function random() {
		return Math.floor((Math.random() * 900) + 100);
	}
});

// Random numbers between 100 - 1000
// Math.floor((Math.random() * 900) + 100);