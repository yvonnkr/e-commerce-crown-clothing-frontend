import React from "react";

import CustomButton from "./../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import "./CollectionItem.scss";

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;

  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">£{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
