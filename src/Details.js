import { Component } from "react";
import { withRouter } from "react-router-dom"; //eslint-disable-line import/named, import/namespace
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();

    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }
  adopt = () => {
    window.location = "http://bit.ly/pet-adopt";
  };

  toggle = () => {
    this.setState({ showModal: this.state.showModal ? false : true });
  };
  render() {
    const {
      animal,
      breed,
      city,
      images,
      state,
      description,
      name,
      showModal,
    } = this.state;
    if (this.state.loading) {
      return <h2>loading __-</h2>;
    }
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={() => {
                  console.log("nothingg");
                  this.toggle();
                }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h2>do you really wanna adopt that pet</h2>
              <div className="buttons"></div>
              <button onClick={this.adopt}>yes</button>
              <button onClick={this.toggle}>no</button>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
