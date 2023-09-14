/* Tilføjet af kezia - Laver kommentarene senere */
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVid25wZmxsenVjcGlpeGh0bmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MTIzMDEsImV4cCI6MjAwOTQ4ODMwMX0.CyZqh6CsJ8T2r-1KUO0oillkNqf7941nqLFY3jCnbSA";
  const id = urlParams.get("id");

  const options = {
    method: "GET",
    headers: {
      apikey: key,
    },
  };

  fetch(`https://ebwnpfllzucpiixhtnhu.supabase.co/rest/v1/vildmad3?id=eq.${id}`, options)
    .then((res) => res.json())
    .then((data) => showProduct(data));

  function showProduct(product) {
    console.log("dette produkt", product[0].title);
    document.querySelector(".ramme h1").textContent = product[0].title;
    document.querySelector(".card img").src = product[0].profile_image;
    // document.querySelector(".card .bio").textContent = product[0].bio;
    document.querySelector(".sankested").textContent = product[0].sankested;
    document.querySelector(".sæson").textContent = product[0].årstider;
    document.querySelector(".beskrivelse").textContent = product[0].beskrivelse;
    document.querySelector(".sankning").textContent = product[0].sankning;
    document.querySelector(".nb").textContent = product[0].nb;
    // Select the .nb paragraph
    const nbParagraph = document.querySelector(".nb");

    // Check if the .nb paragraph has content
    if (nbParagraph.textContent.trim().length === 0) {
      // If it has no content, hide the associated icon
      const nbIcon = nbParagraph.previousElementSibling;
      if (nbIcon && nbIcon.classList.contains("icon")) {
        nbIcon.style.display = "none";
      }
    }
    document.querySelector(".risiko").textContent = product[0].risiko;

    // Select the risk element by its class
    const riskElement = document.querySelector(".risiko");
    // Set the speech bubble arrow color to red
    const speechBubbleArrow = document.querySelector(".speech-bubble");

    // Check the content of the risk element
    if (riskElement.textContent.includes("Ingen risiko for forveksling")) {
      // If it contains "ingen risiko," set the background color to green
      riskElement.style.backgroundColor = "#46C34A";

      // Set the speech bubble arrow color to green
      speechBubbleArrow.style.borderTopColor = "#46C34A";
    } else {
      // Otherwise (if it doesn't contain "ingen risiko"), set the background color to red
      riskElement.style.backgroundColor = "red";
      speechBubbleArrow.style.borderTopColor = "red";
    }
    document.querySelector(".håndtering").textContent = product[0].håndtering;
    document.querySelector(".anvendelse").textContent = product[0].anvendelse;
    document.querySelector(".opbevaring").textContent = product[0].opbevaring;
    document.querySelector(".erstatningsmuligheder").textContent = product[0].erstatningsmuligheder;
    document.querySelector(".mund-text").textContent = product[0]["i munden"];
    document.querySelector(".næse-text").textContent = product[0]["i næsen"];
  }
});
