const passagiers = [
    { id: 163821, naam: "Leo Daams", saldo: 34, woonplaats: "Den Bosch", telefoonnummer: "0612345678" },
    { id: 145032, naam: "Nicole Hops", saldo: 18, woonplaats: "Maastricht", telefoonnummer: "0687654321" },
    { id: 123456, naam: "Jan Jansen", saldo: 10, woonplaats: "Utrecht", telefoonnummer: "0611122233" },
    { id: 654321, naam: "Marie de Vries", saldo: 5, woonplaats: "Rotterdam", telefoonnummer: "0611223344" },
    { id: 789012, naam: "Klaas Pieters", saldo: 15, woonplaats: "Amsterdam", telefoonnummer: "0611225566" }
];

let busPassagiers = [];
const passagierInfo = document.getElementById('passagierInfo');
const bus = document.getElementById('bus');
const busPassagiersDiv = document.getElementById('busPassagiers');
const saldoInfo = document.getElementById('saldoInfo');
const haltes = document.querySelectorAll('.halte');
let currentHalteIndex = 0;
let busPosition = 0;

function toonPassagiersInBus() {
    busPassagiersDiv.innerHTML = 'Passagiers in de bus: ' + busPassagiers.map(p => p.naam).join(', ');
}

function toonSaldoInfo() {
    saldoInfo.innerHTML = 'Saldo informatie:<br>' + passagiers.concat(busPassagiers).map(p => `${p.naam}: €${p.saldo}`).join('<br>');
}

function checkIn(id) {
    const passagier = passagiers.find(p => p.id === id);
    if (passagier && passagier.saldo >= 1) {
        busPassagiers.push(passagier);
        passagiers.splice(passagiers.indexOf(passagier), 1);
        toonPassagiersInBus();
        toonSaldoInfo();
        console.log(`${passagier.naam} is ingecheckt.`);
    } else {
        console.log("Passagier niet gevonden of onvoldoende saldo");
    }
}

function checkUit(id) {
    const passagier = busPassagiers.find(p => p.id === id);
    if (passagier) {
        busPassagiers.splice(busPassagiers.indexOf(passagier), 1);
        passagiers.push(passagier);
        toonPassagiersInBus();
        toonSaldoInfo();
        console.log(`${passagier.naam} is uitgecheckt.`);
    } else {
        console.log("Passagier niet in de bus gevonden");
    }
}

function verlaagSaldo() {
    busPassagiers.forEach(passagier => {
        passagier.saldo -= 1;
        if (passagier.saldo < 0) {
            console.log(`${passagier.naam} heeft onvoldoende saldo en is uitgecheckt.`);
            checkUit(passagier.id);
        }
    });
    toonSaldoInfo();
}

function willekeurigInUitChecken() {
    if (Math.random() > 0.5 && passagiers.length > 0) {
        const randomPassagier = passagiers[Math.floor(Math.random() * passagiers.length)];
        checkIn(randomPassagier.id);
    } else if (busPassagiers.length > 0) {
        const randomPassagier = busPassagiers[Math.floor(Math.random() * busPassagiers.length)];
        checkUit(randomPassagier.id);
    }
}

function beweegBus() {
    busPosition += 5;
    bus.style.left = busPosition + 'px';
    if (busPosition >= haltes[currentHalteIndex].offsetLeft) {
        busPosition = haltes[currentHalteIndex].offsetLeft;
        verlaagSaldo();
        willekeurigInUitChecken();
        setTimeout(() => {
            if (currentHalteIndex < haltes.length - 1) {
                currentHalteIndex++;
            } else {
                currentHalteIndex = 0;
                busPosition = -100;
                bus.style.left = busPosition + 'px';
            }
            requestAnimationFrame(beweegBus);
        }, 1000);
    } else {
        requestAnimationFrame(beweegBus);
    }
}

// Voorbeeld: Start de bus animatie
requestAnimationFrame(beweegBus);

// Toon initiale saldo informatie
toonSaldoInfo();
