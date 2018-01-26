function caricaProfilo()
{
	var persona;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			persona = JSON.parse(this.responseText);
			
			var tab,tr,td,div,center;
			
			div = document.getElementById("showing");//div per indicare da dove inserire gli elementi
			tab = document.createElement("table"); //creo la tabella per ogni singolo elemento
			tab.setAttribute("class","showProduct"); //tutte le tabelle avranno la stessa classe per modificarle in header.css
			tab.setAttribute("border","1"); //tab.style.borderCollapse = "collapse";
			
			tr = document.createElement("tr"); //creo la prima riga per l header
			var th = document.createElement("th"); //creo l'unico header che visualizzerà il nome del prodotto
			th.setAttribute("colspan",2);//rendo la riga larga come due colonnne
			th.appendChild(document.createTextNode(persona.Username)); //creo un nodo che inserisco nell'header col nome del prodotto
			tr.appendChild(th); //aggiungo l header prima creato alla riga
			tab.appendChild(tr); //aggiungo alla tabella

			tr = document.createElement ("tr");//creo la riga per il codice
			td = document.createElement("td"); //creo l elemento dove effettivamete mettero la label per poi mettere il codice
			td.appendChild(document.createTextNode("Nome"));//inserisco la label
			tr.appendChild(td);
			var nom = document.createElement("input");
			center = document.createElement("center");
			nom.setAttribute("class","nuovi");
			nom.value=persona.Nome;
			nom.size=30;
			center.appendChild(nom);
			tr.appendChild(center);
			tab.appendChild(tr);
		
			tr = document.createElement("tr");
			td = document.createElement("td");
			td.appendChild(document.createTextNode("Cognome"));
			tr.appendChild(td);
			var cognom = document.createElement("input");
			center = document.createElement("center");
			cognom.setAttribute("class","nuovi");
			cognom.size=30;
			cognom.value=persona.Cognome;
			center.appendChild(cognom);
			tr.appendChild(center);
			tab.appendChild(tr);
			
			tr = document.createElement("tr");
			td = document.createElement("td");
			td.appendChild(document.createTextNode("Indirizzo"));
			tr.appendChild(td);
			var indirizzo = document.createElement("input");
			center = document.createElement("center");
			indirizzo.setAttribute("class","nuovi");
			indirizzo.value=persona.IndirizzoStandard;
			indirizzo.size=30;
			center.appendChild(indirizzo);
			tr.appendChild(center);
			tab.appendChild(tr);
			
			tr = document.createElement("tr");
			td = document.createElement("td");
			td.appendChild(document.createTextNode("Iban (inserisci anche al posto degli asterischi e senza spazi)"));
			tr.appendChild(td);
			var iban = document.createElement("input");
			center = document.createElement("center");
			iban.setAttribute("class","nuovi");
			iban.value=persona.Iban;
			iban.size=30;
			center.appendChild(iban);
			tr.appendChild(center);
			tab.appendChild(tr);
			
			tr = document.createElement("tr");
			tr.setAttribute("id","last");
			td = document.createElement("td");
			td.setAttribute("colspan",2);
			var input1 = document.createElement("input");
			center = document.createElement("center");
			input1.setAttribute("type","image");
			input1.src="Imm/Save.png";
			input1.width="400";
			input1.id="pencil";
			input1.title="Salva Modifiche";
			input1.onclick = function ()
			{
				var quer="?Username="+persona.Username;
				if(nom.value!=persona.Nome)
					quer+="&Nome="+nom.value;
				if(cognom.value!=persona.Cognome)
					quer+="&Cognome="+cognom.value;
				if(indirizzo.value!=persona.IndirizzoStandard)
					quer+="&Indirizzo="+indirizzo.value;
				if(iban.value!=persona.Iban)
					quer+="&Iban="+Iban.value;
				var xhtt = new XMLHttpRequest();
				xhtt.open("GET", "ModificaDatiUtente"+quer, true);
				xhtt.send();
				alert("Modifica avvenuta con successo");
			};
			center.appendChild(input1);
			td.appendChild(center);
			tr.appendChild(td);
			tab.appendChild(tr);
			div.appendChild(tab);
		}
	};
	xhttp.open("GET","Utente", true);
		////alert("sto inviando"+ query);
	xhttp.send();
}
	
	
	