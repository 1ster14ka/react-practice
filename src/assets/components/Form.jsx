const Form = ({ onAdd }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAdd({
      text: evt.target.elements.text.value,
      id: crypto.randomUUID(),
    });
    evt.currentTarget.reset();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
