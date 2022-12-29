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

  result(rightAnswer) {
    document.querySelector(
      "#text"
    ).innerHTML = `4 Sorudan <span class="bg-orange-300 p-4 text-center">${rightAnswer} </span> Tanesine Doğru Cevap Verdiniz`;

    document.querySelector("#result").style.display = "flex";
  }
  startQuiz(divid, buttonid1, buttonid2, buttonid3, _counter) {
    let isFinish = false;
    let self = this;
    let rightAnswer = 0;
    let timer = 9;
    let counter = _counter;
    let divs = document.querySelectorAll(
      "#options-one,#options-two,#options-three"
    );
    document.querySelector("#time").innerHTML = timer;
    document.querySelector("#result").style.display = "none";

    divs.forEach((item) => {
      item.addEventListener("click", () => {
        if (counter < 4) {
          let answer = item.innerHTML;
          if (this.questions_._questions[counter][2] == answer) {
            rightAnswer += 1;
            timer = 9;
            counter += 1;
            if (counter == 4) {
              isFinish = true;
              this.result(rightAnswer);
              return;
            }
            document.getElementById(divid).innerHTML =
              self.questions_._questions[counter][0];
            document.getElementById(buttonid1).innerHTML =
              self.questions_._questions[counter][1].a;
            document.getElementById(buttonid2).innerHTML =
              self.questions_._questions[counter][1].b;
            document.getElementById(buttonid3).innerHTML =
              this.questions_._questions[counter][1].c;
          } else {
            timer = 9;
            counter += 1;
            if (counter == 4) {
              isFinish = true;
              this.result(rightAnswer);
              return;
            }
            document.getElementById(divid).innerHTML =
              self.questions_._questions[counter][0];
            document.getElementById(buttonid1).innerHTML =
              self.questions_._questions[counter][1].a;
            document.getElementById(buttonid2).innerHTML =
              self.questions_._questions[counter][1].b;
            document.getElementById(buttonid3).innerHTML =
              this.questions_._questions[counter][1].c;
            return;
          }
        } else {
          isFinish = true;
          clearInterval(setInt);
          this.result(rightAnswer);
          return;
        }
      });
    });
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
      if (isFinish) clearInterval(setInt);
      if (timer < 10) {
        timer -= 1;
        document.querySelector("#time").innerHTML = timer;
      }
      if (timer == 0) {
        timer = 9;
        document.querySelector("#time").innerHTML = timer;
        counter += 1;
        document.getElementById(divid).innerHTML =
          self.questions_._questions[counter][0];
        document.getElementById(buttonid1).innerHTML =
          self.questions_._questions[counter][1].a;
        document.getElementById(buttonid2).innerHTML =
          self.questions_._questions[counter][1].b;
        document.getElementById(buttonid3).innerHTML =
          this.questions_._questions[counter][1].c;
        if (timer == 9 && counter == 3) {
          timer = 9;
          document.querySelector("#time").innerHTML = timer;
          counter = 0;
          clearInterval(setInt);
          const setIntFinish = setInterval(() => {
            if (isFinish) clearInterval(setIntFinish);
            timer = timer - 1;
            document.querySelector("#time").innerHTML = timer;
            if (timer == 0) {
              clearInterval(setIntFinish);
              clearInterval(setInt);
              this.result(rightAnswer);
              return;
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
  "Mjollnir"
);
questions_.addQuestions(
  "Counter Strike Globel Oyununda AWP Silahi Sarjor Kapasitesi Nedir ? ",
  { a: "7", b: "5", c: "31" },
  "5"
);
questions_.addQuestions(
  "2022 Turkiye Survivor Yarismasini Kim Kazanmistir ?",
  { a: "Nisa", b: "Osman", c: "Messi" },
  "Nisa"
);

let quiz = new Quiz(questions_);
quiz.startQuiz("question", "options-one", "options-two", "options-three", 0);

document.getElementById("btn").addEventListener("click", () => {
  location.reload();
});

// -Doğru CevaplarAsagilardan Hangisi Turkiyenin Baskentidir ? Cevap:Ankara
// -Iskandinav Mitolojinde Thorun Cekicinin Adi Nedir ? Cevap:Mjollnir
// -Counter Strike Globel Oyununda AWP Silahi Sarjor Kapasitesi Nedir ? Cevap: 5
// -2022 Turkiye Survivor Yarismasini Kim Kazanmistir ? Cevap:Nisa
