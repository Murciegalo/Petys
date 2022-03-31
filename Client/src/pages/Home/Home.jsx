import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPets } from '../../store/pets/pets.actions';
import FloatCover from '../../components/FloatCover/FloatCover';
import GiftBoxes from '../../components/GiftBoxes/GiftBoxes';
import Stories from '../../components/Storiess/Stories';
import AboutUs from '../../components/AboutUs/AboutUs';

const Home = ({ getAllPets }) => {
  useEffect(() => {
    console.log('USE_EFFECT_HOME');
    getAllPets();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <FloatCover />
      <GiftBoxes />
      <Stories />
      <AboutUs />
    </>
  );
};
Home.propTypes = {
  getAllPets: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  pets: state.pets,
});

export default connect(mapStateToProps, { getAllPets })(Home);
