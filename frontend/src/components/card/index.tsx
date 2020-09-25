import React from "react";
import PropTypes, { InferProps } from "prop-types";

function Card({ children }: InferProps<typeof Card.propTypes>) {
  return <div className="card-form">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
