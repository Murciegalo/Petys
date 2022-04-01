import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPets } from '../../store/pets/pets.actions';
import ShopItem from '../../components/ShopItem/ShopItem';
import { Cont, WrapperF, Link, WrapperS } from './Shop.styles';
import Spinner from '../../components/spinner/Spinner.component';

const Shop = ({ pets, loading, getAllPets }) => {
  useEffect(() => {
    getAllPets();
  }, [getAllPets]);

  const render = pets !== null && pets.map((el) => <ShopItem key={el.id} el={el} />);
  return (
    <Cont>
      <WrapperF>
        <Link>Lulu de Pomerania</Link>
        <Link>Shih Tzu</Link>
        <Link>Poodle</Link>
        <Link>Golden Retriever</Link>
        <Link>Yorkshire</Link>
        <Link>Husky Siberiano</Link>
        <Link>Buldogue francês</Link>
      </WrapperF>
      <WrapperS>{loading ? <Spinner /> : render}</WrapperS>
    </Cont>
  );
};
Shop.propTypes = {
  pets: PropTypes.object,
  loading: PropTypes.bool,
  getAllPets: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  pets: state.pets.pets,
  loading: state.pets.loading,
});

export default connect(mapStateToProps, { getAllPets })(Shop);
