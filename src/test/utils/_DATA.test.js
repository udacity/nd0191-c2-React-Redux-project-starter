import { _saveQuestion, _saveQuestionAnswer} from "../../utils/_DATA";

describe("Save Question",()=>{
  it ("will return question if optionOneText, optionTwoText and author are found", async()=>{
    const q={
      optionOneText: "Would you rather 1.",
      optionTwoText: "Would you rather 2.",
      author: "author name",
    };
    var result=await _saveQuestion(q);
    expect(result.optionOne.text).toBe("Would you rather 1.");
    expect(result.optionTwo.text).toBe("Would you rather 2.");
    expect(result.author).toBe("author name");
  });

  it ("will display an error message if optionOneText is not found",async()=>{
    const q={
      optionTwoText: "Would you rather 2.",
      author: "author name",
    };
    await expect(_saveQuestion(q)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");

  });

  it ("will display an error message if optionOneText is not found", async()=>{
    const q={
      optionOneText: "Would you rather 1.",
      author: "author name",
    };
    await expect(_saveQuestion(q)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
  });

  it ("will display an error message if author is not found", async()=>{
    const q={
      optionTwoText:"Would you rather 1.",
      optionOneText:"Would you rather 2.",
    };
    await expect(_saveQuestion(q)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
  });
});

describe("Save question and answer",()=>{
  it("will return success with question object if optionOneText, optionTwoText and author are found", async()=>{
    const authedUser = "sarahedo";
    const qid = "am8ehyc8byjqgar0jgpub9";
    const answer = "optionOne";
    var result = await _saveQuestionAnswer({authedUser, qid, answer});
    expect(result).toBeTruthy();
  }); 

  it("will return error with error message if authedUser is not found and qid and answer are found",async()=>{
    
   
    await expect(_saveQuestionAnswer({authedUser:null, qid:"am8ehyc8byjqgar0jgpub9", answer:"optionOne"})).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("will return error with error message if qid is not found and authedUser and answer are found", async()=>{
    const authedUser = "sarahedo";
    const qid = null;
    const answer = "optionOne";
    await expect(_saveQuestionAnswer({authedUser, qid, answer})).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("will return error with error message if answer is not found and authedUser and qid are found", async()=>{
    const authedUser = "sarahedo";
    const qid = "am8ehyc8byjqgar0jgpub9";
    const answer = null;
    await expect(_saveQuestionAnswer({authedUser, qid, answer})).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});