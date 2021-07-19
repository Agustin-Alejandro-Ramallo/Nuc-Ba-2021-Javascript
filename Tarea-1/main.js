const identificarMayorEdad = (nombre, apellido, edad) => {
    if(!nombre || !apellido || !edad){
        console.log('Ingrese Datos')
    }

    if(edad < 18){
        console.log(`${nombre} ${apellido} 'eres menor de edad'`)
    }

    if(edad >= 18 && edad <= 60){
        console.log(`${nombre} ${apellido} 'eres mayor de edad'`)
    }
    if(edad > 60){
        console.log(`${nombre} ${apellido} 'eres mayor de edad y estas en la tercera edad'`)
    }

}
identificarMayorEdad('Agustin', 'Ramallo', 61)

/*Si no es mayor de edad ( menor a 18 ), debemos devolver un 
mensaje ( Nombre  + Apellido + eres menor de edad )


Si es mayor de edad ( mayor a 18 ), debemos devolver un 
mensaje ( Nombre  + Apellido + eres mayor de edad )


Si es mayor de edad pero si es mayor de 60, 
debemos devolver un mensaje 
( Nombre  + Apellido + eres mayor de edad y estas en la tercera edad )*/
