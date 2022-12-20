// import logo from "./logo.svg";
import "./App.css";
import AfsosFetch from "./components/AfsosWalaFetch";
import ApiAxios from "./components/ApiAxios";
// import FetchApi from "./components/FetchApi";

function App() {
  return (
    <div className="App">
      {/* <FetchApi /> */}
      <AfsosFetch />
      <ApiAxios />
    </div>
  );
}

export default App;
