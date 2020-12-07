let resultat = 0;

document.getElementById("button0").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button0").innerHTML;
    resultat += document.getElementById("button0").innerHTML;
});
document.getElementById("button1").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button1").innerHTML;
    resultat += document.getElementById("button1").innerHTML;
});
document.getElementById("button2").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button2").innerHTML;
    resultat += document.getElementById("button2").innerHTML;
});
document.getElementById("button3").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button3").innerHTML;
    resultat += document.getElementById("button3").innerHTML;
});
document.getElementById("button4").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button4").innerHTML;
    resultat += document.getElementById("button4").innerHTML;
});
document.getElementById("button5").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button5").innerHTML;
    resultat += document.getElementById("button5").innerHTML;
});
document.getElementById("button6").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button6").innerHTML;
    resultat += document.getElementById("button6").innerHTML;
});
document.getElementById("button7").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button7").innerHTML;
    resultat += document.getElementById("button7").innerHTML;
});
document.getElementById("button8").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button8").innerHTML;
    resultat += document.getElementById("button8").innerHTML;
});
document.getElementById("button9").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("button9").innerHTML;
    resultat += document.getElementById("button9").innerHTML;
});

document.getElementById("modulo").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("modulo").innerHTML;
    resultat += "%";
});
document.getElementById("diviser").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("diviser").innerHTML;
    resultat += "/";
});
document.getElementById("moins").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("moins").innerHTML;
    resultat += "-";
});
document.getElementById("plus").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("plus").innerHTML;
    resultat += "+";
});
document.getElementById("egal").addEventListener("click", () =>{
    resultat = eval(resultat);
    document.getElementById("screen").innerHTML = resultat;
});
document.getElementById("fois").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML += document.getElementById("fois").innerHTML;
    resultat += "*";
});

document.getElementById("c").addEventListener("click", () =>{
    document.getElementById("screen").innerHTML = "";
    resultat = 0;
});