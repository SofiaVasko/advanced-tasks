class Student {
  constructor(course, university, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.studentMarks = [5, 4, 4, 5];
    this.isDissmissed = false;
    this.isRecovered = false;
  }
  getInfo() {
    return `Студент ${this.course}го курсу ${this.university} м. Одеса, ${this.fullName}`;
  }
  get marks() {
    return this.studentMarks;
  }

  set marks(val) {
    this.studentMarks.push(val);
  }

  getAverageMark() {
    const sum = this.marks.reduce((previous, current) => previous + current, 0);
    const averageMark = sum / this.marks.length;
    return averageMark;
  }

  dismiss() {
    if (!this.isDissmissed) {
      this.isDissmissed = true;
      return (this.studentMarks = null);
    }
  }

  recover() {
    if (!this.isRecovered) {
      this.isDissmissed = false;
      return (this.studentMarks = [5, 4, 4, 5, 5]);
    }
  }
}

let student1 = new Student(
  1,
  "Вищої Школи Психотерапії",
  "Остап Родоманський Бендер"
);

console.log(student1.getInfo());
console.log(student1.marks);
student1.marks = 5;
console.log(student1.marks);
console.log(student1.getAverageMark());
console.log("Ostap Bender is dismissed:", student1.dismiss());
console.log("Ostap Bender is recovered:", student1.recover());