import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";
import "./ShopPage.scss";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "./../../components/with-spinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      this.props.updateCollections(collectionsMap);

      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { updateCollections })(ShopPage);

// fetch(
//   "https://firestore.googleapis.com/v1/projects/crown-clothing-6f782/databases/(default)/documents/collections"
// )
//   .then(response => response.json())
//   .then(collections => console.log(collections));

// componentDidMount() {
//   const collectionRef = firestore.collection("collections");

//   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

//     this.props.updateCollections(collectionsMap);

//     this.setState({ loading: false });
//   });
// }
