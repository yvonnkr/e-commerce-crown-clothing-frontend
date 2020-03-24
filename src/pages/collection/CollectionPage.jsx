import React from "react";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "./../../redux/shop/shop-selector";
import "./CollectionPage.scss";

const CollectionPage = ({ match }) => {
  const collectionId = match.params.collectionId;
  const state = useSelector(state => state);
  const collection = selectCollection(collectionId)(state);

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
