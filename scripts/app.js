function subscribeClicked() {
    alert();
}

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

function subscribeClicked() {
    modal.style.display = "block";
    // modal.classList.add('modalDisplay')

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    // modal.classList.remove('modalDisplay')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function subscribed() {
    modal.style.display = 'none';
}