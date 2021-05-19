let test = document.getElementsByClassName("button");
let dupsko = document.getElementById("licznik");
function sluchacz()
{


    //document.getElementById("bartek").classList.add("animowanybartek");
    document.getElementsByClassName("button").innerHTML="dupa";
    document.getElementById("licznik").innerHTML +=1;
 
}
function dodajnik(){   document.getElementById("licznik").innerHTML = '1';}

test.onclick = function() {sluchacz()};
dupsko.onclick = function() {dodajnik()};

