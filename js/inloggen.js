var loginLink = document.querySelector("[href='#login']");
var registreerLink = document.querySelector("[href='#registreer']");
var loginForm = document.querySelector(".login");
var registreerForm = document.querySelector(".registreer");

loginLink.addEventListener("click", function(){
	registreerForm.classList.add("hidden");
	loginForm.classList.remove("hidden");
	loginLink.parentNode.classList.add("active");
	registreerLink.parentNode.classList.remove("active");
});

registreerLink.addEventListener("click", function(){
	loginForm.classList.add("hidden");
	registreerForm.classList.remove("hidden");
	registreerLink.parentNode.classList.add("active");
	loginLink.parentNode.classList.remove("active");
});

var inputElements = document.querySelectorAll("input:not([type='checkbox'])");


inputElements.forEach(function(element) {
	element.addEventListener("keyup", moveLabel);
	element.addEventListener("change", moveLabel);
});

function moveLabel(event) {
	console.log(event.target.value);

	var labelNaam = event.target.getAttribute("id");
	var label = document.querySelector("[for='" + labelNaam + "']");

	// check of die leeg is anders laat em zien
	if (event.target.value == '') {
		label.classList.remove("active");
	} else {
		label.classList.add("active");
	}

} 

