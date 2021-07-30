let modal = document.getElementById("myModal");
let resume = document.getElementById("resume");
let span = document.getElementsByClassName("close")[0];

resume.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}