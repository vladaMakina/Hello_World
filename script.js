const button = document.getElementById("button")
console.log('button', button)
button.addEventListener('click', onClick)
function onClick() {
    document.getElementById("heading").innerHTML = "Hello World is clicked!";
}
