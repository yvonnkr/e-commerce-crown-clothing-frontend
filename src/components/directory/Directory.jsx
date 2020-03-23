import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

const Directory = () => {
  const state = useSelector(state => state);
  const sections = selectDirectorySections(state);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
