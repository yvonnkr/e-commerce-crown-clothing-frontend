import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop-selector";
import WithSpinner from "./../with-spinner/WithSpinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = state => ({
  isLoading: selectIsCollectionFetching(state)
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
