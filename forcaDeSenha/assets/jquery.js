$(function () {
	$('#senha').bind('keyup', function(){
		var txt = $(this).val();
		var forca = 0;

		//Calcular força de senha
		//Tem que ter, minimo de caracteres 6, letras, numeros, caracteres especiais
		//Minimo de caracteres 6
		if (txt.length >= 6) {
			forca += 25;
		}
		//Letras
		var reg = new RegExp(/[a-z]/i);
		if (reg.test(txt)) {
			forca += 25;
		}
		//Números
		var reg = new RegExp(/[0-9]/i);
		if (reg.test(txt)) {
			forca += 25;
		}
		//Caracteres especiais
		var reg = new RegExp(/[^a-z0-9]/i);
		if (reg.test(txt)) {
			forca += 25;
		}
		//Só aceita senhas com mais de 75% de força
		if (forca >= 75) {
			var aceita = 'Senha aceita';
		} else {
			var aceita = 'Senha muito fraca';
		}

		//Ressultado força de senha
		$('#forca').html('Força: '+forca+' ( '+txt+' ) - '+aceita);		

	});
});