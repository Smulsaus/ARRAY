// Opdracht 1
let hitSongs = ["Vent", "Starlight", "East Side", "Warm The Room", "You Shine", "Soothe"];

// Opdracht 2
console.log("Eerste songtitel: " + hitSongs[0]);

// Opdracht 3
console.log("Verzoeknummer: " + hitSongs[2]);

// Opdracht 4
console.log("Alle nummers in de lijst:");
hitSongs.forEach(function(song, index) {
    console.log((index + 1) + ". " + song);
});
