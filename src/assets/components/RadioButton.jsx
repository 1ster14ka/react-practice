import { useState } from "react";

const RadioButton = () => {
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const handleChangeSize = (evt) => {
    setCoffeeSize(evt.target.value);
  };
  return (
    <div>
      <h2>Select coffe size</h2>
      <label>
        Small
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleChangeSize}
        />
      </label>
      <label>
        Medium
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleChangeSize}
        />
      </label>
      <label htmlFor="">
        Large
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleChangeSize}
        />
      </label>
    </div>
  );
};

export default RadioButton;
