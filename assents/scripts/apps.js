document.addEventListener('DOMContentLoaded', () => {

    const myObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                entry.target.classList.remove("show");

            }

        });

    }, {

        threshold: 0.1 // Adjust this value to control when the animation triggers

    });

    const elements = document.querySelectorAll(".hidden");

    elements.forEach((element) => myObserver.observe(element));

});