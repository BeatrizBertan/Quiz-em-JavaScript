var pontos = 0;

function quiz(){
    window.open("quizz.html" , "_self")
    }


function validarQ1 (){
     var a = document.getElementById('op1').checked;
    var b = document.getElementById('op2').checked;
    var c = document.getElementById('op3').checked;
    var d = document.getElementById('op4').checked;
        if (((a == true &&
           b == false &&
           c == false &&
           d == false))){
               pontos = pontos + 1;
           }
    else {
        pontos = pontos;
    }  
}
function validarQ2 () {
    var a2 = document.getElementById('op21').checked;
    var b2 = document.getElementById('op22').checked;
    var c2 = document.getElementById('op23').checked;
    var d2 = document.getElementById('op24').checked;
    if (((a2 == false &&
           b2 == false &&
           c2 == true &&
           d2 == false))){
               pontos = pontos + 1;
           }
    else {
        pontos = pontos;
    } 
}

function validarQ3 () {
    var a3 = document.getElementById('op31').checked;
    var b3 = document.getElementById('op32').checked;
    var c3 = document.getElementById('op33').checked;
    var d3 = document.getElementById('op34').checked;
    if (((a3 == false &&
           b3 == true &&
           c3 == false &&
           d3 == false))){
               pontos = pontos + 1;
           }

    else {
        pontos = pontos;
    }  
}

function validarQ4 () {
    var a4 = document.getElementById('op41').checked;
    var b4 = document.getElementById('op42').checked;
    var c4 = document.getElementById('op43').checked;
    var d4 = document.getElementById('op44').checked;
    if (((a4 == true &&
           b4 == false &&
           c4 == false &&
           d4 == false))){

               pontos = pontos + 1;
           }

    else {
        pontos = pontos;
    }  
}

function validarQ5 () {
    var a5 = document.getElementById('op51').checked;
    var b5 = document.getElementById('op52').checked;
    var c5 = document.getElementById('op53').checked;
    var d5 = document.getElementById('op54').checked;
    if (((a5 == true &&
           b5 == false &&
           c5 == false &&
           d5 == false))){
               pontos = pontos + 1;
           }

    else {
        pontos = pontos;
    }  
}

function validar(){
    if ((document.getElementsByTagName('input')[0].checked == false && 
        document.getElementsByTagName('input')[1].checked == false &&
        document.getElementsByTagName('input')[2].checked == false &&
        document.getElementsByTagName('input')[3].checked == false) ||
        (document.getElementsByTagName('input')[4].checked == false &&
        document.getElementsByTagName('input')[5].checked == false &&
        document.getElementsByTagName('input')[6].checked == false &&
        document.getElementsByTagName('input')[7].checked == false ) ||
        (document.getElementsByTagName('input')[8].checked == false &&
        document.getElementsByTagName('input')[9].checked == false &&
        document.getElementsByTagName('input')[10].checked == false &&
        document.getElementsByTagName('input')[11].checked == false )||
        (document.getElementsByTagName('input')[12].checked == false &&
        document.getElementsByTagName('input')[13].checked == false &&
        document.getElementsByTagName('input')[14].checked == false &&
        document.getElementsByTagName('input')[15].checked == false )||
        (document.getElementsByTagName('input')[16].checked == false &&
        document.getElementsByTagName('input')[17].checked == false &&
        document.getElementsByTagName('input')[18].checked == false &&
        document.getElementsByTagName('input')[19].checked == false)){
        alert('Preencha as alternativas!');
    }
    else{
        validarQ1();
        validarQ2();
        validarQ3();
        validarQ4();
        validarQ5();
    if(pontos==5){
        alert('Pontuação: ' + pontos);
        window.location.href = "feedback5.html";
    }
    else if(pontos>=3 && pontos<5){
        alert('Pontuação: ' + pontos)
        window.location.href = "feedback4_3.html";
    }
    else if(pontos >0 && pontos<=2){
        alert('Pontuação: ' + pontos);
        window.location.href = "feedback2_1.html";
    }
    else{
        alert('Pontuação: ' + pontos);
        window.location.href= "feedback0.html";
    }
    }
}




    
