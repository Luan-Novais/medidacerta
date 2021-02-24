const fields = document.querySelectorAll("[required]")
// console.log(fields)


function customValidation(event) {
    const field = event.target

    function verifyErrors() {
        let foundError = false;

        for (const error in field.validity) {
            if (error !== "customError" && field.validity[error]) {
                foundError = error
            }
        }

        return foundError
    }

    const error = verifyErrors()
    console.log(error)

    if (error) {
        field.setCustomValidity("Campo obrigatório")

    } else {
        field.setCustomValidity("")

    }

}


for (field of fields) {
    field.addEventListener("invalid", customValidation)
}



function calculaImc(){
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        let imc;
        const altura = document.querySelector('#altura').value;
        const peso = document.querySelector('#peso').value;
        imc = peso / (altura * altura)
        console.log(imc)
        document.querySelector('.calculoImc').innerHTML = `Meu IMC é: ${imc.toFixed(2)}`;
        document.querySelector('.calculoImc').style.display = 'block'

        if (altura || peso == NaN) {
            limparCampos();
        }


        if (imc.toFixed(2) <= 18.5) {
            document.querySelector('#magreza').style.backgroundColor = "rgb(93, 250, 101)";
            document.querySelector('.calculoImc').style.backgroundColor = "rgb(93, 250, 101)";
        } else if (imc >= 18.5 && imc <= 24.9) {
            document.querySelector('#normal').style.backgroundColor = "rgb(93, 250, 101)";
            document.querySelector('.calculoImc').style.backgroundColor = "rgb(93, 250, 101)";
        } else if (imc >= 25.0 && imc <= 29.9) {
            document.querySelector('#sobrepeso').style.backgroundColor = "rgb(241, 231, 78)";
            document.querySelector('.calculoImc').style.backgroundColor = "rgb(241, 231, 78)";
        } else if (imc >= 30.0 && imc <= 39.9) {
            document.querySelector('#obesidade').style.backgroundColor = "rgb(245, 130, 35";
            document.querySelector('.calculoImc').style.backgroundColor = "rgb(245, 130, 35)";
        } else {
            document.querySelector('#obesidadeGrave').style.backgroundColor = "rgb(240, 28, 28)";
            document.querySelector('.calculoImc').style.backgroundColor = "rgb(240, 28, 28)";
        }

    })
}


// function calculaImc(){
//         document.querySelector('.calcular').addEventListener('click', (event) =>{
//         event.preventDefault();
//         let imc;
//         const altura =  document.querySelector('#altura').value;
//         const peso =  document.querySelector('#peso').value;
//         imc =  peso / (altura * altura)
//         console.log(imc)
//         document.querySelector('.calculoImc').innerHTML = `Meu IMC é: ${imc.toFixed(2)}`;
//         document.querySelector('.calculoImc').style.display = 'block'

//         if(altura || peso == NaN){
//             limparCampos();
//         }


//         if(imc.toFixed(2) <= 18.5){
//             document.querySelector('#magreza').style.backgroundColor = "rgb(93, 250, 101)";
//             document.querySelector('.calculoImc').style.backgroundColor = "rgb(93, 250, 101)";
//         } else if (imc  >= 18.5 && imc <= 24.9) {
//             document.querySelector('#normal').style.backgroundColor = "rgb(93, 250, 101)";
//             document.querySelector('.calculoImc').style.backgroundColor = "rgb(93, 250, 101)";
//         } else if (imc >= 25.0 && imc <= 29.9) {
//             document.querySelector('#sobrepeso').style.backgroundColor = "rgb(241, 231, 78)";
//             document.querySelector('.calculoImc').style.backgroundColor = "rgb(241, 231, 78)";
//         } else if (imc >= 30.0 && imc <= 39.9) {
//             document.querySelector('#obesidade').style.backgroundColor = "rgb(245, 130, 35";
//             document.querySelector('.calculoImc').style.backgroundColor = "rgb(245, 130, 35)";
//         } else {
//             document.querySelector('#obesidadeGrave').style.backgroundColor = "rgb(240, 28, 28)";
//             document.querySelector('.calculoImc').style.backgroundColor = "rgb(240, 28, 28)";
//         }

//     })
// }


function limparCampos() {
    document.querySelector('.limpar').addEventListener('click', (event) => {
        event.preventDefault();
        let imc = ""
        document.querySelector('.calculoImc').innerHTML = ""
        document.querySelector('.calculoImc').style.display = 'none'
        document.querySelector('#altura').value = "";
        document.querySelector('#peso').value = "";
        document.querySelector('#magreza').style.backgroundColor = "white";
        document.querySelector('#normal').style.backgroundColor = "white";
        document.querySelector('#sobrepeso').style.backgroundColor = "white";
        document.querySelector('#obesidade').style.backgroundColor = "white";
        document.querySelector('#obesidadeGrave').style.backgroundColor = "white";
        calculaImc();

    })
}


calculaImc();
limparCampos();