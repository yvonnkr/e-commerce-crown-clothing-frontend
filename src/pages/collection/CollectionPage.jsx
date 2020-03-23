import React from "react";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "./../../redux/shop/shop-selector";
import "./CollectionPage.scss";

const CollectionPage = ({ match }) => {
  const collectionId = match.params.collectionId;
  const state = useSelector(state => state);
  const collection = selectCollection(collectionId)(state);

  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE </h2>
    </div>
  );
};

export default CollectionPage;
