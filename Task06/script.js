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

function getSubjectStudents(students) {
  let subjects = Object.keys(students.subjects).map((item) => {
    let modifier = item.replace("_", " ");
    let result = modifier[0].toUpperCase() + modifier.slice(1, item.length);
    if (result.match("science")) {
      return result.replace("science", "Science");
    }
    return result;
  });
  return subjects;
}

console.log(getSubjectStudents(students[0]));

function getAverageMarks(students) {
  let marks = Object.values(students.subjects);
  let generalMarks = marks[0].concat(marks[1], marks[2]);
  let average =
    generalMarks.reduce((acc, item) => acc + item) / generalMarks.length;

  return average.toFixed(2);
}

console.log(getAverageMarks(students[2]));

const averageMarks = getAverageMarks(students[2]);

function getStudentInfo(students, marks) {
  return {
    name: students["name"],
    course: students["course"],
    averageMark: marks,
  };
}

console.log(getStudentInfo(students[2], averageMarks));

function getStudentNames(students) {
  return [students[0].name]
    .concat(students[1].name, students[2].name)
    .sort((a, b) => a.localeCompare(b));
}

console.log(getStudentNames(students));

students[0]["averageMark"] = Number(getAverageMarks(students[0]));
students[1]["averageMark"] = Number(getAverageMarks(students[1]));
students[2]["averageMark"] = Number(getAverageMarks(students[2]));

function getBestStudent(students) {
  let studentsNames = [students[0].name].concat(
    students[1].name,
    students[2].name
  );
  let studentMarks = [students[0].averageMark].concat(
    students[1].averageMark,
    students[2].averageMark
  );
  let bestMarks = Math.max(...studentMarks);

  for (let i = 0; i < studentMarks.length; i++) {
    if (bestMarks === studentMarks[i]) return studentsNames[i];
  }
}

console.log(getBestStudent(students));

function calculateWordLetters(words) {
  let word = words.split("");
  let frequency = {};
  word.forEach((item) => {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  });
  return frequency;
}

console.log(calculateWordLetters("тест"));

function getModa(numbers) {
  let frequency = {};
  numbers.forEach((item) => {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  });
  let allItems = Object.values(frequency);
  let maxItem = Math.max(...allItems);

  for (let item in frequency) {
    if (maxItem === frequency[item]) return Number(item);
  }
}

console.log(
  getModa([
    6, 2, 55, 11, 78, 2, 55, 77, 57, 55, 55, 55, 55, 56, 87, 23, 2, 56, 3, 2,
  ])
);

function deleteDuplicateLetters(word) {
  //the classic way
  let array = word.toLowerCase().replace(new RegExp(/\s+/, "g"), "").split("");
  let frequency = {};

  array.forEach((item) => {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  });

  let deleteLetters = [];

  for (let item in frequency) {
    if (frequency[item] > 1) {
      continue;
    } else {
      deleteLetters.push(item);
    }
  }
  return deleteLetters;
}

console.log(deleteDuplicateLetters("Бісквіт був дуже ніжним"));

function deleteSingleLetters(word) {
  //the modern way
  let array = word.toLowerCase().replace(new RegExp(/\s+/, "g"), "").split("");
  let frequency = {};

  array.forEach((item) => {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  });

  let deleteLetters = [];

  Object.entries(frequency).forEach(([item, count]) => {
    if (count > 1) {
      deleteLetters.push(item);
    }
  });

  return deleteLetters;
}

console.log(deleteSingleLetters("Бісквіт був дуже ніжним"));
