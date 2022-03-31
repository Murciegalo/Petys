import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPet } from '../../store/pets/pets.actions';
import { Cont } from './ProductSpecs.styles';

const ShopItem = ({ pet, getPet }) => {
  let { itemId } = useParams();
  useEffect(() => {
    getPet(itemId);
  }, [itemId]);

  return <Cont>ShopItem</Cont>;
};

ShopItem.propTypes = {
  getPet: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  pet: state.pets.pet,
});
export default connect(mapStateToProps, { getPet })(ShopItem);
