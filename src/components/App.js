import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { image: [] };

  onSearchSubmit = async term => {
    const reponse = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );

    this.setState({ image: reponse.data.results }); //this 的指向问题需要用arrow function来确定
  };

  //Pass a prop into searchbar
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList image={this.state.image} />
      </div>
    );
  }
}

export default App;
