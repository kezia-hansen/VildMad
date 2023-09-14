const urlParams = new URLSearchParams(window.location.search);
const url = "https://ebwnpfllzucpiixhtnhu.supabase.co/rest/v1/vildmad3?month=eq.";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVid25wZmxsenVjcGlpeGh0bmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MTIzMDEsImV4cCI6MjAwOTQ4ODMwMX0.CyZqh6CsJ8T2r-1KUO0oillkNqf7941nqLFY3jCnbSA";

const options = {
  method: "GET",
  headers: {
    apikey: key, // Use lowercase "apikey" here
  },
};

const season = urlParams.get("season");
const snavn = urlParams.get("navn");

document.querySelector("h2").textContent = snavn;

console.log(season);

fetch(url + season, options)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product.month);
  const template = document.querySelector("#smallproducttemplate").content;

  const copy = template.cloneNode(true);
  copy.querySelector("h3").textContent = product.title;
  copy.querySelector("img").src = product.profile_image;
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

  document.querySelector(".produktgrid").appendChild(copy);
}
