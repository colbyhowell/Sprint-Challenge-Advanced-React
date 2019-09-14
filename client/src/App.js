import React from "react";
import "./App.css";
import DisplayData from "./components/displayData";
import NavBar from "./components/navButton";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    console.log("Component did mount");
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      .catch(err => console.log("Error:", err));
    console.log(this.state.players);
  }

  // componentDidUpdate() {
  //   fetch("http://localhost:5000/api/players")
  //     .then(res => res.json())
  //     .then(res => this.setState({ players: res }))
  //     .catch(err => console.log("Error:", err));
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="display-container">
          {this.state.players.map(players => (
            <DisplayData users={players} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
