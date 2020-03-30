import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term); //this.props is passed from App.js
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onInputSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
