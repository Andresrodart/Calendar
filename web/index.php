<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
		<title>calendario</title>
		<script src="public/javascript/vali.js"></script>
        <link rel="stylesheet" href="public/stylesheets/style.css" type="text/css">
    </head>
    <body>
		<div class="contenedor">
			<div class="fila">
				<div class = "columna izquierda">
					<div class="formulario">
						<div class="fila">
							<div class="columna de-texto">
								<input type="text" id="inicio" name="inicio" value=""  onkeyup="this.setAttribute('value', this.value);" onchange="formatoDia(this)">
								<label for="Direccion">Fecha inicio (MM-YYYY)</label>
							</div>
						</div>
						<div class="fila">
							<div class="columna de-texto">
								<input type="text" id="fin" name="fin" value=""  onkeyup="this.setAttribute('value', this.value);" onchange="formatoDia(this)">
								<label for="Direccion">Fecha fin (MM-YYYY)</label>
							</div>
						</div>
						<div class="fila">
							<div class="columna">
								<select id="columnas" name="columnas">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>
						</div>	
						<div class="fila">
							<div class="columna">
								<button id="enviar" onclick="enviar();">Enviar</button>
							</div>
						</div>	
					</div>
				</div>
				<div class="columna derecha">
					<div class="calendarios" id="calendarios">
					</div>
				</div>
			</div>
		</div>
    </body>
</html>
 