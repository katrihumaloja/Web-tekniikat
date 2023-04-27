// Katri Humaloja

// Tulostetaan viesti sivulle
function addNote() {
    // Määritellään muuttujat
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let cardBody = document.querySelector(".card-body");
    let checkbox = document.getElementById("important");
    let currentDate = new Date().toLocaleDateString();

    // Sininen taustaväri viestille
    messageHtml = '<div class="alert alert-info';

    // Jos checkbox on valittu, viestin taustaväri on punainen
    if (checkbox.checked == true) {
        messageHtml += ' alert-danger';
    }

    // Tulostetaan päivä, nimi ja viesti sivulle
    messageHtml += '">' + '<strong>' + currentDate +  ' ' + name + '</strong>' + '<br>' + message + '</div>';
    cardBody.innerHTML = cardBody.innerHTML + messageHtml;
}