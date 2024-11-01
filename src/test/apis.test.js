import { getInitialData } from "../utils/apis";

describe("getInitialData Test suite", () => {
  test("Success get data", async () => {
    const expectedValue = {
      questions: {
        "6ni6ok3ym7mf1p33lnez": {
          author: "mtsamis",
          id: "6ni6ok3ym7mf1p33lnez",
          optionOne: {
            text: "hire more frontend developers",
            votes: [],
          },
          optionTwo: {
            text: "hire more backend developers",
            votes: ["mtsamis", "sarahedo"],
          },
          timestamp: 1468479767190,
        },
        "8xf0y6ziyjabvozdd253nd": {
          author: "sarahedo",
          id: "8xf0y6ziyjabvozdd253nd",
          optionOne: {
            text: "Build our new application with Javascript",
            votes: ["sarahedo"],
          },
          optionTwo: {
            text: "Build our new application with Typescript",
            votes: [],
          },
          timestamp: 1467166872634,
        },
        am8ehyc8byjqgar0jgpub9: {
          author: "sarahedo",
          id: "am8ehyc8byjqgar0jgpub9",
          optionOne: {
            text: "conduct a release retrospective 1 week after a release",
            votes: [],
          },
          optionTwo: {
            text: "conduct release retrospectives quarterly",
            votes: ["sarahedo"],
          },
          timestamp: 1488579767190,
        },
        loxhs1bqm25b708cmbf3g: {
          author: "tylermcginnis",
          id: "loxhs1bqm25b708cmbf3g",
          optionOne: {
            text: "have code reviews conducted by peers",
            votes: [],
          },
          optionTwo: {
            text: "have code reviews conducted by managers",
            votes: ["sarahedo"],
          },
          timestamp: 1482579767190,
        },
        vthrdm985a262al8qx3do: {
          author: "tylermcginnis",
          id: "vthrdm985a262al8qx3do",
          optionOne: {
            text: "take a course on ReactJS",
            votes: ["tylermcginnis"],
          },
          optionTwo: {
            text: "take a course on unit testing with Jest",
            votes: ["mtsamis"],
          },
          timestamp: 1489579767190,
        },
        xj352vofupe1dqz9emx13r: {
          author: "mtsamis",
          id: "xj352vofupe1dqz9emx13r",
          optionOne: {
            text: "deploy to production once every two weeks",
            votes: ["mtsamis", "zoshikanlu"],
          },
          optionTwo: {
            text: "deploy to production once every month",
            votes: ["tylermcginnis"],
          },
          timestamp: 1493579767190,
        },
      },
      users: {
        mtsamis: {
          answers: {
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            vthrdm985a262al8qx3do: "optionTwo",
            xj352vofupe1dqz9emx13r: "optionOne",
          },
          avatarURL: null,
          id: "mtsamis",
          image: "https://robohash.org/81Y.png?set=set3",
          name: "Mike Tsamis",
          password: "xyz123",
          questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
        },
        sarahedo: {
          answers: {
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          avatarURL: null,
          id: "sarahedo",
          image: "https://robohash.org/7KG.png?set=set1",
          name: "Sarah Edo",
          password: "password123",
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
        tylermcginnis: {
          answers: {
            vthrdm985a262al8qx3do: "optionOne",
            xj352vofupe1dqz9emx13r: "optionTwo",
          },
          avatarURL: null,
          id: "tylermcginnis",
          image: "https://robohash.org/WCW.png?set=set2",
          name: "Tyler McGinnis",
          password: "abc321",
          questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
        },
        zoshikanlu: {
          answers: {
            xj352vofupe1dqz9emx13r: "optionOne",
          },
          avatarURL: null,
          id: "zoshikanlu",
          image: "https://robohash.org/2KS.png?set=set3",
          name: "Zenobia Oshikanlu",
          password: "pass246",
          questions: [],
        },
      },
    };
    const result = await getInitialData();
    expect(result).toEqual(expectedValue);
  });
});
