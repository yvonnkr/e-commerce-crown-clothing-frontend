import React, { Component } from "react";

import MenuItem from "../menu-item/MenuItem";
import SECTION_DATA from "./sections.data";
import "./Directory.scss";

class Directory extends Component {
  state = {
    sections: SECTION_DATA
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
