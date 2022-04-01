import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../components/spinner/Spinner.component';
import OneProductItem from '../../components/OneProductItem/OneProductItem';
// import { getPet } from '../../store/pets/pets.actions';

const OneProduct = (pets, loading) => {
  const { itemId } = useParams();
  const dom = pets.pets !== null && pets.pets.filter((el) => el._id === itemId);
  console.log(loading);
  return loading ? <Spinner /> : <OneProductItem el={dom[0]} />;
};
OneProduct.propTypes = {
  pets: PropTypes.array,
  loading: PropTypes.bool,
  // getAPet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pets: state.pets.pets,
  loading: state.pets,
});

export default connect(mapStateToProps, {})(OneProduct);
