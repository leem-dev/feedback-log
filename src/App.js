import { useState } from "react";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const commentHandler = (e) => {
    setComment(e.target.value);
  };
  const scoreHandler = (e) => {
    setScore(e.target.value);
  };
  const refresh = () => {
    setComment("");
    setScore("10");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor");
      console.log("Form was not submitted");
      refresh();
      return;
    }
    console.log("Form Submitted");
    refresh();
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <fieldset className="feedback-container">
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score: {score} ⭐</label>
            <br />
            <input
              className="range-input"
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={scoreHandler}
            />
          </div>
          <div className="Field">
            <label>Comment:</label>
            <br />
            <textarea
              className="textarea"
              value={comment}
              onChange={commentHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
