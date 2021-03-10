
function mostrar()
{	
	var nombre;
	var edad;
	var genero;
	var puesto;
	var sueldo;
	var continuar = true;

	var PromedioSueldoProgramador;
	var PromedioSueldoQa;
	var PromedioSueldoAnalista;

	var contProgramador=0;
	var contAnalista=0;
	var contQa = 0;
	var contNoBinario=0;
	
	var acumQa;
	var acumProgramador;
	var acumAnalista;

	var flagSueldo=0;
	var sueldoMaximo;
	var sueldoMaximoGenero;

	var femenimoMaximoSueldo;
	var femeninoNombre;
	var flagFemenino=0;

	do {
		nombre = prompt ("ingrese su nombre por favor");
		while (isNaN (nombre) == false) {
			nombre= prompt ("ingrese su nombre por favor");
		}
		edad = prompt ("ingrese su edad por favor");
		edad = parseInt(edad);
		while (isNaN(edad) == true || edad < 0 ){
			edad = prompt ("ingrese su edad por favor");
			edad = parseInt(edad);
		}
		genero = prompt("ingrese su genero por favor");
		while( genero != "masculino" && genero != "femenino" && genero != "no binario"){
			genero = prompt("ingrese su genero por favor");
			 
		}
		puesto = prompt("ingrese su puesto por favor");
		while( puesto != "programador" && puesto != "analista" && puesto != "Qa"){
			puesto = prompt("ingrese su puesto por favor");
			 
		}
		sueldo = prompt ("ingrese su sueldo por favor");
		sueldo = parseInt(sueldo);
		while (isNaN(sueldo) == true || sueldo < 15000 || sueldo > 70000 ){
			sueldo = prompt ("ingrese su sueldo por favor");
			sueldo = parseInt(sueldo);
		}

		switch(puesto){
			case "programador":
				contProgramador++;
				acumProgramador= acumProgramador + sueldo;
				if ( genero == "no binario" && sueldo >= 20000 && sueldo <=55000){
					contNoBinario++;
				}
				break;	
			case "analista":
				contAnalista++;
				acumAnalista= acumAnalista +sueldo;
				break;
			case "Qa":
				contQa++;
				acumQa= acumQa + sueldo;
				break;	
		}
		 if (flagSueldo ==0){
			 sueldoMaximo=sueldo;
			 sueldoMaximoGenero= genero;
			 flagSueldo++
		 }
		 else if (sueldo >sueldoMaximo){
			 sueldoMaximo= sueldo;
			 sueldoMaximoGenero=genero;
		 }
		 if (flagFemenino ==0 && genero== "femenino"){
			 femenimoMaximoSueldo= sueldo;
			 femeninoNombre=nombre;
			 flagFemenino++;
		 }
		 else if( sueldo> femenimoMaximoSueldo){
			 femenimoMaximoSueldo=sueldo;
			 femeninoNombre=nombre;
		 }
		 continuar =confirm ("desea continuar?");
	 }while(continuar);

	if(contProgramador > 0){
		PromedioSueldoProgramador=acumProgramador / contProgramador;
		document.write("el promedio de sueldo de los progrmadores es de  "+ PromedioSueldoProgramador +"<br>");
	}else{
		document.write("no hubo entradas para el puesto de programador"+"<br>")
	}
	if(contAnalista > 0){
		PromedioSueldoAnalista=acumAnalista / contAnalista;
		document.write("el promedio de sueldo de los analistas es de  "+ PromedioSueldoAnalista +"<br>");
	}else{
		document.write("no hubo entradas para el puesto de analistas"+"<br>")
	}
	if(contQa > 0){
		PromedioSueldoQa=acumQa / contQa;
		document.write("el promedio de sueldo de los Qa es de  "+ PromedioSueldoQa+"<br>");
	}else{
		document.write("no hubo entradas para el puesto de Qa"+"<br>")
	}
	if (contNoBinario > 0){
		document.write("hay no binarios que cobran mas de 20000 y menos de 55000"+contNoBinario+"<br>")
	}
	if (flagSueldo > 0){
		document.write("El genero del que percibe el mayor sueldo es :" + genero+"<br>");
	} 
	if( flagFemenino >0){
		document.write("El nombre de la mujer con mayor sueldo es :"+ femeninoNombre+"<br>");
	}
	

}
