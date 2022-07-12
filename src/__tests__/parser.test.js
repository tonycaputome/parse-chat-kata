const { stepsMockData } = require("../lib/mock");
const { parseChat } = require("../lib/parser");

describe("Parse conversation function", () => {
  it("parseChat should be defined", function () {
    expect(parseChat).toBeDefined();
  });

  it("should accept one sentence", () => {
    const chat = stepsMockData[1];
    const result = [
      {
        date: "14:24:32",
        mention: "14:24:32 Customer : ",
        sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        type: "customer",
      },
    ];

    expect(parseChat(chat)).toEqual(result);
  });

  it("should accept two sentences", () => {
    const chat = stepsMockData[2];
    const result = [
      {
        date: "14:24:32",
        mention: "14:24:32 Customer : ",
        sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n",
        type: "customer",
      },
      {
        date: "14:26:15",
        mention: "14:26:15 Agent : ",
        sentence: "Aliquam non cursus erat, ut blandit lectus.",
        type: "agent",
      },
    ];
    expect(parseChat(chat)).toEqual(result);
  });

  it("should accept two customer mentions as start", () => {
    const chat = stepsMockData[3];
    const result = [
      {
        date: "14:24:32",
        mention: "14:24:32 Customer : ",
        sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n",
        type: "customer",
      },
      {
        date: "14:27:00",
        mention: "14:27:00 Customer : ",
        sentence:
          "Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n",
        type: "customer",
      },
      {
        date: "14:27:47",
        mention: "14:27:47 Agent : ",
        sentence: "Vestibulum tempor diam eu leo molestie eleifend.\n",
        type: "agent",
      },
      {
        date: "14:28:28",
        mention: "14:28:28 Customer : ",
        sentence:
          "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        type: "customer",
      },
    ];
    expect(parseChat(chat)).toEqual(result);
  });
});
