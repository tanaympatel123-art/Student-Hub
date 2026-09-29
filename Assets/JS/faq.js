const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = question.nextElementSibling;

        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }

    });

});