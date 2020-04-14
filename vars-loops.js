

            

           let nombre = "Jefferson";
           let apellido1 = "Otto";
           let apellido2 = "Gonsalves";

           let dia = 9;
           let mes = 10;
           let year = 1972;

           var fechaNacimiento = new Array();
           fechaNacimiento.push(dia);
           fechaNacimiento.push(mes);
           fechaNacimiento.push(year);



            //Output Nombre empezando por appelidos
           console.log(apellido1 + " " + apellido2 + " " + nombre);
            //Output fecha nacimiemto + /
           console.log(fechaNacimiento.join("/"));



            //Calculo de cuantos años bisiestos hay entre 1948 y mi año de nacmiento
            const  leap = 1948;
            const  leapInterval = 4;

           let result = (year - leap) / leapInterval;
           console.log(result);



           
            //Output los años bisiestos desde 1948 hasta 1972
            for (var i = leap; i <= year; i += 4)
            {
                console.log(i);
            }


          //   //Variables para testeo del año de nacimiento
           let fraseLeap = "Mi año de nacimiento es bisiesto.";
           let fraseNoLeap = "Mi año de nacimiento no es bisiesto.";
           let leapYear = 1948;
           let nameFrase = `Mi nonmbre es ${nombre} ${apellido1} ${apellido2}`;
           let bornFrase = `Nací el ${fechaNacimiento.join("/")}`;
           let isLeap = false;
           let leapFinalFrase = nameFrase + "\n" + bornFrase +  "\n" + fraseLeap;
           let notLeapFinalFrase = nameFrase +  "\n" + bornFrase +  "\n" + fraseNoLeap;



          //   /*Bucle de testeo para verificar si el año es bisiesto
          //    más output de las frases con nombre, fecha de nacimiento
          //    y si el año es bisiesto o no.*/
            
            while (leapYear <= year && isLeap == false)
            {

                if (leapYear == year)
                {
                    console.log(leapFinalFrase);
                    isLeap = true;

                }

                leapYear += 4;

            }


            if (isLeap == false)
            {
                console.log(notLeapFinalFrase);
            }


    
   
