console.log("holaaa");

var i;

for (i = 1; i <=10; i=i+1){
    console.log(i**2);
}

var i;
var texto = "";
for(i=1;i<=10;i++){//i=1+1

texto = texto +i+"<br>"; 

}

document.getElementById("demo").innerHTML = texto;