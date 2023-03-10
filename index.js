const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Question the user
    let answer = window.prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)
    `);

    // Validate the answer
    if (answer === null) return;

    if (answer === "") {
      answer = undefined;
      alert("Write option number!");
      this.registerNewAnswer();
    }
    // Convert the input into a number
    answer = +answer;

    // Update the array of answers
    if (Number.isInteger(answer) && answer >= 0 && answer < 4) {
      this.answers[answer]++;
      this.displayResults("string");
      return;
    } else if (Number.isInteger(answer)) {
      alert("Write option number!");
      this.registerNewAnswer();
    }

    return;
  },

  displayResults(type) {
    if (type === "array") console.log(this.answers);
    if (type === "string") console.log(`Poll results are ${this.answers.join(", ")}`);
  },
};

const button = document.querySelector(".button");

button.addEventListener("click", poll.registerNewAnswer.bind(poll));

// Bonus
const testData1 = {
  answers: [5, 2, 3],
};
const testData2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call(testData1, "array");
poll.displayResults.call(testData2, "string");
