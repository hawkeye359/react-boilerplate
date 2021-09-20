import ReactDOM from "react-dom";
import Pet from "./Pet";



const App = () => {
  return (
    <div>
      <h1> Adopt Me !</h1>
      <Pet name="luna" animal="dog" breed="havanese" />
      <Pet name="pepper" animal="bird" breed="cockatiel" />
      <Pet name="Beam" animal="dog" breed="wheaten tarrier" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
