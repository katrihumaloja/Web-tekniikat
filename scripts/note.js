function addNote() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let cardBody = document.querySelector(".card-body");
    let checkbox = document.getElementById("important");
    let currentDate = new Date();
    let dateString = currentDate.toDateString();

    messageHtml = '<div class="alert alert-info';

    if (checkbox.checked == true) {
        messageHtml += ' alert-danger';
    }

    messageHtml += '">' + dateString +  ' ' + '<strong>' + name + '<br>' + message + '</div>';
    cardBody.innerHTML = cardBody.innerHTML + messageHtml;
}