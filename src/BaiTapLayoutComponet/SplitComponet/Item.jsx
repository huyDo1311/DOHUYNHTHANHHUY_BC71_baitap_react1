import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="p-2">
        <div className="card" style={{ width: "18rem" }}>
          <img style={{ width: "100%", height: "325px" }} src="" className="card-img-top" alt="" />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
      </div>
    );
  }
}
