document.querySelector('button').addEventListener("click", (e) => {
    e.preventDefault();
    translate();
});

var input = document.querySelector('#binary-input');
var result = document.querySelector('#binary-result');

function translate() {
    var x = parseInt(input.value, 2);
    result.value = x;
}