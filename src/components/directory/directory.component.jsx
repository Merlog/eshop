import React from "react";
import { connect } from "react-redux";
import { selectDirectorySelection } from "../../redux/directory/directory.selectors.js";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelection
});

export default connect(mapStateToProps)(Directory);
