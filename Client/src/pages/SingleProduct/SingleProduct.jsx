import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPet } from '../../store/pets/pets.actions';
import Spinner from '../../components/spinner/Spinner.component';

const SingleProduct = (pets, loading) => {
  const { itemId } = useParams();
  console.log('PETS', pets);
  // const dom = pets !== null && pets.filter((el) => el._id === itemId);

  return loading ? <Spinner /> : <div>HOLA</div>;
};
SingleProduct.propTypes = {
  pets: PropTypes.array,
  loading: PropTypes.bool,
  // getAPet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pets: state.pets.pets,
  loading: state.pets.loading,
});

export default connect(mapStateToProps, {})(SingleProduct);
