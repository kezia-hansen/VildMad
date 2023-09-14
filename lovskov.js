const url = "https://ebwnpfllzucpiixhtnhu.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVid25wZmxsenVjcGlpeGh0bmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MTIzMDEsImV4cCI6MjAwOTQ4ODMwMX0.CyZqh6CsJ8T2r-1KUO0oillkNqf7941nqLFY3jCnbSA";

fetch(url + "/rest/v1/seasons", {
  method: "GET",
  headers: {
    apikey: key, // Use lowercase "apikey" here
  },
})
  .then((res) => res.json())
  .then((data) => {
    // Call the showData function with the data
    showData(data);
  });

function showData(data) {
  console.log(data);
  const grid_note = document.querySelector(".grid_note");

  data.forEach((item) => {
    console.log(item);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("a").textContent = item.navn;
    copy.querySelector("a").setAttribute("href", `måned.html?season=${item.id}&navn=${item.navn}`);

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
