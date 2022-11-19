let delay = -0.2;
function createCard(date, day, games) {
  delay = delay + 0.2;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}
      <span>${day}</span> 
    </h2>
    <ul>${games}</ul>
    </div>
`
}

function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" title="${player1}">
    <strong>${hour}</strong> 
    <img src="./assets/icon-${player2}.svg" title="${player2}">
  </li>
  `
}

let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")

option1.onclick = clickOption1
option2.onclick = clickOption2

clickOption1()

function clickOption1(){
  delay = -0.2;
  option1.classList.add("active")
  option2.classList.remove("active")
    document.querySelector("#cards").innerHTML =
    createCard("20/11", "Domingo", createGame("Catar", "13:00", "Ecuador")) +
    createCard(
      "21/11",
      "Segunda",
      createGame("Inglaterra", "10:00", "Iran") +
        createGame("Senegal", "13:00", "Holanda") +
        createGame("Estados Unidos", "16:00", "País de Gales")
    ) +
    createCard(
      "22/11",
      "Terça",
      createGame("Argentina", "07:00", "Arábia Saudita") +
        createGame("Dinamarca", "10:00", "Tunísia") +
        createGame("México", "13:00", "Polônia") +
        createGame("França", "16:00", "Austrália")
    ) +
    createCard(
      "23/11",
      "Quarta",
      createGame("Marrocos", "07:00", "Croácia") +
        createGame("Alemanha", "10:00", "Japão") +
        createGame("Espanha", "13:00", "Costa Rica") +
        createGame("Bélgica", "16:00", "Canadá")
    ) +
    createCard(
      "24/11",
      "Quinta",
      createGame("Suíça", "07:00", "Camarões") +
        createGame("Uruguai", "10:00", "Coreia do Sul") +
        createGame("Portugal", "13:00", "Gana") +
        createGame("Brasil", "16:00", "Sérvia")
    ) +
    createCard(
      "25/11",
      "Sexta",
      createGame("País de Gales", "07:00", "Iran") +
        createGame("Catar", "10:00", "Senegal") +
        createGame("Holanda", "13:00", "Ecuador") +
        createGame("Inglaterra", "16:00", "Estados Unidos")
    ) +
    createCard(
      "26/11",
      "Sábado",
      createGame("Tunísia", "07:00", "Austrália") +
        createGame("Polônia", "10:00", "Arábia Saudita") +
        createGame("França", "13:00", "Dinamarca") +
        createGame("Argentina", "16:00", "México")
    ) +
    createCard(
      "27/11",
      "Domingo",
      createGame("Japão", "07:00", "Costa Rica") +
        createGame("Bélgica", "10:00", "Marrocos") +
        createGame("Croácia", "13:00", "Canadá") +
        createGame("Espanha", "16:00", "Alemanha")
    ) +
    createCard(
      "28/11",
      "Segunda",
      createGame("Camarões", "07:00", "Sérvia") +
        createGame("Coreia do Sul", "10:00", "Gana") +
        createGame("Brasil", "13:00", "Suíça") +
        createGame("Portugal", "16:00", "Uruguai")
    ) +
    createCard(
      "29/11",
      "Terça",
      createGame("Ecuador", "12:00", "Senegal") +
        createGame("Holanda", "12:00", "Catar") +
        createGame("Iran", "16:00", "Estados Unidos") +
        createGame("País de Gales", "16:00", "Inglaterra")
    ) +
    createCard(
      "30/11",
      "Quarta",
      createGame("Tunísia", "12:00", "França") +
        createGame("Austrália", "12:00", "Dinamarca") +
        createGame("Polônia", "16:00", "Argentina") +
        createGame("Arábia Saudita", "16:00", "México")
    ) +
    createCard(
      "01/12",
      "Quinta",
      createGame("Croácia", "12:00", "Bélgica") +
        createGame("Canadá", "12:00", "Marrocos") +
        createGame("Japão", "16:00", "Espanha") +
        createGame("Costa Rica", "16:00", "Alemanha")
    ) +
    createCard(
      "02/12",
      "Sexta",
      createGame("Coreia do Sul", "12:00", "Portugal") +
        createGame("Gana", "12:00", "Uruguai") +
        createGame("Sérvia", "16:00", "Suíça") +
        createGame("Camarões", "16:00", "Brasil")
    )
}
  function clickOption2(){
  delay = -0.2;
  option2.classList.add("active")
  option1.classList.remove("active")
  document.querySelector("#cards").innerHTML = 
    createCard("24/11","Quinta",
    createGame("Brasil", "16:00", "Sérvia")) + 
    createCard("28/11", "Segunda",
    createGame("Brasil", "13:00", "Suíça")) +
    createCard("02/12", "Sexta",
    createGame("Brasil", "16:00", "Camarões"))
  }

