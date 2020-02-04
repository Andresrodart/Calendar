let meses = ["Enero", "Febrero", "Marzo","Abril","Mayo", "Junio","Julio","Agosto","Septiembre", "Octubre","Noviembre","Diciembre"];

function formatoDia(date){
	if (date.value.search(/(1[0-2]|0[1-9])-[0-9]{4}/) == -1){
		alert('Formato de fecha no valido, \nfavor de ingrear una fecha valida');
		date.value = "";
	}	
}

function enviar() {
	if (document.getElementById("inicio").value.length == 0 || document.getElementById("fin").value.length == 0 ) {
        alert("Hay campos sin llenar");
    }else{
        let anoInicio = parseInt(document.getElementById("inicio").value.split("-")[1]);
        let mesInicio = parseInt(document.getElementById("inicio").value.split("-")[0]);
        let anoFin = parseInt(document.getElementById("fin").value.split("-")[1]);
        let mesFin = parseInt(document.getElementById("fin").value.split("-")[0]);

        if(anoInicio > anoFin){
            alert("año de inicio mayor a año final");
        }else if(anoInicio == anoFin && mesInicio > mesFin){
            alert("mes de inicio mayor a mes final en un mismo año");
        }else{
            var xmlhttp = new XMLHttpRequest();
            creacionDeCalendario(mesInicio - 1, mesFin - 1, anoInicio, anoFin);
            xmlhttp.onreadystatechange = function() {};
            xmlhttp.open("POST", "acces_log.php?q=" + document.getElementById("inicio").value + "+---+" + document.getElementById("fin").value, true);
            xmlhttp.send();
        }
    }
}

function creacionDeCalendario(mesInicio, mesFin, anoInicio, anoFin){
	document.getElementById("calendarios").innerHTML = "";
	let columnas =  parseInt(document.getElementById("columnas").value);
	let col = document.createElement("div");
	let j = 0, mesXcol =  Math.round((((anoFin - anoInicio) * 12 ) - mesInicio + mesFin + 1) / columnas), aux = 1;
	col.classList.add("columnas");
	while (anoInicio <= anoFin) {
		while (mesInicio < 13) {
			if((anoInicio == anoFin && mesInicio > mesFin)){
				anoInicio ++;
				mesFin = 1;
				break;
			}
			let nDias = new Date(anoInicio, mesInicio + 1, 0).getDate();
			let fechaInicio = new Date(anoInicio, mesInicio, 1).getDay();

			let fechas = "";
			let node = document.createElement("div");
			let divDias = document.createElement("ul");
			let encabezado = meses[mesInicio] + " " + anoInicio;
			let divEncabezado = document.createElement("div");
			console.log(nDias)
			for (let i = 0; i < nDias + fechaInicio; i++) {
				if (i < fechaInicio)
					fechas += "<li></li>";
				else
					fechas += "<li>" + (i - fechaInicio + 1)  + "</li>";
			}
			divEncabezado.innerHTML = encabezado;
			divEncabezado.classList.add("encabezado");
			node.appendChild(divEncabezado);
			node.innerHTML += `
				<ul class="diasNombre">
					<li>Dom</li>
					<li>Lun</li>
					<li>Mar</li>
					<li>Mie</li>
					<li>Jue</li>
					<li>Vie</li>
					<li>Sab</li>
				</ul>
			`;
			divDias.innerHTML = fechas;
			node.classList.add("mes");
			divDias.classList.add("dias");
			node.appendChild(divDias);
			col.appendChild(node);
			
			document.getElementById("calendarios").appendChild(col);	
			mesInicio++;
			j++;
			if (j >= mesXcol && aux < columnas) {
				col = document.createElement("div");
				col.classList.add("columnas");
				j = 0;
				aux++;
			}
		}
		mesInicio = 1;
		anoInicio++;
	}
}