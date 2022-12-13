function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  // Palma de Mallorca
  let palmaDeMallorcaElement = document.querySelector("#palma-de-mallorca");
  if (palmaDeMallorcaElement) {
    let palmaDeMallorcaDateElement =
      palmaDeMallorcaElement.querySelector(".date");
    let palmaDeMallorcaTimeElement =
      palmaDeMallorcaElement.querySelector(".time");
    let palmaDeMallorcaTime = moment().tz("Europe/Madrid");

    palmaDeMallorcaDateElement.innerHTML =
      palmaDeMallorcaTime.format("MMMM Do YYYY");
    palmaDeMallorcaTimeElement.innerHTML = palmaDeMallorcaTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
  <div class="city-details">
          <div class="city-date">
            <h2>${cityName}</h2>
            <span class="date">${cityTime.format("MMMM Do YYYY")}</span>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/index.html" class="back-link" >back to homepage</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
