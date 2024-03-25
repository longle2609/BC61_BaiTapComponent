import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="card">
          <figure className="figure">
            <svg
              className="bd-placeholder-img figure-img img-fluid rounded"
              width="400"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 400x300"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                400x300
              </text>
            </svg>
          </figure>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              hic?
            </p>
          </div>
          <div className="card-footer">
            <a href className="btn btn-primary">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
