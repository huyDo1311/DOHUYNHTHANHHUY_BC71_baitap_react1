import React, { Component } from "react";
import Banner from "./SplitComponet/Banner";
import Item from "./SplitComponet/Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="pt-4">
            <div className="container px-lg-5">
                <Banner />
                <div className="d-flex">
                <Item />
                <Item />
                <Item />
                <Item />
                </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
