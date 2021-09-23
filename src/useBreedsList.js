import { useState, useEffect } from "react";

const localCache = {};

const useBreedsList = function (animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (animal in localCache) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList(animal);
    }
    async function requestBreedList(animal) {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
};

export default useBreedsList;
