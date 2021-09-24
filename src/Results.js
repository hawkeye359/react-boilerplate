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
              animal={pet.type}
              breed={pet.breeds}
              key={pet.id}
              id={pet.id}
              description={pet.description}
              location={`${pet.contact.address.city} - ${pet.contact.address.state}`}
              images={pet.photos}
            />
          );
        })
      )}
    </div>
  );
}
