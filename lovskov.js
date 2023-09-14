// Definér konstanter for URL'en til API'en og API-nøglen for overskud
const url = "https://ebwnpfllzucpiixhtnhu.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVid25wZmxsenVjcGlpeGh0bmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MTIzMDEsImV4cCI6MjAwOTQ4ODMwMX0.CyZqh6CsJ8T2r-1KUO0oillkNqf7941nqLFY3jCnbSA";

// Udfør en fetch-anmodning til API'en for at hente data om årstider
fetch(url + "/rest/v1/seasons", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then((data) => {
    // Kald funktionen showData med dataen som argument
    showData(data);
  });

// En funktion til at vise dataen på websiden
function showData(data) {
  console.log(data);
  const grid_note = document.querySelector(".grid_note");

  // Løb gennem hvert element i data-arrayet
  data.forEach((item) => {
    console.log(item);

    // Find HTML-templaten med <template> taggen
    const template = document.querySelector("template").content;

    // Lav en kopi af HTML-templaten
    const copy = template.cloneNode(true);

    // Opdater tekstindholdet i linket med årstidsnavnet
    copy.querySelector("a").textContent = item.navn;

    // Tilføj en URL-parameter til linket baseret på årstidens id og navn
    copy.querySelector("a").setAttribute("href", `måned.html?season=${item.id}&navn=${item.navn}`);

    // Tilføj en CSS-klasse til den klonede node baseret på årstidsnavnet
    if (item.navn === "Sommer") {
      copy.querySelector(".note").classList.add("sommer");
    } else if (item.navn === "Vinter") {
      copy.querySelector(".note").classList.add("vinter");
    } else if (item.navn === "Forår") {
      copy.querySelector(".note").classList.add("foraar");
    } else if (item.navn === "Efterår") {
      copy.querySelector(".note").classList.add("efteraar");
    }

    grid_note.appendChild(copy);
  });
}
