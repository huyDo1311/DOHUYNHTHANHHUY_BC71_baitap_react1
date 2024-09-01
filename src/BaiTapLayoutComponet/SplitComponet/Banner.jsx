import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="col-12">
        {/* <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        <div class="col-lg-12 col-xxl-12 mb-2">
          <div class="card bg-light border-0 h-100">
            <div class="card-body text-left p-4 p-lg-5 pt-0 pt-lg-0">
              
              <h1 class="mt-5 fs-1 fw-bold">Fresh new layout</h1>
              <p class="mt-3 mb-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus necessitatibus voluptatem officia, enim possimus autem impedit sit voluptates? Possimus fuga consequatur consectetur delectus laudantium recusandae amet doloribus at fugit? Possimus?
              </p>
              <button className="btn btn-primary mt-3">Call to Action!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
