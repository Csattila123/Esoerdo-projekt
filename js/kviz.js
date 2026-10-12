var kvizKerdes = document.querySelector(".kvizKerdes");

var aktualisIndex = 0;
var elertPontok = 0;

function kviz() {
    if (aktualisIndex == 10) {
        document.querySelector(".kviz").classList.add("d-none");
        document.querySelector(".kiertekeles").classList.remove("d-none");
        document.querySelector(".kiertekeles").innerHTML = "<p>Elért pontszámok: "+ elertPontok +"</p>";
    }
    kvizKerdes.innerHTML = kerdesek[aktualisIndex].kerdes;

}

document.querySelector(".kvizGomb").addEventListener('click', () => {
    var kijeloltRadio = document.querySelector("input[name='radios']:checked");

    if (kijeloltRadio.value == kerdesek[aktualisIndex].valasz) {
        elertPontok++;
    }

    aktualisIndex++;
    kviz();

});

kviz();