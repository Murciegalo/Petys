import Nav from "./components/Nav/Nav";
import FloatCover from "./components/FloatCover/FloatCover";
import GiftBoxes from "./components/GiftBoxes/GiftBoxes";
import Stories from "./components/Storiess/Stories";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <FloatCover />
      <GiftBoxes />
      <Stories />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
