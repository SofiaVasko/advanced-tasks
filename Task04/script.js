const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
  let women = [];
  let men = [];
  let pairs = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i][students[i].length - 1] == "а") {
      women.push(students[i]);
    } else {
      men.push(students[i]);
    }
  }

  let i = 0;
  while (i < students.length / 2) {
    pairs.push([men[i], women[i]]);
    i++;
  }
  return pairs;
}

console.log(getPairs(students));

const pair = getPairs(students);

function getThemes(pair, theme) {
  let getTheme = [];

  for (let i = 0; i < pair.length; i++) {
    getTheme.push([pair[i][0], pair[i][1], theme[i]]);
  }
  return getTheme;
}

console.log(getThemes(pair, themes));

function getMarks(students, marks) {
  let studentsMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsMarks.push([students[i], marks[i]]);
  }
  return studentsMarks;
}

console.log(getMarks(students, marks));

const pairAndThemes = getThemes(pair, themes);

function getProjectMark(pairTheme) {
  let projectResult = [];
  for (let i = 0; i < pairTheme.length; i++) {
    projectResult.push([
      pairTheme[i][0],
      pairTheme[i][1],
      pairTheme[i][2],
      Math.floor(Math.random() * (5 - 1 + 1) + 1),
    ]);
  }
  return projectResult;
}

console.log(getProjectMark(pairAndThemes));