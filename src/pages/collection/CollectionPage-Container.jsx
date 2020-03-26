import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionLoading } from "../../redux/shop/shop-selector";
import WithSpinner from "./../../components/with-spinner/WithSpinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = state => ({
  isLoading: !selectIsCollectionLoading(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
