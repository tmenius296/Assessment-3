console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("RED ALERT: jk form submitted successfully");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const alertFunc = () => {
  alert("You are very deserving of compliments!");
};

document.getElementById("ducky").addEventListener("mouseover", alertFunc);
