import React, { Component } from "react";

class Eks2 extends Component {
  render() {
    return (
      <div>
        <input type="text" name="srch" id="srch" list="datalist1" />
        <datalist id="datalist1">
          <option value="Canada" />
          <option value="China" />
          <option value="Mexico" />
          <option value="United Kingdom" />
          <option value="United States of America" />
          <option value="Uruguay" />
        </datalist>
      </div>
    );
  }
}

export default Eks2;
