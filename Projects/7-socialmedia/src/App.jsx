import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
