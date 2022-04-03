import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../components/spinner/Spinner.component';
import { getAllReviews } from '../../store/reviews/reviews.actions';
import Reviews from '../Reviews/Reviews';

const OneProductItem = ({ el, id, loading, getAllReviews }) => {
  useEffect(() => {
    getAllReviews(id);
  }, [id]);

  const dom = loading ? <Spinner /> : <Reviews />;

  return (
    <>
      OneProductItem
      {dom}
    </>
  );
};
OneProductItem.propTypes = {
  el: PropTypes.object,
  id: PropTypes.string,
  getAllReviews: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.reviews.reviews,
});

export default connect(mapStateToProps, { getAllReviews })(OneProductItem);
