let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}
      <span>${day}</span> 
    </h2>
    <ul>${games}</ul>
    </div>
`
}

function createGame(hour) {
  return `
  <li>
    <img src="./assets/icon-england.svg" alt="England">
    <strong>${hour}</strong> 
    <img src="./assets/icon-iran.svg" alt="Iran">
  </li>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard("20/11", "Domingo", createGame("13:00")) +
  createCard("21/11", "Segunda", createGame("10:00") + createGame("13:00") + createGame("16:00")) +
  createCard("21/11","Segunda",createGame("10:00") + createGame("13:00") + createGame("16:00")
  )

