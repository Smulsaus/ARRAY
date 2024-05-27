// Opdracht 1
let passengers = ["Youri", "Semi", "Mahed", "Walid", "Malik", "Ekrem", "Yassin", "Berat", "Sinan", "Raymond"];
console.log("Passagiers in de bus:");
for (let i = 0; i < passengers.length; i++) {
    console.log(passengers[i]);
}

// Opdracht 2
passengers.push("Koen");
console.log("Passagiers na toevoeging:");
for (let i = 0; i < passengers.length; i++) {
    console.log(passengers[i]);
}

// Opdracht 3
passengers.splice(4, 1);
console.log("Passagiers na uitstappen:");
console.log(passengers);

// Opdracht 4
console.log("Nieuwe volgorde van passagiers:");
passengers.sort(() => Math.random() - 0.5);
console.log(passengers);

// Opdracht 5
console.log("Passagiers die uitstappen:");
while (passengers.length > 0) {
    console.log(passengers.shift());
    console.log("Aantal passagiers over: " + passengers.length);
}
