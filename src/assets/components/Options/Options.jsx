import s from "./Options.module.css";

const Options = ({ onClickFeedback, onClickReset, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      <div
        className={s.feedbackWrapper}
        onClick={(e) => {
          if (e.target.nodeName === "BUTTON") {
            onClickFeedback(e.target.textContent.toLowerCase());
          }
          return;
        }}
      >
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
      {totalFeedback ? <button onClick={onClickReset}>Reset</button> : null}
    </div>
  );
};

export default Options;
