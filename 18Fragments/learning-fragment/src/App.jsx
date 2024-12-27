import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";

function App() {
  // let FoodItems = ["Healthy Food", "Rice", "Dal", "Vegetable", "Roti", "Milk"];

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [FoodItems, setFoodItems] = useState([
    "Salad",
    "Fruits",
    "Juice",
    "Water",
  ]);
  // console.log(`Current value of textState ${textToShow}`);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...FoodItems, newFoodItem];
      setFoodItems(newItems);

      // console.log('Food value entered  is' + newFoodItem)
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <Foodinput handleKeyDown={OnKeyDown}></Foodinput>
        <ErrorMessage items={FoodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}
        <Fooditems items={FoodItems}></Fooditems>
      </Container>

      {/* <Container><p>Above is the list of healthy foods that we should eat </p>
    </Container> */}
    </>
  );
}

export default App;
