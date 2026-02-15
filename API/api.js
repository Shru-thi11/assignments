const apiKey = "LIVDSRZULELA"; 
const searchBtn = document.getElementById('search-btn');
const gifContainer = document.getElementById('gif-container');

searchBtn.addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query) {
        fetchGifs(query);
    }
});

async function fetchGifs(query) {
    const url = `https://api.tenor.com/v1/search?q=${query}&key=${apiKey}&limit=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayGifs(data.results);
    } catch (error) {
        console.error("Failed to fetch GIFs", error);
    }
}

function displayGifs(gifs) {
   
    gifContainer.innerHTML = '';

    gifs.forEach(gif => {
        
        const gifUrl = gif.media[0].tinygif.url;
        
        const card = document.createElement('div');
        card.className = 'gif-card';
        card.innerHTML = `<img src="${gifUrl}" alt="${gif.content_description}">`;
        
        gifContainer.appendChild(card);
    });
}