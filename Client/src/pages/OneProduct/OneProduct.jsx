import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OneProductItem from '../../components/OneProductItem/OneProductItem';

const OneProduct = (pets) => {
  const { itemId } = useParams();
  const dom = pets.pets !== null && pets.pets.filter((el) => el._id === itemId);

  return <OneProductItem el={dom[0]} id={itemId} />;
};
OneProduct.propTypes = {
  pets: PropTypes.object,
};

const mapStateToProps = (state) => ({
  pets: state.pets.pets,
  loading: state.pets,
});

export default connect(mapStateToProps, {})(OneProduct);
