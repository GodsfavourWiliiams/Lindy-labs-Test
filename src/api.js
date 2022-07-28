export const BASE_URL = 'https://pokeapi.co/api/v2';


export const searchPokemon = async (query) => {
    if (query && query.length > 0) {
        /* replaces all whitespaces in the query with + symbol in order to 
        send it as a query param in the GET request */  
    const parsedQuery = query.replaceAll(' ', '+');
    try {
        const url = `${BASE_URL}/pokemon/${parsedQuery}`;
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}
else {
    return [];
    }
}

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}