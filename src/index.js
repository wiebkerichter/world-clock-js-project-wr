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

updateTime();
setInterval(updateTime, 1000);
