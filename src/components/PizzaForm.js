import React, { useState } from "react";

function PizzaForm({id, topping, size, vegetarian}) {
  
  console.log("inside Pizza Form:", id, topping, size, vegetarian)

  const [vegetarianRadioChecked, setRadioChecked ] = useState(vegetarian)
  const [ formEdits, setFormEdits] = useState()

console.log("vegetarian:", vegetarian)


  function handleOnChange (e){
    console.log("handle change:", e.target.name, e.target.value)
    const updatedFormEdits = e.target.value
    setFormEdits(updatedFormEdits)
    handleRadioButtonValue(e)
    
  }

  function handleRadioButtonValue (e) {
    const updatedVegetarianRadioChecked = e.target.checked
    setRadioChecked(updatedVegetarianRadioChecked)
    

  }
  
console.log("radio checked:", vegetarianRadioChecked)

  return (
    <form onSubmit={null /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder={topping}
            onChange={handleOnChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" placeholder={size} onChange={handleOnChange}>
            <option value="default">{size}</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarianRadioChecked}
              onChange={handleOnChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegetarianRadioChecked}
              onChange={handleOnChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
