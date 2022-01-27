import React, { useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [ pizzaList, setPizzaList ] = useState([])
  const [ editPizza, setEditPizza ] = useState([])
  const [ formInputs, setFormInputs] = useState({
    "id": editPizza.id,
    "topping": editPizza.topping,
    "size": editPizza.size,
    "vegetarian": editPizza.vegetarian
  })

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((r) => r.json())
    .then((pizza) => setPizzaList(pizza))
  }, [])

  function handleDetailsToForm (selectedPizza) {
    setEditPizza(selectedPizza)
    setFormInputs(selectedPizza)

  }
  console.log("pizza to edit:", editPizza)
  
  return (
    <>
      <Header />
      <PizzaForm onMoveDetailsToForm={handleDetailsToForm} {...formInputs} />
      <PizzaList pizzaList={pizzaList} onMoveDetailsToForm={handleDetailsToForm} />
    </>
  );
}

export default App;
