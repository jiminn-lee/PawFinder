const nah = document.getElementById('nah');
const dogImage = document.getElementById('dogImage');

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

nah.addEventListener('click', getRandomDog);
getRandomDog();
