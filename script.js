// Manipulation du DOM
const display = document.getElementById('display');
const input = document.getElementById('input');
const select = document.getElementById('select');
const submit = document.getElementById('submit');

// Formules
const euro_to_dollar = 0.98;
const euro_to_pound = 0.87;
const euro_to_yen = 147.25;

// Calcul et affichage
submit.onclick = () => {
    console.log(submit.value);
    let result = "";
    const euro = input.value;
    switch (select.value) {
        case "dollar":
            result = `${euro}€ = ${euro * euro_to_dollar}$`;
        break;
        case "pound":
            result = `${euro}€ = ${euro * euro_to_pound}£`;
        break;
        case "yen":
            result = `${euro}€ = ${euro * euro_to_yen}¥`;
        break;
    }

    display.innerText = result;
};