import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const PollCreate = (props) => {
  const navigate = useNavigate();
  const [firstOptionText, setFirstOptionText] = useState("");
  const [secondOptionText, setSecondOptionText] = useState("");

  const handleFirstOptionChange = (e) => {
    const text = e.target.value;

    setFirstOptionText(text);
  };

  const handleSecondOptionChange = (e) => {
    const text = e.target.value;

    setSecondOptionText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.dispatch(handleAddQuestion(firstOptionText, secondOptionText));

    navigate("/");
  };

  return (
    <div>
      <h1>Would You Rather</h1>
      <h2>Create Your Own Poll</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>First Option</h3>
          <input
            placeholder="Option One"
            value={firstOptionText}
            onChange={handleFirstOptionChange}
            data-testid="option-one-input"
          />
        </div>
        <div>
          <h3>Second Option</h3>
          <input
            placeholder="Option Two"
            value={secondOptionText}
            onChange={handleSecondOptionChange}
            data-testid="option-two-input"
          />
        </div>
        <button
          type="submit"
          disabled={firstOptionText === "" || secondOptionText === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(PollCreate);
