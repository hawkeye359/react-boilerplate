import { useState, useEffect, useContext } from "react";
import Results from "./Results";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "horse", "barnyard"];
const themes = ["orange", "purple", "black", "green"];
import useBreedsList from "./useBreedsList";
import ThemeContext from "./ThemeContext";
import client from "./petFinder";
import states from "./states";
import citiesFinder from "./cities";
function SearchParams() {
  const [location, setLocation] = useState("New York");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedsList(animal);
  const [theme, setTheme] = useContext(ThemeContext);
  const [page, setPage] = useState(1); //eslint-disable-line no-unused-vars
  const [cities, setCities] = useState([
    "New York",
    "Buffalo",
    "Rochester",
    "Yonkers",
    "Syracuse",
    "Albany",
    "New Rochelle",
    "Mount Vernon",
    "Schenectady",
    "Utica",
    "White Plains",
    "Hempstead",
    "Troy",
    "Niagara Falls",
    "Binghamton",
    "Freeport",
    "Valley Stream",
  ]);
  const [city, setCity] = useState("New York");
  useEffect(() => {
    fetchAnimals();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const cityres = citiesFinder(location);
    setCities(cityres);
  }, [location]);
  // function getCities() {
  //   const citiesReturned = citiesFinder(location);
  //   setCities(citiesReturned);
  // }
  async function fetchAnimals() {
    const query = {
      type: animal,
      breed: breed,
      location: `${city}, ${location}`,
    };
    const response = await client.animal.search(query);
    setPets(response.data.animals);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchAnimals();
        }}
      >
        <label htmlFor="location">
          Location
          <select
            id="input"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            onBlur={(e) => {
              setLocation(e.target.value);
            }}
          >
            {states.map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onBlur={(e) => {
              setCity(e.target.value);
            }}
          >
            <option />
            {cities.map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setBreed("");
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          breeds
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => {
              return (
                <option key={breed.name} value={breed.name}>
                  {breed.name}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="theme">
          <select
            id="theme"
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            {themes.map((color) => {
              return (
                <option key={color} value={color}>
                  {color}
                </option>
              );
            })}
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
