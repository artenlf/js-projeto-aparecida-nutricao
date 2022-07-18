// Alterando o título da página
let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector('.info-altura');
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector('.info-imc');

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = 'Peso Inválido!';
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaValida) {
        alturaValida = false;
        tdImc.textContent = 'Altura Inválida!';
        paciente.classList.add('paciente-invalido');
    }

    if (pesoValido && alturaValida) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso < 700 && peso > 0) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}