/**
 * Elimina gli elementi che sono stati inseriti in una schermata
 * @param v Variabile globale definita in benvenuto.jsp che gestisce gli elementi precedentemente inseriti
 * il numero di elementi 
 * 
 */
function clearTable(v)
{
//	alert("Sto per cancellarne..."+v);
	if (v>0)
	{
		var div1 = document.getElementById("showing");
		for(var j=0; j<v; j++)
		{
			var temp = valid.pop();
			var testo1 = "NumeroElemento"+(temp);
			var ele=document.getElementById(testo1);
//			alert(ele.id);
//			alert(div1.id);
			div1.removeChild(ele);
		}
	}
}