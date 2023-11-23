import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = ({ dispatch }) => {
    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleFirstOptionChange = (e) => {
        const value = e.target.value;
        setFirstOption(value);
    };

    const handleSecondOptionChange = (e) => {
        const value = e.target.value;
        setSecondOption(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(firstOption, secondOption));
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <h3 className="font-weight-light text-center">Create Your Own Poll</h3>
            </div>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="form-group p-2">
                        <label htmlFor="firstOption" data-testid="firstOptionLabel">First Option</label>
                        <input className="form-control" required value={firstOption} onChange={handleFirstOptionChange} placeholder="Option One" type="text" name="firstOption" id="firstOption" data-testid="firstOption" />
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="secondOption" data-testid="secondOptionLabel">Second Option</label>
                        <input className="form-control" required placeholder="Option Two" value={secondOption} onChange={handleSecondOptionChange} type="text" name="secondOption" id="secondOption" data-testid="secondOption" />
                    </div>
                    <div className="text-center p-2">
                        <br></br>
                        <button type="submit" data-testid="submit-poll" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default connect()(NewPoll);
