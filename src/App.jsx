import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className="container mb-4">
        <div className="row">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
