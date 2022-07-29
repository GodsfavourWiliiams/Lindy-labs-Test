import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import "./App.css";
import SearchInput from "./components/searchbar/SearchInput";
import debounce from "lodash.debounce";

const fetchData = async (query, cb) => {
  const res = await searchPokemon(query);
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 700);

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState("");

  const itemsPerPage = 24;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log("fetch error:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    debouncedFetchData(query, (res) => {
      if (!query) {
        return fetchPokemons();
      }

      setLoading(true);
      setNotFound(false);

      if (!res) {
        setNotFound(true);
      } else {
        setPokemons([res]);
        setPage(0);
        setTotalPages(1);
        setLoading(false);
      }
    });
  }, [query]);

  return (
    <div className="body">
      <Navbar />
      <SearchInput
        value={query}
        onChangeText={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
      {notFound ? (
        <h3 className="text-center">Search Query not found</h3>
      ) : (
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default App;
