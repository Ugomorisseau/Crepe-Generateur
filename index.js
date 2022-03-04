let oeuf = 1;
let lait = 0.2;
let sucre = 0.5;
let beurre = 13;
let farine = 63;
let input;


function calculRecette() {
    input = document.getElementById("input-inviter").value;

    let farineTotal = farine * input;

    let oeufTotal = oeuf * input;

    let laitTotal = lait * input;

    let beurreTotal = beurre * input;

    if (input < 1) {
        alert("Veuillez entrez une valeure correcte !");
        document.getElementById("input-inviter").value = 1;
    }
    else {
        document.getElementById("label-lait").textContent = laitTotal.toFixed(2) + "L de lait";
        document.getElementById("label-oeuf").textContent = oeufTotal + "oeuf(s)";
        document.getElementById("label-beurre").textContent = beurreTotal + "g de beurre";
        document.getElementById("label-farine").textContent = farineTotal + "g de farine";
    }

    console.log(sucreTotal, farineTotal, oeufTotal, laitTotal, beurreTotal);
}

