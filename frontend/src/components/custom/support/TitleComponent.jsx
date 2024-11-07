import React from "react";
import PropTypes from "prop-types";

const TitleComponent = ({ title, color }) => {
  return <h1 style={{ color }}>{title}</h1>;
};

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TitleComponent;
