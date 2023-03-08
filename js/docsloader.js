let file = document.querySelector(".input_file");
let input = document.querySelector(".input_value");

file.addEventListener("change", function(){
    input.textContent = this.files[0].name;
})