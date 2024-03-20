function calculaimc() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = Math.pow(altura, 2) / peso;
    const imc = (resultado / 10).toFixed(1);



    if(imc < 18.5){
        console.log(altura, peso);
        console.log("if 1  ===" + imc)
        alert("Você está abaixo do peso   Segue resultado a seguir: " + imc)
    }
    else if(imc >= 18.5 && imc < 24.9){
        console.log("if 2 == " + imc)
        alert("Você está com peso normal   Segue resultado a seguir: " + imc)
    }
    else if(imc >= 24.9 && imc < 29.9) {
        console.log("if 3 == " + imc)
        alert("Você está com sobrepeso!   Segue resultado a seguir: " + imc)
        }
    else if(imc >= 29.9 && imc < 39.9){
        console.log("if 4 == " + imc)
        alert("Você está com obesidade!   Segue resultado a seguir: " + imc)
    }
    else if(imc >= 39.9) {
            console.log(altura, peso);
            console.log("if 5 == " + imc)
            alert("Você está com obesidade grave!    Segue resultado a seguir: " + imc)
    }

}
   