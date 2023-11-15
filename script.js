let timeDateElement = document.getElementById("current-time");

function updateDateTime() {
    let currentDateTime = new Date();
    let options = {  year: 'numeric',weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);
    timeDateElement.innerHTML = formattedDateTime;
}

setInterval(updateDateTime, 1000);