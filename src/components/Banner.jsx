import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-light text-start px-4 py-5 my-4">
          <h1>A Warm Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            consequuntur tempore eius, aspernatur sunt officia voluptate minima
            excepturi inventore suscipit rerum, nulla nobis repellat quis
            laboriosam sint recusandae repudiandae impedit?
          </p>
          <button className="btn btn-primary">Call to action!</button>
        </div>
      </div>
    );
  }
}
