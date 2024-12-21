document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/animals") // Adjust the URL to match your setup
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.querySelector(".card");
      const template = document.getElementById("card_animal").content;

      data.forEach((animal) => {
        const clone = template.cloneNode(true);

        clone.querySelector(".name").textContent = animal.name;
        clone.querySelector(
          ".species"
        ).textContent = `species: ${animal.species}`;
        clone.querySelector(".family").textContent = `family: ${animal.family}`;
        clone.querySelector(
          ".habitat"
        ).textContent = `habitat: ${animal.habitat}`;
        clone.querySelector(
          ".found"
        ).textContent = `place_of_found: ${animal.place_of_found}`;
        clone.querySelector(".diet").textContent = `diet: ${animal.diet}`;
        clone.querySelector(
          ".description"
        ).textContent = `description: ${animal.description}`;
        clone.querySelector(
          ".weight"
        ).textContent = `weight_kg: ${animal.weight_kg}`;
        clone.querySelector(
          ".height"
        ).textContent = `height_cm: ${animal.height_cm}`;
        clone.querySelector(".card_animal_photo img").src = animal.image;
        clone.querySelector(
          ".card_animal_photo img"
        ).alt = `A ${animal.species} named ${animal.name}`;

        cardContainer.appendChild(clone);
      });
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const careerLink = document.getElementById("career");
  const jobContainer = document.getElementById("jobContainer");

  careerLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    jobContainer.style.display = "block"; // Show the job container
  });
});

let close = document.getElementById("close");

close.addEventListener("click", () => {
  close.style.display = "none";
});

let career = document.getElementById("career");

career.addEventListener("click", () => {
  career.style.display = "block";
});
