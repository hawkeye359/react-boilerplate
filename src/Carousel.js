import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img alt="animal" src={images[active]} />
        <div className="carousel-smaller">
          {images.map((image, index) => {
            return (
              //eslint-disable-next-line
              <img
                alt="animal"
                key={image}
                src={images[index]}
                data-index={index}
                className={index === active ? "active" : ""}
                onClick={(e) => {
                  this.setState({ active: +e.target.dataset.index });
                  console.log(e);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
