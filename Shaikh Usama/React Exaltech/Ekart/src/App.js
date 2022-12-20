import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/HeaderSection/NavigationBar/NavigationBar";
import CustomCarousel from "./Components/HeaderSection/NavigationBar/CustomCarousel";
import Products from "./Components/BodySection/Products";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <br />
      <CustomCarousel />
      <br />
      <Products />
    </div>
  );
}

export default App;
