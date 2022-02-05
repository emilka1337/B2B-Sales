let flkty = new Flickity('.main-carousel', {
    cellAlign: 'center',
    wrapAround: true,
    autoPlay: true,
    pageDots: false,
    // arrowShape: "x0: 18.88, x1: 20.8, y1: 33.25, x2: 34.41"
});

document.querySelector('#passVisibilityToggler').addEventListener("click", function(e) {
    e.preventDefault();
    let password = document.querySelector('.password>input');

    if (password.getAttribute("type") == "password") {
        password.setAttribute("type", "text")
    } else {
        password.setAttribute("type", "password")
    }
});

document.querySelector('#loginForm').addEventListener("submit", function(e) {
    e.preventDefault();
    // here's the code for form submission
});