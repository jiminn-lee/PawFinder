const nah = document.getElementById('nah');
const dogImage = document.getElementById('dogImage');

var genders = ['Male', 'Female', 'Neutered Male']
var ages = Array.from({ length: 10 - 1 + 1 }, (_, index) => 1 + index);
var weights = Array.from({ length: 60 - 30 + 1 }, (_, index) => 30 + index);
var sounds = ['Quiet', 'Moderate', 'Loud']
var sheddings = ['Low', 'Moderate', 'High']
var personalities = ["Playful", "Energetic", "Loyal", "Gentle", "Intelligent", "Affectionate", "Protective", "Independent", "Calm", "Curious", "Adventurous", "Sociable", "Stubborn", "Sweet-tempered", "Easygoing", "Alert", "Confident", "Spirited", "Companionable", "Agile", "Courageous", "Sensible", "Affable", "Devoted", "Quirky"];
var costs = Array.from({ length: 500 - 50 + 1 }, (_, index) => 50 + index);

function getRandom() {
    const randGender = Math.floor(Math.random() * genders.length)
    const randAge = Math.floor(Math.random() * ages.length)
    const randWeight = Math.floor(Math.random() * weights.length)
    const randSound = Math.floor(Math.random() * sounds.length)
    const randShedding = Math.floor(Math.random() * sheddings.length)
    const randPersonality = Math.floor(Math.random() * personalities.length)
    const randCost = Math.floor(Math.random() * costs.length)

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.message;
            dogImage.src = imageUrl;
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });

    document.getElementById('gender').innerText = 'Gender: ' + genders[randGender];
    document.getElementById('age').innerText = 'Age: ' + ages[randAge];
    document.getElementById('weight').innerText = 'Weight: ' + weights[randWeight] + ' lbs';
    document.getElementById('sound').innerText = 'Sound: ' + sounds[randSound];
    document.getElementById('shedding').innerText = 'Shedding: ' + sheddings[randShedding];
    document.getElementById('personality').innerText = 'Personality: ' + personalities[randPersonality];
    document.getElementById('cost').innerText = 'Cost: $' + costs[randCost];
}

nah.addEventListener('click', getRandom);
getRandom();

// Get the modal
var modal = document.getElementById("myPopup");

// Get the button that opens the modal
var btn = document.getElementById("adopt");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}