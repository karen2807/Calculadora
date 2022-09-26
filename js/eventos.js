/* OBJETO CON LAS PROPIEDADES DE LA CALCULADORA*/

var p = {
    tecla: document.querySelectorAll("#calcu ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#opera"),
    cantsig: 0,
    cantdec: false,
    resultado: false,
    
}

/* OBJETO CON LOS METODOS DE LA CALCULADORA*/

var m = {
    inicio: function(){
        for(var i=0; i < p.tecla.length; i++){

            p.tecla[i].addEventListener("click", m.oprimir);
        }
    },
//para obtener los valores de teclado
    teclado: function() {

        document.addEventListener("keydown", m.oprimirt);

    },
//numeros del teclado, esto para que la caculadora tome los valores numericos del teclado
    oprimirt: function(t){
        console.log(t.keyCode);
        if(t.keyCode == 48 || t.keyCode == 96){
            p.accion = "num";
            p.digito = 0;
        }

        if(t.keyCode == 49 || t.keyCode == 97){
            p.accion = "num";
            p.digito = 1;
        }

        if(t.keyCode == 50 || t.keyCode == 98){
            p.accion = "num";
            p.digito = 2;
        }
        
        if(t.keyCode == 51 || t.keyCode == 99){
            p.accion = "num";
            p.digito = 3;
        }

        if(t.keyCode == 52 || t.keyCode == 100){
            p.accion = "num";
            p.digito = 4;
        }

        if(t.keyCode == 53 || t.keyCode == 101){
            p.accion = "num";
            p.digito = 5;
        }

        if(t.keyCode == 54 || t.keyCode == 102){
            p.accion = "num";
            p.digito = 6;
        }
        
        if(t.keyCode == 55 || t.keyCode == 103){
            p.accion = "num";
            p.digito = 7;
        }

        if(t.keyCode == 56 || t.keyCode == 104){
            p.accion = "num";
            p.digito = 8;
        }

        if(t.keyCode == 57 || t.keyCode == 105){
            p.accion = "num";
            p.digito = 9;
        }

        if(t.keyCode == 187 || t.keyCode == 107){
            p.accion = "sig";
            p.digito = "+";
        }

        if(t.keyCode == 189 || t.keyCode == 109){
            p.accion = "sig";
            p.digito = "-";
        }

        if(t.keyCode == 88 || t.keyCode == 106){
            p.accion = "sig";
            p.digito = "*";
        }

        if(t.keyCode == 111){
            p.accion = "sig";
            p.digito = "/";
        }

        if(t.keyCode == 190 || t.keyCode == 110){
            p.accion = "decimal";
            p.digito = ".";
        }

        if(t.keyCode == 13){
            p.accion = "igual";
        }

        if(t.keyCode == 8){
            p.accion = "";
            m.borrar();
        }else{
            p.accion = "";
            p.digito = "";
        }

        m.calculo(p.accion, p,digito);

    },

    oprimir: function(e){
        p.accion = e.target.getAttribute("class");
        p.digito = e.target.innerHTML;
        m.calculo(p.accion, p.digito);
    },

    calculo: function(accion, digito){
        switch(accion){
            
           case "num":
            p.cantsig = 0;
                if(p.operaciones.innerHTML == "0"){
                    p.operaciones.innerHTML = digito;
                } else {
                    if(p.resultado){
                        p.resultado = false;
                        p.operaciones.innerHTML = digito;
                    }else{
                        p.operaciones.innerHTML += digito;
                    }
            
                }
           break;

           case "sig":
            p.cantsig ++;
            if(p.cantsig == "1"){
                if(p.operaciones.innerHTML == "0"){
                    p.operaciones.innerHTML = 0
                }else{
                    p.operaciones.innerHTML += digito;
                    p.cantdec = false;
                    p.resultado = false;
                }
                
            }

           break;

           case "igual":
          p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
          p.resultado = true;            
           break;

           case "decimal":
            if(!p.cantdec && p.cantsig!=1){
                p.operaciones.innerHTML += digito;
                p.cantdec = true;
                p.resultado = false;
            }
           break;
            
        }
    },

    borrar: function() {
        p.resultado = false;
        p.operaciones.innerHTML = 0
    }
}

//si un metodo no lo ejecuta o dispara un click se debe llamar fuera para que se ejecute
m.inicio();
m.teclado();