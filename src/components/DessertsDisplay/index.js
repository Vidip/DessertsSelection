import React from "react";
import PropTypes from "prop-types";

const DessertsDisplay = (props) => {
  // Rendering List of Desserts
  var renderDesserts= props.dessertsLists.map((des) => {
    return <ul><li key={des.id}>{des.name}</li></ul>;
  });

  return (<div style={{ marginTop: `20%` }}>
    <h3>Dessert Items</h3>{renderDesserts}
  </div>);
};

export default DessertsDisplay;
