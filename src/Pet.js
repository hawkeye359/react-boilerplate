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
        <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200 h-full">
          <div className="relative w-full h-80 md:h-64 lg:h-44">
            <img
              src={hero}
              alt={name}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="px-3 py-4">
            <h3 className="text-sm text-gray-500 pb-2">
              <button
                className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                href="#"
              >
                <span className="absolute inset-0"></span>
                {animal}
              </button>
            </h3>
            <h2>Name - {name}</h2>
            <h2>Breed- {breed.primary}</h2>
            <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
              {description}
            </p>
            <h1>{name}</h1>
            <h2>Location- {location}</h2>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Pet;
