const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function getSubjects(students) {
  const subjectToUpper = Object.keys(students.subjects).map(function (subject) {
    return subject
      .replace(new RegExp("_", "g"), " ")
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
  return subjectToUpper;
}
console.log(getSubjects(students[1]));

function getAverageMark(marks) {
  const marksResult = Object.values(marks.subjects).map(function (item) {
    let averageResult =
      item.reduce(function (total, mark) {
        return total + mark;
      }, 0) / item.length;
    return averageResult;
  });
  let generalSum =
    marksResult.reduce(function (total, result) {
      return total + result;
    }, 0) / Object.keys(marks.subjects).length;
  return generalSum.toFixed(2);
}

console.log(getAverageMark(students[2]));

function getStudentInfo(inf) {
  const course = inf.course;
  const name = inf.name;
  const resultMarks = getAverageMark(inf);
  return {
    course,
    name,
    averageMark: resultMarks,
  };
}

console.log(getStudentInfo(students[2]));

function getStudentsNames(students) {
  let nameStudents = students.map(function (student) {
    return student.name;
  });
  let getNames = nameStudents.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  return getNames;
}

console.log(getStudentsNames(students));

function getBestStudent(best) {
  let bestStudent = 0;
  let bestMarks = 0;
  for (let i = 0; i < best.length; i++) {
    let justMark = getAverageMark(best[i]);
    if (justMark > bestMarks) {
      bestMarks = justMark;
      bestStudent = i;
    }
  }
  return best[bestStudent].name;
}

console.log(getBestStudent(students));

function calculateWordLetters(text) {
  let calculateWord = text.split("").reduce(function (acc, elem) {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});
  return calculateWord;
}

console.log(calculateWordLetters("тест"));
