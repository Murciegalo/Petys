import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewItem from '../ReviewItem/ReviewItem';
const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.map((el) => (
        <ReviewItem key={el.id} el={el} />
      ))}
    </>
  );
};
Reviews.propTypes = {
  reviews: PropTypes.array,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
});

export default connect(mapStateToProps, {})(Reviews);
