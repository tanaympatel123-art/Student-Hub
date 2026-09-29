const modal = document.getElementById("eventModal");

const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");

const modalDate = document.getElementById("modalDate");

const modalVenue = document.getElementById("modalVenue");

const modalCategory = document.getElementById("modalCategory");

const buttons = document.querySelectorAll(".view-details");


buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        modalTitle.textContent = button.dataset.title;

        modalDate.textContent = button.dataset.date;

        modalVenue.textContent = button.dataset.venue;

        modalCategory.textContent = button.dataset.category;

        modal.style.display = "block";

    });

});


closeModal.addEventListener("click", function() {

    modal.style.display = "none";

});


window.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});