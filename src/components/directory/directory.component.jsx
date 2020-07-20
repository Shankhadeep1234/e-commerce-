import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "sneakers",
      },
      {
        title: "womens",
        imageUrl:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        size: "large",
        id: 4,
        linkUrl: "womens",
      },
      {
        title: "mens",
        imageUrl: "https://jooinn.com/images1280_/man-wearing-brown-coat-4.jpg",
        size: "large",
        id: 5,
        linkUrl: "mens",
      },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
