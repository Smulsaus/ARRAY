// Functie om de array op het scherm te tonen
function toonPassagiers(passagiers) {
    let output = '';
    for (let i = 0; i < passagiers.length; i++) {
        output += passagiers[i] + '<br>';
    }
    document.getElementById('output').innerHTML = output;
}

// Opdracht 1: 10 namen in de array
let passagiers = ['Jan', 'Piet', 'Klaas', 'Marie', 'Anna', 'Joop', 'Henk', 'Lisa', 'Tom', 'Sara'];
toonPassagiers(passagiers);

// Opdracht 2: Nieuwe passagier stapt in
passagiers.push('Nieuwe Passagier');
toonPassagiers(passagiers);

// Opdracht 3: Vijfde persoon stapt uit
passagiers.splice(4, 1);
toonPassagiers(passagiers);

// Opdracht 4: Shuffle de array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(passagiers);
toonPassagiers(passagiers);

// Opdracht 5: Passagiers stappen één voor één uit
let passagiersUitstappen = setInterval(function() {
    if (passagiers.length > 0) {
        passagiers.pop();
        toonPassagiers(passagiers);
        document.getElementById('teller').innerHTML = 'Aantal passagiers in de bus: ' + passagiers.length;
    } else {
        clearInterval(passagiersUitstappen);
    }
}, 1000);
