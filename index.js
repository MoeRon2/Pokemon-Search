// fetch = Function used for making HTTP requests to fetch resources.
//          (JSON style data, images, files)
//          Simplifies asynchronous data fetching in JS and 
//          used for interacting with APIs to retrieve and send
//          data asynchronously over the web.
//          fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/charizard")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Couldn not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.weight))
//     .catch(error => console.error(error))


const textBox = document.getElementById("textBox");
const searchButton = document.getElementById("searchButton")
const imageSection = document.getElementById("imageSection")



searchButton.addEventListener("click", () => {
    filePath = "https://pokeapi.co/api/v2/pokemon/"
    filePath += textBox.value.trim().toLowerCase();
    console.log(filePath);

    fetchData(filePath);
})



async function  fetchData(fileP) {
    try{
        const response = await fetch(fileP);
        if (!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const link = data.sprites["front_default"]
        imageSection.src = link
        imageSection.style.display = "block"
    }
    catch(error){
        console.error(error);
    }
    
}

document.addEventListener("keydown", (event) =>
    {
        if (event.key === "Enter"){
            searchButton.click()
        }
        // console.log(event.key);
    }
)