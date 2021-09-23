import { useState, useEffect, useContext } from "react";
import Results from "./Results";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "raptile"];
const themes = ["orange", "purple", "black", "green"];
import useBreedsList from "./useBreedsList";
import ThemeContext from "./ThemeContext";
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedsList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    fetchAnimals();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  async function fetchAnimals() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
    console.log(json);
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
          <input
            id="input"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Location"
          />
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
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
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
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
