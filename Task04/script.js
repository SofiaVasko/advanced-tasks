const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
let isGirl = [];
let isBoy = [];
let studentsPairs = [];
for (let i=0; i<students.length; i++) {
    if (students[i].endsWith("а")) {
    isGirl.push(students[i]);
} else if (!students[i].endsWith("а")) {
    isBoy.push(students[i]);
}
}
while (isBoy.length>0 && isGirl.length>0) {
    studentsPairs.push([isBoy.shift(), isGirl.shift()]);
}
return studentsPairs;
}

const themesForStudent = getPairs (students);
console.log("Got pairs of students: ", themesForStudent);

function getThemes(themesForStudent, themes) {
let studentThemes = [];
for (let i=0; i<themes.length; i++) {
let studentPairThemes = [themesForStudent[i][0], themesForStudent[i][1], themes[i]];
studentThemes.push(studentPairThemes);
}
return studentThemes;
}

const studentProject = getThemes(themesForStudent, themes)
console.log("Got theme of project of students: ",studentProject);

function getMarks(students, marks) {
let studentsMarks = [];
for (let i=0; i<students.length; i++) {
    studentsMarks.push([students[i], marks[i]]);
}
return studentsMarks;
}

console.log("Got marks of students: ",getMarks(students, marks));

function generalStudentResult(themesForStudent, studentProject) {
let generalStudentResult = [];
let correctResult;
for (let i=0; i<studentProject.length; i++) {
    let randomMarks = Math.floor (Math.random () * (6-1) + 1);
    correctResult = [themesForStudent[i][0],themesForStudent[i][1],studentProject[i][2], randomMarks];
    generalStudentResult.push(correctResult);
}
return generalStudentResult;
}

console.log("Got random marks of students for project work: ", generalStudentResult(themesForStudent, studentProject));
