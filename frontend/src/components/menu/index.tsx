import React, { useEffect } from "react";
import PropTypes from "prop-types";
/*Redux */
import { useDispatch, useSelector } from "react-redux";
import { foodAction } from "../../flux/actions/food/getFood.action";
import { FoodInterface } from "../../interfaces/food.interface";

import MenuItem from "./default/menuItem";
import SearchMenu from "./default/searchMenu";

function Menu() {
  const dispatch = useDispatch();
  const getFoodsDispatch = () => dispatch(foodAction());

  useEffect(() => {
    getFoodsDispatch();
  }, []);

  const state: any = useSelector((state) => state);
  const {
    food,
    foodError,
    foodLoanding,
  }: {
    food: FoodInterface[];
    foodError: any;
    foodLoanding: any;
  } = state.foodReducer;

  if (foodError) return <div>Error</div>;
  if (foodLoanding) return <div>Loanding...</div>;
  return (
    <div>
      <SearchMenu />
      <br />
      <div className="list-menu">
        {food &&
          food.map((menuFood: FoodInterface, i: number) => (
            <MenuItem
              key={i}
              foodName={menuFood.nameFood}
              price={menuFood.price}
              description={menuFood.description}
              typeFood={menuFood.typeFood}
              url={menuFood.url}
              id={menuFood.id}
              discounts={menuFood.discounts}
            />
          ))}
      </div>
    </div>
  );
}

Menu.propTypes = {};

export default Menu;
