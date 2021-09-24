import { Link } from "react-router-dom"; //eslint-disable-line import/named, import/namespace
const Pet = ({
  name = "null",
  breed = "null",
  animal = "null",
  location = "null",
  images,
  description = "null",
  id = "null",
}) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0].small;
  }
  return (
    <div>
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed.primary} — ${location}`}</h2>
        </div>
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default Pet;
