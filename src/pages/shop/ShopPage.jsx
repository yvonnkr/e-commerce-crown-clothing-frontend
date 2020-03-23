import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import { selectShopCollections } from "../../redux/shop/shop-selector";
import "./ShopPage.scss";

const ShopPage = () => {
  const state = useSelector(state => state);
  const collections = selectShopCollections(state);

  return (
    <div className="shop-page">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default ShopPage;
