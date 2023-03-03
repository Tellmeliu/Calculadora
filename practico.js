const bot0= document.querySelector('#bot0');
const bot1= document.querySelector('#bot1');
const bot2=document.querySelector('#bot2');
const bot3=document.querySelector('#bot3');
const bot4=document.querySelector('#bot4');
const bot5=document.querySelector('#bot5');
const bot6=document.querySelector('#bot6');
const bot7=document.querySelector('#bot7');
const bot8=document.querySelector('#bot8');
const bot9=document.querySelector('#bot9');

var valor = document.querySelector('#input').value;

var arreglo=""
var opera="";

var sumando1="";


//Boton 0
bot0.addEventListener('click',()=>{

arreglo=arreglo.concat("0");
document.getElementById("input").value=arreglo;
if (arreglo.indexOf("0",0)==0){
    arreglo="";
}

});


//Boton 1

bot1.addEventListener('click',()=>{

arreglo=arreglo.concat("1");
document.getElementById("input").value=arreglo;
});

//Boton 2

bot2.addEventListener('click',()=>{

arreglo=arreglo.concat("2");
document.getElementById("input").value=arreglo;
});

//Boton 3

bot3.addEventListener('click',()=>{

arreglo=arreglo.concat("3");
document.getElementById("input").value=arreglo;
});

//Boton 4

bot4.addEventListener('click',()=>{

arreglo=arreglo.concat("4");
document.getElementById("input").value=arreglo;
});

//Boton 5

bot5.addEventListener('click',()=>{

arreglo=arreglo.concat("5");
document.getElementById("input").value=arreglo;
});

//Boton 6

bot6.addEventListener('click',()=>{

arreglo=arreglo.concat("6");
document.getElementById("input").value=arreglo;
});

//Boton 7

bot7.addEventListener('click',()=>{

arreglo=arreglo.concat("7");
document.getElementById("input").value=arreglo;
});

//Boton 8

bot8.addEventListener('click',()=>{

arreglo=arreglo.concat("8");
document.getElementById("input").value=arreglo;
});

//boton 9

bot9.addEventListener('click',()=>{

arreglo=arreglo.concat("9");
document.getElementById("input").value=arreglo;
});

//botones 

//C

botC.addEventListener('click',()=>{

arreglo="";
document.getElementById("input").value=arreglo;
});


var pana=arreglo;
//Operaciones


//Suma
botsuma.addEventListener('click',()=>{
console.log(arreglo);

sumando1=arreglo;

opera="+";

arreglo="";

});

//Resta
botresta.addEventListener('click',()=>{
console.log(arreglo);

sumando1=arreglo;

opera="-";

arreglo="";

});


//Multiplicacion

botmultiplica.addEventListener('click',()=>{
console.log(arreglo);

sumando1=arreglo;

opera="*";

arreglo="";

})


//Division

botdivide.addEventListener('click',()=>{
console.log(arreglo);

sumando1=arreglo;

opera="/";

arreglo="";

})





botigual.addEventListener('click',()=>{

if(opera=="+"){
    var resultado=parseFloat(sumando1)+parseFloat(arreglo);
    document.getElementById("input").value=resultado;
    console.log(sumando1);

    arreglo=resultado;
    
} else if(opera=="-"){
    var resultado=parseFloat(sumando1)-parseFloat(arreglo);
    document.getElementById("input").value=resultado;
    console.log(resultado);
    arreglo=resultado;
   
}else if(opera=="*"){
    var resultado=parseFloat(sumando1)*parseFloat(arreglo);
    document.getElementById("input").value=resultado;
    console.log(resultado);
    arreglo=resultado;
   
}
else if(opera=="/"){
    var resultado=parseFloat(sumando1)/parseFloat(arreglo);
    document.getElementById("input").value=resultado;
    console.log(resultado);
    arreglo=resultado;
   
}

})

