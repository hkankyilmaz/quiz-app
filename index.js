class Question {
  constructor(question, options, answer) {
    this._question = question;
    this._options = options;
    this._answer = answer;
    this._questions = [];
  }

  get question() {
    return this._question;
  }

  set question(value) {
    this._question = value;
  }

  get options() {
    return this._options;
  }
  set options(value) {
    this._options = value;
  }

  get answer() {
    return this._answer;
  }
  set answer(value) {
    this._answer = value;
  }

  addQuestions(question, options, answer) {
    let arr = [question, options, answer];
    this._questions.push(arr);
  }
}

class Quiz {
  constructor(questions) {
    this._questions = questions;
  }

  get question() {
    return this._questions;
  }
  set question(value) {
    this._questions = value;
  }

  startQuiz(divid, buttonid1, buttonid2, buttonid3) {
    this._questions.map((question) => {
      async () => {
        await setTimeout(() => {
          document.getElementById(divid).innerHTML = question[0];
        }, 5000);
      };
    });
  }
}

let questions = new Question();

questions.addQuestions(
  "Asagilardan Hnagisi Turkiyenin Baskentidir ?",
  [({ a: "Yozgat" }, { b: "Batman" }, { c: "Ankara" })],
  "Ankara"
);
questions.addQuestions(
  "Iskandinav Mitolojinde Thorun Cekicinin Adi Nedir ?",
  [({ a: "Mjollnir" }, { b: "Mjolnir" }, { c: "Mjolnirr" })],
  "Ankara"
);
questions.addQuestions(
  "Counter Strike Globel Oyununda AWP Silahi Sarjor Kapasitesi Nedir ? ",
  [({ a: "7" }, { b: "5" }, { c: "31" })],
  "5"
);
questions.addQuestions(
  "2022 Turkiye Survivor Yarismasini Kim Kazanmistir",
  [({ a: "Nisa" }, { b: "Osman" }, { c: "Messi" })],
  "Nisa"
);

console.log(question1, questions);
