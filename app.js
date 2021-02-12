let gumb = document.getElementById("dodaj");
let input = document.getElementById("unos");
let uneseno = document.getElementById("unesensadrzaj");
let ukloni = document.getElementById("ukloni");
let spanbrojac = document.getElementById("broj");
var brojac;

gumb.addEventListener("click", function () {
  var paragraf = document.createElement("p");
  paragraf.classList.add("p-style");
  paragraf.innerText = input.value;
  brojac = spanbrojac.innerHTML;
  brojac++;
  spanbrojac.innerHTML = brojac;
  uneseno.appendChild(paragraf);
  input.value = "";
  ukloni.addEventListener("click", function () {
    uneseno.removeChild(paragraf);
    spanbrojac.innerHTML = 0;
  });
});
