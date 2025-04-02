async function fetchPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1302`);
    const data = await response.json();
    return data;
}

fetchPokemon().then(data => {
    // Log the total count
    console.log(`Total Pokemon: ${data.results.length}`);
    
    // Create and log the Map
    const pokemon = new Map();
    data.results.forEach(result => {
        var id = result.url.split('/').filter(Boolean).pop();
        pokemon.set(id, {name: result.name, url: result.url});
    });
    
    // Log first 5 Pokemon in a cleaner format
    console.log('\nFirst 5 Pokemon:');
    let count = 0;
    pokemon.forEach(({name, url}, id) => {
        if (count < 5) {
            console.log(`${id} ${name}: ${url}`);
            count++;
        }
    });
});




