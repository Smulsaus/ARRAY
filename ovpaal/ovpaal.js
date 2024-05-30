const passagiers = [
    { id: 163821, naam: "Leo Daams", saldo: 34, woonplaats: "Den Bosch", telefoonnummer: "0612345678", afbeelding: "leo.jpg" },
    { id: 145032, naam: "Nicole Hops", saldo: 18, woonplaats: "Maastricht", telefoonnummer: "0687654321", afbeelding: "nicole.jpg" }
];

const checkSound = document.getElementById('checkSound');
const passagierInfo = document.getElementById('passagierInfo');
const bus = document.getElementById('bus');

function voegPassagierToe(id, naam, saldo, woonplaats, telefoonnummer, afbeelding) {
    passagiers.push({ id, naam, saldo, woonplaats, telefoonnummer, afbeelding });
    console.log(`Passagier ${naam} toegevoegd.`);
}

function checkInUit(id, bedrag) {
    const passagier = passagiers.find(p => p.id === id);
    if (passagier) {
        passagier.saldo += bedrag;
        checkSound.play();
        toonPassagierInfo(passagier);
        console.log(`Passagier ${passagier.naam} heeft nu een saldo van ${passagier.saldo}.`);
    } else {
        console.log("Passagier niet gevonden");
    }
}

function verwijderPassagier(id) {
    const index = passagiers.findIndex(p => p.id === id);
    if (index !== -1) {
        const removed = passagiers.splice(index, 1);
        console.log(`Passagier ${removed[0].naam} verwijderd.`);
    } else {
        console.log("Passagier niet gevonden");
    }
}

function toonPassagiers() {
    console.log("Huidige passagierslijst:", passagiers);
}

function toonPassagierInfo(passagier) {
    passagierInfo.innerHTML = `
        <img src="${passagier.afbeelding}" alt="${passagier.naam}" width="100">
        <p>Naam: ${passagier.naam}</p>
        <p>Saldo: ${passagier.saldo}</p>
        <p>Woonplaats: ${passagier.woonplaats}</p>
        <p>Telefoonnummer: ${passagier.telefoonnummer}</p>
    `;
}

// Simuleer de bus route
let busPosition = 0;
function beweegBus() {
    busPosition += 5;
    bus.style.left = busPosition + 'px';
    if (busPosition < window.innerWidth) {
        requestAnimationFrame(beweegBus);
    } else {
        busPosition = -100;
        requestAnimationFrame(beweegBus);
    }
}

// Start de bus animatie
requestAnimationFrame(beweegBus);