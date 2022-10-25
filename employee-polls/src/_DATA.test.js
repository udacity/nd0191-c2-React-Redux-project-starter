import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("DATA Tests", () => {
  it("_saveQuestion should populate expected fields", async () => {
    const question = {
      optionOneText: "OptionOneText",
      optionTwoText: "OptionTwoText",
      author: "Test Author",
    };

    const result = await _saveQuestion(question);

    expect(result.id).toBeDefined();
    expect(result.timestamp).toBeDefined();
    expect(result.author).toBe(question.author);
    expect(result.optionOne.votes.length).toBe(0);
    expect(result.optionOne.text).toBe(question.optionOneText);
    expect(result.optionTwo.votes.length).toBe(0);
    expect(result.optionTwo.text).toBe(question.optionTwoText);
  });

  it("_saveQuestion should throw error with invalid input", async () => {
    expect.assertions(1);
    try {
      await _saveQuestion({ input: "invalid" });
    } catch (e) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e).toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    }
  });

  it("_saveQuestionAnswer should populate expected fields", async () => {
    const authedUser = "zoshikanlu";
    const qid = "6ni6ok3ym7mf1p33lnez";
    const answer = "optionOne";

    const result = await _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    });

    expect(result).toBeTruthy();
  });

  it("_saveQuestionAnswer should throw error with invalid input", async () => {
    expect.assertions(1);
    try {
      await _saveQuestionAnswer({});
    } catch (e) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e).toEqual("Please provide authedUser, qid, and answer");
    }
  });
});
