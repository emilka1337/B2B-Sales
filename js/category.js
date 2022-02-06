document.querySelectorAll('.category-button').forEach(item => {
    item.addEventListener("click", function() {
        this.parentNode.children[1].classList.toggle("visible");
        this.classList.toggle("opened");
    });
});