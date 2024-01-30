 


document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const characterInfo = document.getElementById("character-info");
    const loading = document.getElementById("loading");
    characterInfo.style.border= "none";
    button.addEventListener("click", async () => {
      try {
        characterInfo.style.border= "solid";
        loading.style.display = "block";
        const characterId = Math.floor(Math.random() * 83) + 1;
         const response = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
        const data = await response.json();
        
        const character = data.result;
        characterInfo.innerHTML = `
          <h2>${character.properties.name}</h2>
          <p><strong>Height:</strong> ${character.properties.height} cm</p>
          <p><strong>Mass:</strong> ${character.properties.mass} kg</p>
          <p><strong>Gender:</strong> ${character.properties.gender}</p>
          <p><strong>Birth Year:</strong> ${character.properties.birth_year}</p>

          <p><strong>Homeworld:</strong> <span id="homeworld">${character.properties.homeworld}</span></p>
        `;
        getHomeworld(character.properties.homeworld);
        loading.style.display = "none";
      } catch (error) {
        console.error("Error:", error.message);
        characterInfo.innerHTML = "Failed to fetch character information. Please try again.</";
        loading.style.display = "none";
        
      }
    });
   
    
});

async function getHomeworld(homeworldUrl) {
    try {
      const response = await fetch(homeworldUrl);
      const data = await response.json();
      const homeworldSpan = document.getElementById("homeworld");
      homeworldSpan.textContent = data.result.properties.name;
    } catch (error) {
      console.error("Error fetching homeworld:", error);
    }
  }

  getHomeworld(homeworldUrl);