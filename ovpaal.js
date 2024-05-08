// Opdracht 1
let passengersInfo = [
    { id: 163821, name: "Youri Mulders", saldo: 34, woonplaats: "Velden" },
    { id: 145032, name: "Mahed Azam", saldo: 18, woonplaats: "Venlo" }
];

// Opdracht 2
function addPassenger(id, name, saldo, woonplaats) {
    passengersInfo.push({ id: id, name: name, saldo: saldo, woonplaats: woonplaats });
}

function checkInOut(id, amount) {
    let passenger = passengersInfo.find(p => p.id === id);
    if (passenger) {
        passenger.saldo += amount;
        console.log(passenger.name + "'s saldo is nu: " + passenger.saldo);
    } else {
        console.log("Passagier niet gevonden.");
    }
}

function removePassenger(id) {
    let index = passengersInfo.findIndex(p => p.id === id);
    if (index !== -1) {
        passengersInfo.splice(index, 1);
        console.log("Passagier verwijderd.");
    } else {
        console.log("Passagier niet gevonden.");
    }
}

function showPassengers() {
    console.log("Lijst met passagiers:");
    passengersInfo.forEach(function(passenger) {
        console.log(passenger.name + " - Saldo: " + passenger.saldo + " - Woonplaats: " + passenger.woonplaats);
    });
}

// Testen van functies
addPassenger(123456, "Emma Smith", 25, "Amsterdam");
checkInOut(163821, -10);
removePassenger(145032);
showPassengers();
