//Redirect to popup

const changer = document.querySelector(".changer");
let input = changer.querySelector("input");
let button = changer.querySelector("button");



button.onclick = () => {
    console.log(input.value);
    if (input.value != '') {
        if (!input.value.includes(" ")) {
            var a = document.createElement('a');
            a.href = "#changerpopup";
            a.click();
        }
        else{
            alert("Введите номер удостоверения без пробелов!");
        }
    }
    else {
        alert("Введите номер удостоверения!");
    }
}