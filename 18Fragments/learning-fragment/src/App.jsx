import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";

function App() {
  let FoodItems = ["Healthy Food", "Rice", "Dal", "Vegetable", "Roti", "Milk"];

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1><ErrorMessage items={FoodItems}></ErrorMessage>
      <Foodinput></Foodinput>
      <Fooditems items={FoodItems}></Fooditems>
    </Container>

     {/* <Container><p>Above is the list of healthy foods that we should eat </p>
    </Container> */}
    
    </>
     

  );
}

export default App;
