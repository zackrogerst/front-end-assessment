console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

//////////////////////////////////
const compliment = () => alert("You're smart")

let hero = document.getElementById("ducky");

hero.addEventListener("mouseover", compliment)