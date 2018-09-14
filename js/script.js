$(document).ready(function() {
	//Esconde a tela de resultado
	window.location.href='#bd';
	$('#result').hide();
});

//Funcao para calcular total do churrasco
function calcular() {
	$('#result').hide();
	$('#div-carne').html("");	
	$('#div-acomp').html("");
	$('#div-bebida').html("");
	$('#div-valor').html("");
	var totalizador = 0.0;

	//Verificando se não há quantidade de pessoas negativo
	if ($("#qtd-homem").val() < 0 || $("#qtd-mulher").val() < 0 ||$("#qtd-crianca").val() < 0) {
		alert('Quantidade de convidados não pode ser menor que Zero!');
		return false;
	}
	//Verifica se tem pelo menos 1 pessoa
	if ($("#qtd-homem").val() + $("#qtd-mulher").val() + $("#qtd-crianca").val() == 0) {
		alert('Quantidade de convidados não pode ser Zero!');
		return false;
	}

	/*====================Calculando a carne=========================*/
	//Verifica se tem alguma carne
	var precos_carne = $("#step-3").find("input[name='carne']:checked").toArray().map(function(check){ return $(check).val();});
	var tipos_carne = $("#step-3").find("input[name='carne']:checked").toArray().map(function(check){ return $(check).attr("id");});	
	if (precos_carne.length == 0) {
		alert('Escolha alguma carne!');
		return false;
	}

	//Calcula quantidade de carne
	var vlr_carne;
	var qtd_carne = $("#qtd-homem").val()*0.8+$("#qtd-mulher").val()*0.4+$("#qtd-crianca").val()*0.2;
	qtd_carne /= precos_carne.length;
	qtd_carne = Math.round(qtd_carne * 1000)/1000;	
	for(var i=0; i<precos_carne.length; i++) {		
		vlr_carne = Math.round(qtd_carne*precos_carne[i] * 100)/100;	
		totalizador += vlr_carne;
		/*Coloca o resultado no HTML*/
		$('#div-carne').html($('#div-carne').html()+"<br/><p><h3><b>"+tipos_carne[i]+": </b>R$"+vlr_carne+" ("+qtd_carne+"KG)</h3></p>");	
	}
	$('#div-carne').html($('#div-carne').html()+"<br/><p>=======================================================================</p>");	
	/*====================FIM - Calculando a carne=========================*/


	/*====================Calculando Acompanhamento=========================*/
	//Verifica se tem algum acompanhamento
	var precos_acomp = $("#step-4").find("input[name='acomp']:checked").toArray().map(function(check){ return $(check).val();});
	if (precos_acomp.length != 0) {
		var tipos_acomp = $("#step-4").find("input[name='acomp']:checked").toArray().map(function(check){ return $(check).attr("id");});	
		
		
		//Calcula quantidade de acompanhamento
		var vlr_acomp;
		var qtd_acomp = $("#qtd-homem").val()*0.6+$("#qtd-mulher").val()*0.4+$("#qtd-crianca").val()*0.2;
		qtd_acomp /= precos_acomp.length;
		qtd_acomp = Math.round(qtd_acomp * 1000)/1000;
		for(var i=0; i<precos_acomp.length; i++) {		
			vlr_acomp = Math.round(qtd_acomp*precos_acomp[i] * 100)/100;
			totalizador += vlr_acomp;	
			/*Coloca o resultado no HTML*/
			$('#div-acomp').html($('#div-acomp').html()+"<br/><p><h3><b>"+tipos_acomp[i]+": </b>R$"+vlr_acomp+" ("+qtd_acomp+"KG)</h3></p>");	
		}		
	}	
	$('#div-acomp').html($('#div-acomp').html()+"<br/><p>=======================================================================</p>");	
	/*====================FIM - Calculando Acompanhamento=========================*/


	/*====================Calculando Bebidas=========================*/
	//Verifica se tem algum acompanhamento
	var precos_bebida = $("#step-5").find("input[name='bebida']:checked").toArray().map(function(check){ return $(check).val();});
	if (precos_bebida.length != 0) {
		var tipos_bebida = $("#step-5").find("input[name='bebida']:checked").toArray().map(function(check){ return $(check).attr("id");});	
		
		
		//Calcula quantidade de bebidas
		var vlr_bebida;
		var qtd_bebida = $("#qtd-homem").val()*1+$("#qtd-mulher").val()*0.8+$("#qtd-crianca").val()*0.6;		
		qtd_bebida /= precos_bebida.length;
		qtd_bebida = Math.round(qtd_bebida * 1000)/1000;
		for(var i=0; i<precos_bebida.length; i++) {		
			vlr_bebida = Math.round(qtd_bebida*precos_bebida[i] * 100)/100;	
			totalizador += vlr_bebida;
			/*Coloca o resultado no HTML*/
			$('#div-bebida').html($('#div-bebida').html()+"<br/><p><h3><b>"+tipos_bebida[i]+": </b>R$"+vlr_bebida+" ("+qtd_bebida+"L)</h3></p>");	
		}		
	}	
	$('#div-bebida').html($('#div-bebida').html()+"<br/><p>=======================================================================</p>");	
	/*====================FIM - Calculando Bebidas=========================*/

	/*====================Mostrando o Totalizador e dividindo pela quantidade de pessoas=========================*/	
	$('#div-valor').html("<h2><b> R$ "+totalizador+"</b></h2>");	
	//Rateia o total pela quantidade de pessoas
	var round;
	var rateio;
	//Verificando se tem Homem nos convidados
	if($("#qtd-homem").val() != 0){		
		round = totalizador * 0.6;
		rateio = round/$("#qtd-homem").val();
		$('#div-result').html($('#div-result').html()+"<br/><p><h4>========================<b> Homens </b>R$"+round+" ("+qtd_bebida+"L)</h3></p>");	
	}
	if (precos_bebida.length != 0) {			
		//Calcula quantidade de bebidas
		var vlr_bebida;
		var qtd_bebida = $("#qtd-homem").val()*1+$("#qtd-mulher").val()*0.8+$("#qtd-crianca").val()*0.6;		
		qtd_bebida /= precos_bebida.length;
		qtd_bebida = Math.round(qtd_bebida * 1000)/1000;
		for(var i=0; i<precos_bebida.length; i++) {		
			vlr_bebida = Math.round(qtd_bebida*precos_bebida[i] * 100)/100;	
			totalizador += vlr_bebida;
			/*Coloca o resultado no HTML*/
			$('#div-bebida').html($('#div-bebida').html()+"<br/><p><h3><b>"+tipos_bebida[i]+": </b>R$"+vlr_bebida+" ("+qtd_bebida+"L)</h3></p>");	
		}		
	}	
	$('#div-bebida').html($('#div-bebida').html()+"<br/><p>=======================================================================</p>");	
	/*====================FIM - Calculando Bebidas=========================*/

	//Exibe a tela de resultado
	$('#result').show();
	window.location.href='#result';
}
