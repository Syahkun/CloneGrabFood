import React, { Component } from "react";

class eks extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["David", "Damien", "Sara", "Jane"];
    this.state = {
      suggestions: [],
      text: "",
    };
  }
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^$(value)`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="ml-auto">
        <input
          className="mx-auto"
          value={text}
          onChange={this.onTextChanged}
          type="text"
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default eks;
