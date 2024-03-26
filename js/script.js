let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.querySelector("#host-name").innerHTML = "Evan";

document.querySelector("#collaborator-name").innerHTML = "Flora";

// Question 2
// You can also create their own CSS classes in style.css file and use that. 
let hidebutton = document.querySelector("#instruction_button");
hidebutton.addEventListener("click", hideInstructions);

function hideInstructions() {
    let questions = document.querySelectorAll(".question"); 
    for(let i = 0; i < questions.length; i++){
        questions[i].style.display = "none";
    }
}


// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
let firstName = document.getElementById("first_name");
firstName.addEventListener('change', function() {
    let x = document.getElementById("first_name").value;
    let text;
    if (x == "John") {
        text = "Doe";
    }
    document.getElementById("last_name").innerHTML = text;
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
function match(p1, p2) {
    if (p1 != p2) { 
        document.querySelector("#password-alert").innerHTML = "Password does not match";
    } 
    else{
        document.querySelector("#password-alert").innerHTML = "Password Matches";
    }
}
let p1 = document.querySelector("#password");
let p2 = document.querySelector("#confirm_password");
document.querySelector("#password-alert").addEventListener("onkeyup", match(p1.value, p2.value));




//Question 6





//Question 7 





//Question 8





//Question 9 

