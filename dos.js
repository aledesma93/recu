// Realizar el algoritmo que permita ingresar los datos de los 500
//             alumnos de la UTN FRA, los datos solicitados son:
//             <br>nombre,
//             <br>carrera("Quimica";"Fisica";"Sistemas"),
//             <br>sexo (masculino - femenino -no binario),
//             <br>cantidad de materias(entre 1 y 5),
//             <br>Nota promedio del alumno(entre 0 y 10),
//             <br>edad (validar).
//             <br>Se debe informar de existir, o informar que no
//             existe , en el caso que corresponda.
//             <br> a) El nombre del mejor promedio
//             de los alumnos que estudian Fisica. (Sin importar el sexo).
//             <br> b) El nombre de la alumna mas joven.
//             <br> c) Porcentaje de estudiantes que estudia cada carrera.
//             <br> d) La edad y nombre del estudiante que cursa
//             mas materias exceptuando la carrera de Quimica.
function mostrar()
{
    var nombre;
    var carrera;
    var sexo;
    var materias;
    var promedio;
    var edad
    var flagPromedio=0;
    var mejorPromedio;
    var nombreMejorPromedio;
    var contFisica=0;
    var contSistemas=0;
    var contQuimica=0;
    var flagMasJoven=0;
    var nombreMasJoven;
    var edadMasJoven;
    var porcentajeQuimica;
    var porcentajeFisica;
    var porcentajeSistemas;
    var edadMasMaterias;
    var nombreMasMaterias;
    var flagMaterias;


    for (i=0; i<500; i++){
        nombre = prompt ("ingrese su nombre por favor");
		while (isNaN (nombre) == false) {
			nombre= prompt ("ingrese su nombre por favor");
		}
        carrera = prompt ("ingrese su carrera por favor");
		while (carrera!="quimica" && carrera!="fisica"&& carrera!="sistemas") {
			carrera= prompt ("ingrese su carrera por favor");
		}
        sexo = prompt ("ingrese su sexo por favor");
		while (sexo!="masculino" && sexo!="femenino"&& sexo!="no binario") {
			sexo= prompt ("ingrese su sexo por favor");
		}
        materias = prompt ("ingrese cantidad de materias por favor");
        materias=parseInt(materias);
		while (isNaN (materias) == true ||materias<1 || materias>5) {
			materias= prompt ("ingrese cantidad de materias por favor");
            materias=parseInt(materias);
		}
        promedio = prompt ("ingrese la nota promedio por favor");
		promedio=parseInt(promedio);
		while (isNaN (promedio) == true ||promedio<1 || materias>10) {
			promedio= prompt ("ingrese la nota promedio  por favor");
            promedio=parseInt(promedio);
		}
        edad = prompt ("ingrese la edad por favor");
		edad=parseInt(edad);
		while (isNaN (edad) == true ||edad<18) {
			edad= prompt ("ingrese la edad  por favor");
            edad=parseInt(edad);
		}

        switch(carrera){
            case "fisica":
                contFisica++;
                if(flagPromedio==0){
                    mejorPromedio=promedio;
                    nombreMejorPromedio=nombre;
                    flagPromedio++
                }
                else if(promedio> mejorPromedio){
                    mejorPromedio=promedio;
                    nombreMejorPromedio=nombre;
                }
                break;
            case "quimica":
                contQuimica++;
                break;
            case "sistemas":
                contSistemas++
                break;
        }
        if(flagMasJoven==0){
            nombreMasJoven=nombre;
            edadMasJoven=edad;
            flagMasJoven++;
        }else if (edad<edadMasJoven){
            nombreMasJoven=nombre;
            edadMasJoven=edad;
        }

        if(flagMaterias== 0 && carrera !="quimica"){
            edadMasMaterias=materias;
            nombreMasMaterias=nombre;
            flagMaterias++;
        }else if(materias>edadMasMaterias && carrera  !="quimica"){
            edadMasMaterias=materias;
            edadMasMaterias=edad;
            nombreMasMaterias=nombre;
        }
        if(flagPromedio>0){
            document.write("el nombre del mejor promedio es: "+ nombreMejorPromedio+"<br>")
        }

        if(flagMaterias>0){
            document.write("el nombre y la edad del alumno con mas materias es"  + edadMasMaterias+""+nombreMasMaterias +"<br>")
        }


        alumnos=contSistemas+contQuimica+contFisica;
        if(contQuimica>0){
            porcentajeQuimica=contQuimica*100/alumnos;
            document.write(" el porcentaje de alumnos de quimica es"+ porcentajeQuimica+"<br>")
        }
        else if(contFisica>0){
            porcentajeFisica=contFisica*100/alumnos;
            document.write(" el porcentaje de alumnos de fisica es"+ porcentajeFisica+"<br>")
        }
        else if(contSistemas>0){
            porcentajeSistemas=contSistemas*100/alumnos;
            document.write(" el porcentaje de alumnos de sistemas es"+ porcentajeSistemas+"<br>")
        }

        if(flagMasJoven>0){
            document.write("la alumna mas joven es:"+ nombreMasJoven+"<br>")
        }

    }
}
