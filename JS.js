const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

var slideIndex = 0;
        var slides = document.getElementsByTagName("img");
        var prev = document.querySelector(".prev");
        var next = document.querySelector(".next");

        function showSlide(index) {
            if (index < 0) {
                slideIndex = slides.length - 1;
            } else if (index >= slides.length) {
                slideIndex = 0;
            }

            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[slideIndex].style.display = "block";
        }

        function showPrev() {
            slideIndex--;
            showSlide(slideIndex);
        }

        function showNext() {
            slideIndex++;
            showSlide(slideIndex);
        }

        prev.addEventListener("click", showPrev);
        next.addEventListener("click", showNext);

        showSlide(slideIndex);
        