let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.querySelector("#host-name").innerHTML = "Evan";

document.querySelector("#collaborator-name").innerHTML = "Flora";

// Question 2
// You can also create their own CSS classes in style.css file and use that.
let hidden = false;
document.querySelector("#instruction_button").addEventListener("click", function() {
    let questions = document.querySelectorAll(".question");
    if (hidden) {
        for(let i = 0; i < questions.length; i++){
            questions[i].classList.remove("hidden");
        }
        hidden = false;
        this.innerHTML = "Hide Instructions";
    } else {
        for(let i = 0; i < questions.length; i++){
            questions[i].classList.add("hidden");
        }
        hidden = true;
        this.innerHTML = "Show Instructions";
    }
});


// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.getElementById("first_name").addEventListener('input', function() {
    if (this.value == "John") {
        document.getElementById("last_name").value = "Doe";
    }
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.


document.getElementById("user_name").addEventListener('input', function() {
    let exists = false;
    for (let i = 0; i < pokemonList.length; i++) {
        if (this.value == pokemonList[i]) {
            exists = true;
        }
    }
    if (exists) {
        document.getElementById("username-alert").innerHTML = "Username already exists";
    } else {
        document.getElementById("username-alert").innerHTML = "Unique username created";
    }
});


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.querySelector("#password").addEventListener("input", function() {
    if (document.querySelector("#password").value != document.querySelector("#confirm_password").value) {
        document.querySelector("#password-alert").innerHTML = "Password does not match";
    } else {
        document.querySelector("#password-alert").innerHTML = "Password Matches";
    }
});
document.querySelector("#confirm_password").addEventListener("input", function() {
    if (document.querySelector("#password").value != document.querySelector("#confirm_password").value) {
        document.querySelector("#password-alert").innerHTML = "Password does not match";
    } else {
        document.querySelector("#password-alert").innerHTML = "Password Matches";
    }
});


//Question 6
document.querySelector("#radio-reset-button").addEventListener("click", function() {
    document.querySelector("#week_tue").checked = false;
    document.querySelector("#week_wed").checked = false;
    document.querySelector("#week_thu").checked = false;
});

//Question 7 
document.querySelector("#profile_pic").addEventListener("change", function() {
    if (this.files[0].size > 102400) {
        alert("File size cannot exceed 100KB");
        this.value = null;
    }
})

//Question 8
document.querySelector("#color-picker").addEventListener("change", function() {
    document.body.style.backgroundColor = this.value;
});

//Question 9 
document.querySelector(".reset-form-button").addEventListener("click", function() {
    document.querySelector("form").reset();
});