import React from "react";
import PropTypes, { InferProps } from "prop-types";

import { Button } from "@material-ui/core";
import Card from "../../card";
function MenuItem({
  id,
  foodName,
  description,
  discounts,
  price,
  typeFood,
  url,
}: InferProps<typeof MenuItem.propTypes>) {
  console.log(url);
  return (
    <Card>
      <div className="menu">
        <div className="menu-image">
          <img src={url} alt={foodName} />
        </div>
        <div className="menu-description">
          <h3>{foodName} </h3>
          <p>{description}</p>
        </div>
        <div className="menu-actions">
          <span>${price}</span>
          <Button variant="contained" type="button" color="primary">
            Buy
          </Button>
        </div>
      </div>
    </Card>
  );
}

MenuItem.propTypes = {
  id: PropTypes.number,
  foodName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  discounts: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  typeFood: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuItem;
