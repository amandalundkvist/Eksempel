document.getElementById("beregn").addEventListener("click", function () {
    const vurderingsplacering = document.getElementById("vurdering");

    /*Laver en binding til vægt og højde, som bliver koblet til den værdi, der bliver udfyldt i felterne vægt og højde*/
    const fart = Number(document.getElementById("fart").value);
    let boedetakst = 0;

    if (fart >= 51 && fart <= 59) {
        boedetakst = 1000;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 51-59 km/t i en 50 km zone.";

    } else if (fart >= 60 && fart <= 64) {
        boedetakst = 1500;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 60-64 km/t i en 50 km zone.";

    } else if (fart === 65) {
        boedetakst = 2500;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 65 km/t i en 50 km zone.";

    } else if (fart >= 66 && fart <= 69) {
        boedetakst = 3000;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 66-69 km/t i en 50 km zone + et klip i kørekortet";

    } else if (fart >= 70 && fart <= 79) {
        boedetakst = 3500;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 70-79 km/t i en 50 km zone + et klip i kørekortet";

    } else if (fart === 80) {
        boedetakst = 4000;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 80 km/t i en 50 km zone + et klip i kørekortet";

    } else if (fart >= 81 && fart <= 84) {
        boedetakst = 4000;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 81-84 km/t i en 50 km zone + betinget frakendelse";

    } else if (fart >= 85 && fart <= 89) {
        boedetakst = 4500;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 85-89 km/t i en 50 km zone + betinget frakendelse";

    } else if (fart >= 90 && fart <= 94) {
        boedetakst = 5000;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 90-94 km/t i en 50 km zone + betinget frakendelse";

    } else if (fart >= 95 && fart <= 99) {
        boedetakst = 6000;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 95-99 km/t i en 50 km zone + betinget frakendelse";

    } else if (fart === 100) {
        boedetakst = 6500;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + " kr., da du kørte 100 km/t i en 50 km zone + betinget frakendelse";

    } else if (fart >= 100) {
        boedetakst = 6500;
        vurderingsplacering.innerHTML = "Du får en bøde på " + boedetakst + "+ kr., da du kørte 100+ km/t i en 50 km zone + betinget frakendelse";
    }
})
