import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("saveQuestion Test suite", () => {
  test("Success case", async () => {
    var result = await _saveQuestion({
      author: "sarahedo",
      optionOneText: "opt1",
      optionTwoText: "opt2",
    });
    expect(result.author).toEqual("sarahedo");
    expect(result.optionOne.text).toEqual("opt1");
    expect(result.optionTwo.text).toEqual("opt2");
  });

  test("Fail case", async () => {
    await expect(
      _saveQuestion({
        author: "sarahedo",
        optionTwoText: "opt2",
      }),
    ).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author",
    );
  });
});

describe("saveQuestionAnswer Test suite", () => {
  test("Success case", async () => {
    const result = await _saveQuestionAnswer({
      authedUser: "mtsamis",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionTwo",
    });
    expect(result).toEqual(true);
  });
});
