import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaList, onMoveDetailsToForm}) {


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaList.map(pizza => 
          <Pizza
            key={pizza.id}
            pizza={pizza}
            onMoveDetailsToForm={onMoveDetailsToForm}
          />)}
      </tbody>
    </table>
  );
}

export default PizzaList;
