class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.isDissmissed = false;
  }

  getInfo() {
    return `Студент ${this.course}-ого курсу ${this.university} ${this.fullName}`;
  }

  get totalMark() {
    return this.marks;
  }

  set totalMark(newMarks) {
    if (typeof newMarks === "number" && Array.isArray(this.marks)) {
      this.marks = this.marks.concat(newMarks);
    }
  }

  getAverageMark() {
    return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
  }

  dismiss() {
    this.isDissmissed = true;
    this.copyMarks = [...this.marks];
    return (this.copyMarks = null);
  }

  recover() {
    this.isDissmissed = false;
    return this.marks;
  }
}

class BudgetSudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
    this.scholarShipAdvanced = 2200;
    this.scholarShipTypical = 1440;
    this.timer();
  }
  timer() {
    setInterval(() => {
      this.getScholarShip();
    }, 60000);
  }
  getScholarShip() {
    if (+this.getAverageMark().toFixed() === 5 && !this.isDissmissed) {
      console.log(
        `Ви отримали ${this.scholarShipAdvanced} грн. стипендії. Вітаємо!`
      );
      return `Шановний ${this.fullName}, Ваша стипендія складає:  ${this.scholarShipAdvanced} грн.`;
    } else if (+this.getAverageMark().toFixed() === 4 && !this.isDissmissed) {
      console.log(
        `Ви отримали ${this.scholarShipTypical} грн. стипендії. Вітаємо!`
      );
      return `Шановний ${this.fullName}, Ваша стипендія складає: ${this.scholarShipTypical} грн.`;
    } else if (this.isDissmissed || +this.getAverageMark().toFixed() < 4) {
      console.log(`Стипендія для Вас недоступна.`);
      return `Шановний ${this.fullName}, Ваша стипендія складає: 0 грн.`;
    }
  }
}

const student = new BudgetSudent(
  "Вищої Школи Психотерапії м. Одеса",
  1,
  "Остап Родоманський Бендер",
  [5, 4, 4, 5]
);

console.log(student.getInfo());
student.totalMark = 4;
console.log(student.getAverageMark());
console.log(student.dismiss());
console.log(student.recover());
console.log(student.getScholarShip());

const student2 = new BudgetSudent(
  "ЛНУ ім. І. Франка",
  3,
  "Лесик Степанович Фішка",
  [5, 5, 5, 5]
);

console.log(student2.getInfo());
student2.totalMark = 5;
console.log(student2.getAverageMark());
console.log(student2.dismiss());
console.log(student2.recover());
console.log(student2.getScholarShip());

const student3 = new BudgetSudent(
  "НУЛП",
  2,
  "Віктор Андрійович Тарасюк",
  [2, 1, 2, 3]
);

console.log(student3.getInfo());
student3.totalMark = 5;
console.log(student3.getAverageMark());
console.log(student3.dismiss());
console.log(student3.recover());
console.log(student3.getScholarShip());
