import "./App.css";
// import { NavBar } from "./components/NavBar";
// import { Carousel } from "./components/Carousel";
// import { Courses } from "./components/Courses";
// import { Footer } from "./components/Footer";
// import Hello from "./components/Hello";
import Counter from "./components/Counter";

// Imports Ends Here
function App() {
  // const data = {
  //   home: "Home",
  //   About: "About",
  //   contact: "Contact",
  //   html: "Html",
  //   css: "CSS",
  //   javascript: "JAVASCRIPT",
  //   react: "React",
  // };
  return (
    <div className="App">
      {/* <NavBar home={data.home} About={data.About} contact={data.contact} />
      <Carousel />
      <Courses
        html={data.html}
        css={data.css}
        javascript={data.javascript}
        react={data.react}
      />
      <Footer />
      <Hello /> */}
      <Counter />
    </div>
  );
}

export default App;
