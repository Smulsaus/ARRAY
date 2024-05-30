const passagiers = [
    { id: 163821, naam: "Leo Daams", saldo: 34, woonplaats: "Den Bosch", telefoonnummer: "0612345678" },
    { id: 145032, naam: "Nicole Hops", saldo: 18, woonplaats: "Maastricht", telefoonnummer: "0687654321" }
];

function voegPassagierToe(id, naam, saldo, woonplaats, telefoonnummer) {
    passagiers.push({ id, naam, saldo, woonplaats, telefoonnummer });
    console.log(`Passagier ${naam} toegevoegd.`);
}

function checkInUit(id, bedrag) {
    const passagier = passagiers.find(p => p.id === id);
    if (passagier) {
        passagier.saldo += bedrag;
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

// Test cases
voegPassagierToe(234567, "Jan Jansen", 50, "Utrecht", "0612345999");
checkInUit(163821, -3);  // Leo Daams checkt uit en betaalt 3
verwijderPassagier(145032);  // Nicole Hops zeg haar OV-kaart op
toonPassagiers();
