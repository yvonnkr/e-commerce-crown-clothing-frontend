import React from "react";
import { useSelector } from "react-redux";

import { selectShopCollections } from "../../redux/shop/shop-selector";
import CollectionPreview from "./../collection-preview/CollectionPreview";
import "./CollectionOverview.scss";

const CollectionOverview = () => {
  const state = useSelector(state => state);
  const collections = selectShopCollections(state);

  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default CollectionOverview;
