const slides = [

    {
        image: "../Assets/Images/Events/technical-workshop.jpg",
        title: "Technical Workshop",
        description: "A technical workshop for students to learn new technologies and practical skills."
    },

    {
        image: "../Assets/Images/Events/sports-day.jpg",
        title: "Sports Day",
        description: "An exciting day of sports activities and competitions for students."
    },

    {
        image: "../Assets/Images/Events/cultural-fest.jpg",
        title: "Cultural Fest",
        description: "A celebration of cultural performances, creativity and student activities."
    }

];


let currentSlide = 0;


const sliderImage = document.getElementById("sliderImage");

const sliderTitle = document.getElementById("sliderTitle");

const sliderDescription = document.getElementById("sliderDescription");

const previousButton = document.getElementById("prevSlide");

const nextButton = document.getElementById("nextSlide");


function showSlide(index) {

    if (index >= slides.length) {

        currentSlide = 0;

    }
    else if (index < 0) {

        currentSlide = slides.length - 1;

    }
    else {

        currentSlide = index;

    }


    sliderImage.src = slides[currentSlide].image;

    sliderImage.alt = slides[currentSlide].title;

    sliderTitle.textContent = slides[currentSlide].title;

    sliderDescription.textContent = slides[currentSlide].description;

}


previousButton.addEventListener("click", function() {

    showSlide(currentSlide - 1);

});


nextButton.addEventListener("click", function() {

    showSlide(currentSlide + 1);

});


showSlide(currentSlide);