function favColor() {
  alert("My favorite color is Red");
}

function favPlace() {
  alert("My favorite place is home");
}

function favRit() {
  alert("My favorite ritual is cutting vegetables");
}

document.getElementById("color").addEventListener("click", favColor);

document.getElementById("place").addEventListener("click", favPlace);

document.getElementById("ritual").addEventListener("click", favRit);
