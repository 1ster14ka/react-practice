import { useId, useState } from "react";

const LangSwitcher = () => {
  const [lang, setLang] = useState("ua");

  const selectId = useId();

  return (
    <div>
      <p>Select language: {lang}</p>
      <label htmlFor={selectId}>Choose language</label>
      <select
        name="language"
        id={selectId}
        value={lang}
        onChange={(evt) => setLang(evt.target.value)}
      >
        <option value="ua">Ukranian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
