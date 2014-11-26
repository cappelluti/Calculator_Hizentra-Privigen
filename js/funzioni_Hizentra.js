$(document).on('pageinit','#hizentra' ,function () { 
	if ($(window).width()<500){
		$(".output_hizentra").css({"font-size":"80%","padding":"0.7em 0 0 0"});
	}
    $(".output_hizentra").css({opacity:0});
	$("#hizentra").change(function(){calcola();});
});
function calcola(){    
    if ($(".output_hizentra").css('opacity')==0){
        $(".output_hizentra").fadeTo("slow",1.5);
    }	
	var peso,posologia;
	peso=Number($("#peso_hizentra").val());
	//posologia=Number($("#posologia").val());
	posologia=Number($("#gruppo_posologia_hizentra input[type='radio']:checked").val());	
	var g_sett,ml_sett,n_infusioni,n_siti,velocita,min_infusione,min_sett,n_fiale,n_fiale_mese;	
	g_sett=Math.round((peso*posologia)/4);
	ml_sett=g_sett/0.2;
	n_infusioni=Math.ceil(ml_sett/50);
	if (ml_sett>25){
		n_siti=2;
	} else{
		n_siti=1;
	}
	velocita=25*n_siti;
	min_infusione=(ml_sett*1.2)/n_infusioni;
	min_sett=min_infusione*n_infusioni;
	if (posologia==0.4){
		if (peso<=14){n_fiale="1 da 1g";}
		else if (peso<=24){n_fiale="1 da 2g";}
		else if (peso<=34){n_fiale="1 da 1g +</br>1 da 2g";}
		else if (peso<=44){n_fiale="1 da 4g";}
		else if (peso<=54){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=64){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=74){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=84){n_fiale="2 da 4g";}
		else if (peso<=94){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=104){n_fiale="1 da 10g";}
		else if (peso<=114){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=120){n_fiale="1 da 4g +</br>1 da 2g";}	
	} else if (posologia==0.6){
		if (peso<=9){n_fiale="1 da 1g";}
		else if (peso<=16){n_fiale="1 da 2g";}
		else if (peso<=23){n_fiale="1 da 1g +</br>1 da 2g";}
		else if (peso<=29){n_fiale="1 da 4g";}
		else if (peso<=36){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=43){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=49){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=56){n_fiale="2 da 4g";}
		else if (peso<=63){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=69){n_fiale="1 da 10g";}
		else if (peso<=76){n_fiale="1 da 10g +</br>1 da 1g";}
		else if (peso<=83){n_fiale="1 da 10g +</br>1 da 2g";}
		else if (peso<=89){n_fiale="1 da 10g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=96){n_fiale="1 da 10g +</br>1 da 4g";}
		else if (peso<=103){n_fiale="1 da 10g +</br>1 da 4g +</br>1 da 1g";}
		else if (peso<=109){n_fiale="1 da 10g +</br>1 da 4g +</br>1 da 2g";}
		else if (peso<=116){n_fiale="1 da 10g +</br>1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=120){n_fiale="1 da 10g +</br>2 da 4g";}
	} else if (posologia==0.8){
		if (peso<=7){n_fiale="1 da 1g";}
		else if (peso<=12){n_fiale="1 da 2g";}
		else if (peso<=17){n_fiale="1 da 1g +</br>1 da 2g";}
		else if (peso<=22){n_fiale="1 da 4g";}
		else if (peso<=27){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=32){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=37){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=42){n_fiale="2 da 4g";}
		else if (peso<=47){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=52){n_fiale="1 da 10g";}
		else if (peso<=57){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=67){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=77){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=87){n_fiale="2 da 4g";}
		else if (peso<=97){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=102){n_fiale="1 da 10g";}
		else if (peso<=117){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=120){n_fiale="2 da 4g";}
	} else if (posologia==1.0){
		if (peso<=9){n_fiale="1 da 2g";}
		else if (peso<=13){n_fiale="1 da 1g +</br>1 da 2g";}
		else if (peso<=17){n_fiale="1 da 4g";}
		else if (peso<=21){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=25){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=29){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=33){n_fiale="2 da 4g";}
		else if (peso<=37){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=41){n_fiale="1 da 10g";}
		else if (peso<=45){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=53){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=61){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}	
		else if (peso<=69){n_fiale="2 da 4g";}
		else if (peso<=77){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=81){n_fiale="1 da 10g";}
		else if (peso<=93){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=105){n_fiale="2 da 4g";}
		else if (peso<=117){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=120){n_fiale="1 da 10g";}
	} else if (posologia==1.5){
		if (peso<=6){n_fiale="1 da 2g";}
		else if (peso<=9){n_fiale="1 da 1g +</br>1 da 2g";}
		else if (peso<=11){n_fiale="1 da 4g";}
		else if (peso<=14){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=17){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=19){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=22){n_fiale="2 da 4g";}
		else if (peso<=24){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=27){n_fiale="1 da 10g";}
		else if (peso<=30){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=35){n_fiale="1 da 4g +</br>1 da 2g";}	
		else if (peso<=41){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=46){n_fiale="2 da 4g";}
		else if (peso<=51){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=54){n_fiale="1 da 10g";}
		else if (peso<=62){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=70){n_fiale="2 da 4g";}	
		else if (peso<=78){n_fiale="2 da 4g +</br>1 da 1g";}	
		else if (peso<=81){n_fiale="1 da 10g";}	
		else if (peso<=83){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}	
		else if (peso<=94){n_fiale="2 da 4g";}	
		else if (peso<=104){n_fiale="2 da 4g +</br>1 da 1g";}	
		else if (peso<=107){n_fiale="1 da 10g";}	
		else if (peso<=118){n_fiale="2 da 4g";}	
		else if (peso<=120){n_fiale="2 da 4g +</br>1 da 1g";}	
	}else if (posologia==2.0){
		if (peso<=6){n_fiale="1 da 1g +</br>1 da 2g";}
		else if (peso<=8){n_fiale="1 da 4g";}
		else if (peso<=10){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=12){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=14){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=16){n_fiale="2 da 4g";}
		else if (peso<=18){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=20){n_fiale="1 da 10g";}
		else if (peso<=22){n_fiale="1 da 4g +</br>1 da 1g";}
		else if (peso<=26){n_fiale="1 da 4g +</br>1 da 2g";}
		else if (peso<=30){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}	
		else if (peso<=34){n_fiale="2 da 4g";}
		else if (peso<=38){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=40){n_fiale="1 da 10g";}
		else if (peso<=46){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=52){n_fiale="2 da 4g";}
		else if (peso<=58){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=60){n_fiale="1 da 10g";}
		else if (peso<=62){n_fiale="1 da 4g +</br>1 da 2g +</br>1 da 1g";}
		else if (peso<=70){n_fiale="2 da 4g";}
		else if (peso<=78){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=80){n_fiale="1 da 10g";}
		else if (peso<=88){n_fiale="2 da 4g";}	
		else if (peso<=98){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=100){n_fiale="1 da 10g";}
		else if (peso<=106){n_fiale="2 da 4g";}
		else if (peso<=118){n_fiale="2 da 4g +</br>1 da 1g";}
		else if (peso<=120){n_fiale="1 da 10g";}
	}
	n_fiale_mese="";
	var n_fiale_splittato = n_fiale.split("</br>");
	b="";
	for (i=0;i<n_fiale_splittato.length;i++){
			n=Number(n_fiale_splittato[i].slice(0,1));
			n=n*n_infusioni*4;			
			n_fiale_splittato[i]=n+n_fiale_splittato[i].slice(1,n_fiale_splittato[i].length);			
			n_fiale_mese=n_fiale_mese+n_fiale_splittato[i]+"</br>";
	}
	
	//Octanorm
	var octa_g_sett,octa_ml_sett,octa_n_infusioni,octa_n_siti,octa_velocita,octa_min_infusione,octa_min_sett,octa_n_fiale;
	octa_g_sett=1.65*Math.round(((peso*posologia)/4)/1.65);	
	octa_ml_sett=Math.round(octa_g_sett/0.165);
	octa_n_infusioni=Math.ceil(octa_ml_sett/40);
	if (octa_ml_sett>20){
		octa_n_siti=2;
	} else{
		octa_n_siti=1;
	}
	octa_velocita=20*octa_n_siti;
	octa_min_infusione=(octa_ml_sett*1.5)/octa_n_infusioni;
	octa_min_sett=octa_min_infusione*octa_n_infusioni;
	
	//Subcuvia
	var subc_g_sett,subc_ml_sett,subc_n_infusioni,subc_n_siti,subc_velocita,subc_min_infusione,subc_min_sett,subc_n_fiale;
	subc_g_sett=1.6*Math.round(((peso*posologia)/4)/1.6);	
	subc_ml_sett=Math.round(subc_g_sett/0.16);
	subc_n_infusioni=Math.ceil(subc_ml_sett/40);
	if (subc_ml_sett>15){
		subc_n_siti=2;
		subc_velocita=20;
	} else{
		subc_n_siti=1;
		subc_velocita=15;
	}	
	subc_min_infusione=(subc_ml_sett*1.5)/subc_n_infusioni;
	subc_min_sett=subc_min_infusione*subc_n_infusioni;	
	
	stile_titolo="";
	if ($(window).width()<500){
		stile_titolo=" style=margin-left:1em";
		}
	
	txt="<p"+stile_titolo+">Dosaggio e durata infusioni</p>";
	txt=txt+"<table>";
		txt=txt+"<tr>";
			txt=txt+"<th> </th>";
			txt=txt+"<th class='hizentra'>Hizentra (20%)</th>";
			txt=txt+"<th>Octanorm (16,5%)</th>";
			txt=txt+"<th>Subcuvia (16,5%)</th>";
		txt=txt+"<tr>";
		txt=txt+"<tr>";
			txt=txt+"<td>g/sett</td>";
			txt=txt+"<td class='hizentra'>"+g_sett+"</td>";
			txt=txt+"<td>"+Math.round(octa_g_sett)+"</td>";
			txt=txt+"<td>"+Math.round(subc_g_sett)+"</td>";
		txt=txt+"<tr>";
		txt=txt+"<tr>";
			txt=txt+"<td>ml/sett</td>";
			txt=txt+"<td class='hizentra'>"+ml_sett+"</td>";
			txt=txt+"<td>"+octa_ml_sett+"</td>";
			txt=txt+"<td>"+subc_ml_sett+"</td>";
		txt=txt+"<tr>";
		txt=txt+"<tr>";
			txt=txt+"<td>N.&nbsp;infusioni/sett</td>";
			txt=txt+"<td class='hizentra'>"+n_infusioni+"</td>";
			txt=txt+"<td>"+octa_n_infusioni+"</td>";
			txt=txt+"<td>"+subc_n_infusioni+"</td>";
		txt=txt+"<tr>";
		txt=txt+"<tr>";
			txt=txt+"<td>N.&nbsp;siti/infusione</td>";
			txt=txt+"<td class='hizentra'>"+n_siti+"</td>";
			txt=txt+"<td>"+octa_n_siti+"</td>";
			txt=txt+"<td>"+subc_n_siti+"</td>";
		txt=txt+"<tr>";	
		txt=txt+"<tr>";
			txt=txt+"<td>Velocit&agrave;</td>";
			txt=txt+"<td class='hizentra'>"+velocita+"</td>";
			txt=txt+"<td>"+octa_velocita+"</td>";
			txt=txt+"<td>"+subc_velocita+"</td>";
		txt=txt+"<tr>";	
		txt=txt+"<tr>";
			txt=txt+"<td>Min/infusione</td>";
			txt=txt+"<td class='hizentra'>"+Math.round(min_infusione)+"</td>";
			txt=txt+"<td>"+Math.round(octa_min_infusione)+"</td>";
			txt=txt+"<td>"+Math.round(subc_min_infusione)+"</td>";
		txt=txt+"<tr>";	
		txt=txt+"<tr>";
			txt=txt+"<td>Min/sett</td>";
			txt=txt+"<td class='hizentra'>"+min_sett+"</td>";
			txt=txt+"<td>"+octa_min_sett+"</td>";
			txt=txt+"<td>"+subc_min_sett+"</td>";
		txt=txt+"<tr>";	
		txt=txt+"<tr>";
			txt=txt+"<td>N.&nbsp;fiale/infusione</td>";
			txt=txt+"<td class='hizentra'>"+n_fiale+"</td>";
			txt=txt+"<td></td>";
			txt=txt+"<td></td>";
		txt=txt+"<tr>";	
		txt=txt+"<tr>";
			txt=txt+"<td>N.&nbsp;fiale/mese</td>";
			txt=txt+"<td class='hizentra'>"+n_fiale_mese+"</td>";
			txt=txt+"<td></td>";
			txt=txt+"<td></td>";
		txt=txt+"<tr>";	
	txt=txt+"</table>";	
	
	//txt=peso+" | "+posologia
    output_hizentra("<p>"+txt+"</p>");  
}

function output_hizentra(testo_output_hizentra){
    $(".output_hizentra").html(testo_output_hizentra);
}