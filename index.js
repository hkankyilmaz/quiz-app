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
    this.questions_ = questions;
  }

  get question() {
    return this._questions;
  }
  set question(value) {
    this._questions = value;
  }
  startQuiz(divid, buttonid1, buttonid2, buttonid3) {
    let self = this;
    let rightAnswer = 0;
    let timer = 9;
    let counter = 0;
    console.log(this.questions_._questions);
    if (counter == 0) {
      document.getElementById(divid).innerHTML =
        this.questions_._questions[0][0];
      document.getElementById(buttonid1).innerHTML =
        this.questions_._questions[0][1].a;
      document.getElementById(buttonid2).innerHTML =
        this.questions_._questions[0][1].b;
      document.getElementById(buttonid3).innerHTML =
        this.questions_._questions[0][1].c;
    }

    const setInt = setInterval(() => {
      console.log(timer);
      if (timer < 10) {
        console.log("1. blok calisti");
        timer = timer - 1;
      }
      if (timer == 0) {
        console.log("2. blok calisti");
        timer = 9;
        counter = counter + 1;
        document.getElementById(divid).innerHTML =
          self.questions_._questions[counter][0];
        document.getElementById(buttonid1).innerHTML =
          self.questions_._questions[counter][1].a;
        document.getElementById(buttonid2).innerHTML =
          self.questions_._questions[counter][1].b;
        document.getElementById(buttonid3).innerHTML =
          this.questions_._questions[counter][1].c;
        if (timer == 9 && counter == 2) {
          console.log("3. blok calisti");
          timer = 9;
          counter = 0;
          clearInterval(setInt);
          const setIntFinish = setInterval(() => {
            timer = timer - 1;
            console.log(timer);
            if (timer == 0) {
              clearInterval(setIntFinish);
              // result()
            }
          }, 1000);
        }
      }
    }, 1000);
  }
}

let questions_ = new Question();

questions_.addQuestions(
  "Asagilardan Hangisi Turkiyenin Baskentidir ?",
  { a: "Yozgat", b: "Batman", c: "Ankara" },
  "Ankara"
);
questions_.addQuestions(
  "Iskandinav Mitolojinde Thorun Cekicinin Adi Nedir ?",
  { a: "Mjollnir", b: "Mjolnir", c: "Mjolnirr" },
  "Ankara"
);
questions_.addQuestions(
  "Counter Strike Globel Oyununda AWP Silahi Sarjor Kapasitesi Nedir ? ",
  { a: "7", b: "5", c: "31" },
  "5"
);
questions_.addQuestions(
  "2022 Turkiye Survivor Yarismasini Kim Kazanmistir",
  [{ a: "Nisa", b: "Osman", c: "Messi" }],
  "Nisa"
);

console.log(questions_);

let quiz = new Quiz(questions_);
quiz.startQuiz("question", "options-one", "options-two", "options-three");
