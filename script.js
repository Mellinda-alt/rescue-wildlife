
document.addEventListener('DOMContentLoaded', () => {
    const animalList = document.getElementById('animals');
    const searchInput = document.getElementById('search');
    const darkModeToggle = document.getElementById('toggle-mode');
    const animalDetails = document.getElementById('animal-deets');

    // Fetch data from db.json
    fetch('http://localhost:3000/animals')
        .then(response => response.json())
        .then(data => displayAnimals(data));
            // setupSearch(data.animals);
            

    // Display animals in the list
    function displayAnimals(animals) {
        animalList.innerHTML = '';
        animals.forEach(animal => {
            const li = document.createElement('li');
            li.textContent = animal.name;
            li.addEventListener('click', () => showAnimalDetails(animal));
            animalList.appendChild(li);
        });
    }

    // Show details of the selected animal
    function showAnimalDetails(animal) {
        animalDetails.querySelector('#name').textContent = `Name: ${animal.name}`;
        animalDetails.querySelector('#species').textContent = `Species: ${animal.species}`;
        animalDetails.querySelector('#family').textContent = `Family: ${animal.family}`;
        animalDetails.querySelector('#habitat').textContent = `Habitat: ${animal.habitat}`;
        animalDetails.querySelector('#place_of_found').textContent = `Place Found: ${animal.place_of_found}`;
        animalDetails.querySelector('#diet').textContent = `Diet: ${animal.diet}`;
        animalDetails.querySelector('#description').textContent = `Description: ${animal.description}`;
        animalDetails.querySelector('#weight_kg').textContent = `Weight: ${animal.weight_kg} kg`;
        animalDetails.querySelector('#height_cm').textContent = `Height: ${animal.height_cm} cm`;
        animalDetails.querySelector('#image').src = animal.image;
    }

    // Set up search functionality
    function setupSearch(animals) {
        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredAnimals = animals.filter(animal => animal.name.toLowerCase().includes(searchTerm));
            displayAnimals(filteredAnimals);
        });
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Additional event listener for "See More" button
    const seeMoreButton = document.getElementById('btn');
    seeMoreButton.addEventListener('click', () => {
        alert('More details about the selected animal will be displayed here.');
    });
});
