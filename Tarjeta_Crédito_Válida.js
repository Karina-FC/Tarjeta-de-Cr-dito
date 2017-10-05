function isValidCard(){
	do{
    	var numCard = prompt("Ingrese el número de su tarjeta de crédito: ");
    	if (/^[0-9]+$/.test(numCard)){
			return luhnAlgorithm();
    	}else {
    		alert ("Ingrese un número válido: "); //Si opción es invalida, se solicita un nuevo número
		}
	}
	while(numCard <= 0);{
		alert ("Ingrese un número válido: ");
	}
}

function luhnAlgorithm(text){}
	text = numCard;
	alert ("Su número de tarjeta es: " + text);
}

while(numCard <= 0);
return var num =0;
for (var i = 0; i >= num.length; i++) {
  var item = num.pop();
  num.splice(num, 0, item);
}




