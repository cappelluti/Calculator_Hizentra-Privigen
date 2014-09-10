$(document).on('pageinit','#privigen' ,function () {    
    $(".output_privigen").css({opacity:0});
	$("#tab_fasi").css({display:'none'});	
	fasi=4;	
	$("#fasi_meno").bind( "click", function() {if (fasi>2){fasi--;visualizza_fasi()}});
	$("#fasi_piu").bind( "click", function() {if (fasi<4){fasi++;visualizza_fasi()}});	
	$("#gruppo_induzione input[type='radio']").bind( "change", function() {
		if ($(this).val()==1){
			if ($(".no_induzione_input").prop('checked')==true){
				$(".si_induzione_input").prop("checked",true).checkboxradio('refresh');
			}
			$("#tab_fasi").fadeIn("fast");
			$('.no_induzione_input').prop('disabled', true);
			$(".no_induzione_input").prop("checked",false).checkboxradio('refresh');
			$('.no_induzione_label').css({opacity:0.2});
		} else {
			$("#tab_fasi").fadeOut("fast");
			$('.no_induzione_input').prop('disabled', false);
			$('.no_induzione_label').css({opacity:1});
		}
	});	
	$("#privigen").change(function(){
		visualizza_fasi();
		calcola_induzione();
	});	
});

function visualizza_fasi(){
	$(".n_fasi").html(fasi+" velocit&agrave;");
	if (fasi==4){
		$(".spiegazioni_fasi").html("0,3 ml/kg/h – 0,6 ml/kg/h – 1,2 ml/kg/h – 2,4 ml/kg/h<br>Cambio ogni 1/2 ora");
		$("#fasi_piu").css({opacity:0.2});}
	else if (fasi==3){$(".spiegazioni_fasi").html("0,3 ml/kg/h – 1,2 ml/kg/h – 2,4 ml/kg/h<br>Cambio ogni 1/2 ora");
		$("#fasi_piu").css({opacity:1});
		$("#fasi_meno").css({opacity:1});}
	else if (fasi==2){$(".spiegazioni_fasi").html("0,3 ml/kg/h – 2,4 ml/kg/h<br>Cambio ogni 1/2 ora");
		$("#fasi_meno").css({opacity:0.2});}
	calcola_induzione();
}

function calcola_induzione(){    
    if ($(".output_privigen").css('opacity')==0){
        $(".output_privigen").fadeTo("slow",1.5);
    }
	var induzione,peso,posologia,vel_regime;
	induzione=Number($("#gruppo_induzione input[type='radio']:checked").val());
	peso=Number($("#peso").val());
	posologia=Number($("#gruppo_posologia input[type='radio']:checked").val());
	vel_regime=Number($("#gruppo_regime input[type='radio']:checked").val());	
	var quantita_tot_g,quantita_tot_ml;
	quantita_tot_g=peso*posologia;
	quantita_tot_g=Math.round(quantita_tot_g*100)/100;
	quantita_tot_ml=quantita_tot_g*10;
	txt="";	
	var ml_totali,g_totali,quantita_residua_ml,tempo_induzione,tempo_regime,tempo_totale;	
	if (induzione==1){
		if (fasi==4){
			ml_totali=((peso*0.3)/2)+((peso*0.6)/2)+((peso*1.2)/2)+((peso*2.4)/2);
		} else if (fasi==3){
			ml_totali=((peso*0.3)/2)+((peso*1.2)/2)+((peso*2.4)/2);
		} else if (fasi==2){
			ml_totali=((peso*0.3)/2)+((peso*2.4)/2);
		}
		quantita_residua_ml=quantita_tot_ml-ml_totali;
		tempo_induzione=fasi*30;
	} else {
		ml_totali=quantita_tot_ml;
		quantita_residua_ml=quantita_tot_ml;
		tempo_induzione=0;
	}
	
	ml_totali=Math.round(ml_totali*100)/100;
	tempo_regime=quantita_residua_ml/(vel_regime*peso)*60;
	tempo_regime=Math.round(tempo_regime);	
	txt=txt+"Dose totale:<br/>";
	txt=txt+"&#8226; "+quantita_tot_ml+" ml/mese<br/>";
	txt=txt+"&#8226; "+quantita_tot_g+" g/mese<br/><br/>";	
	tempo_totale=tempo_induzione+tempo_regime;	
	if (induzione==1){
		txt=txt+"<span class='light'>Durata induzione: "+String(tempo_induzione).replace(".",",")+ " min<br/>";
		txt=txt+"Durata regime: "+String(tempo_regime).replace(".",",")+ " min</span><br/>";
	}	
	txt=txt+"Durata totale: "+String(tempo_totale).replace(".",",")+ " min <span class='light'>("+converti_tempo(tempo_totale)+")</span>";	
	txt=txt.replace(".",",");
    output_privigen("<p>"+txt+"</p>");  
}

function output_privigen(testo_output_privigen){
    $(".output_privigen").html(testo_output_privigen);
}

function converti_tempo(tempo){
	//tempo_min
	tempo_ore=Math.floor(tempo/60);
	tempo_min_residui=((tempo/60)-tempo_ore)*60;
	tempo_min_residui=Math.round(tempo_min_residui);	
    return tempo_ore+" h – "+tempo_min_residui+" min";
}