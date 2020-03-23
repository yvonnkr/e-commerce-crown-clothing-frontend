import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import "./ShopPage.scss";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(collection => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
