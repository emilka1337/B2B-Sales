document.querySelectorAll('.radio-label').forEach(label => {
    label.addEventListener("click", function() {
        document.querySelectorAll('.radio-label').forEach(label => {
            label.classList.remove("checked");
        })
        label.classList.add("checked");

        document.getElementsByName("userType").forEach(item => {
            item.setAttribute("checked", false);
        })

        let radio = document.querySelector(`#${label.getAttribute("for")}`);
        radio.setAttribute("checked", true);
    })
});

document.querySelector('#registerForm').addEventListener("submit", function(e) {
    e.preventDefault();
    // here's the code for form submission
});