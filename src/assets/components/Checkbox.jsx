import { useState } from "react";

const Checkbox = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };
  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          name="terms"
          id=""
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button disabled={!hasAccepted}>Proceed</button>
    </div>
  );
};

export default Checkbox;
