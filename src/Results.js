import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>no pets found</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              key={pet.id}
              id={pet.id}
              description={pet.description}
              location={`${pet.city} - ${pet.state}`}
              images={pet.images}
            />
          );
        })
      )}
    </div>
  );
}
