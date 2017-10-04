var zoekMenu = document.querySelector('.zoekmenu');
var zoekBalk = document.querySelector('.zoekContainer');
var zoekIcoon = document.querySelector('.zoekIcoon');
var menuWeg = document.querySelector('.menuweg');

zoekBalk.addEventListener("click", function(){
	zoekMenu.classList.remove("ingeklapt");
	zoekIcoon.classList.add("kruis");

});

zoekIcoon.addEventListener("click", function(){
	zoekMenu.classList.add("ingeklapt");
	zoekIcoon.classList.remove("kruis");
	
});

menuWeg.addEventListener("click", function(){
  zoekMenu.classList.add("ingeklapt");
  zoekIcoon.classList.remove("kruis");
  
});


const filters = document.querySelectorAll('#checkboxmenu input');
const resultsContainer = document.querySelector('#searchQueryContainer');

const results = [];

filters.forEach(el => el.addEventListener('change', updateResults));

function updateResults(e) {
  const value = e.target.name;
  const index = results.indexOf(value);
  
  // Als hij gechecked is.
  if (e.target.checked) {
    // Als die nog niet in de array zit, voeg em toe.
    if(index === -1) { 
      results.push(value);
    }
  } else {
      // Als die nog wel in de array zit, haal em weg.
  	if (index !== -1) {
      results.splice(index, 1);
    }
  }
  
  console.log(results);
	
  // Maak de resultaten leeg
  resultsContainer.innerHTML = '';
  
  results.sort();
  
  // Voeg alle resultaten toe
  results.forEach(result => {
    const span = 	document.createElement('span');
    span.textContent = result;
  	resultsContainer.appendChild(span);
    span.addEventListener('click', removeFilter);
  });
}

function removeFilter(e) {
	const value = e.target.textContent;
  const input = document.querySelector('#checkboxmenu input[name="'+value+'"]');
input.click();
}
