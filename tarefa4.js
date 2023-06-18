
const first_input = document.querySelector("#first");
const second_input = document.querySelector("#second");

const first_parity_output = document.querySelector("#first_parity");
const second_parity_output = document.querySelector("#second_parity");
const add_output = document.querySelector("#add");
const sub_output = document.querySelector("#sub");
const mul_output = document.querySelector("#mul");
const div_output = document.querySelector("#div");

function calculate () {
  first_value = Number(first_input.value);
  second_value = Number(second_input.value);

  first_parity_output.innerText = is_even(first_value) ? "par" : "impar";
  second_parity_output.innerText = is_even(second_value) ? "par" : "impar";

  add_output.innerText = add(first_value, second_value);
  sub_output.innerText = sub(first_value, second_value);
  mul_output.innerText = mul(first_value, second_value);
  div_output.innerText = div(first_value, second_value);
}


function is_even(a) {
    return a % 2 == 0;
}

function add(a, b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
    
    var x = document.querySelector("body")
    var y = document.querySelector("buttons")

function lightbutton() {
    x.classList.toggle("dark")
}