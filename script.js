const nah = document.getElementById('nah');
const dogImage = document.getElementById('dogImage');

// Function to fetch a random dog image from an API
function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.message;
            dogImage.src = imageUrl;
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

// Add a click event listener to the button
nah.addEventListener('click', getRandomDog);


// Generate a random dog image on page load
getRandomDog();
