const result = document.getElementById("result");
let value = 0;

function increase(){
    value++;
    result.textContent = value;
}

function decrease(){
    value--;
    result.textContent = value;
}

function reset(){
    value = 0;
    result.textContent = value;
}