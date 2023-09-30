/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./homeworks/Task01/t1.js":
/*!********************************!*\
  !*** ./homeworks/Task01/t1.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Result: () => (/* binding */ Result)\n/* harmony export */ });\nlet first_price = 15.678;\nlet second_price = 123.965;\nlet third_price = 90.2345;\nconsole.log(\"First: \", first_price);\nconsole.log(\"Second: \", second_price);\nconsole.log(\"Third: \", third_price);\nconsole.log(\"Max: \", Math.max(first_price, second_price, third_price), \"Min: \", Math.min(first_price, second_price, third_price));\nconsole.log(\"Sum: \", first_price + second_price + third_price);\nconsole.log(Math.floor(first_price), Math.floor(second_price), Math.floor(third_price));\nconsole.log(\"Without penny: \", Math.floor(first_price + second_price + third_price));\nfunction Result(val) {\n  return Math.floor(val / 100) * 100;\n}\nconsole.log(Result(229));\n\nconst result = Math.floor(first_price) + Math.floor(second_price) + Math.floor(third_price);\nconst type = Boolean(result % 2);\nconsole.log(type);\nconsole.log(\"Balance: \", first_price + second_price + third_price - 500);\nlet general_price = Number(((first_price + second_price + third_price) / 3).toFixed(2));\nconsole.log(\"General price: \", general_price);\n\n//# sourceURL=webpack://task14/./homeworks/Task01/t1.js?");

/***/ }),

/***/ "./homeworks/Task03/t3.js":
/*!********************************!*\
  !*** ./homeworks/Task03/t3.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findLetter: () => (/* binding */ findLetter)\n/* harmony export */ });\nfunction getMaxDigit(number) {\n  let numberToSplit = String(number).split('');\n  let numberElem;\n  numberElem = Math.max(...numberToSplit);\n  return Number(numberElem);\n}\nfunction findLetter(name) {\n  let bigLetter = name[0].toUpperCase();\n  let smallLetters = name.slice(1).toLowerCase();\n  return bigLetter + smallLetters;\n}\n\nfunction sum(tax1) {\n  let tax2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  let sum = arguments.length > 2 ? arguments[2] : undefined;\n  let taxCash = tax1 + tax2;\n  let sumCash = sum / 100 * taxCash;\n  let sumGeneral = sum - sumCash;\n  return sumGeneral;\n}\nfunction getRandomPassword() {\n  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;\n  let randomPassword = 0;\n  for (let i = 0; i < length; i++) {\n    randomPassword = randomPassword * 10 + Math.floor(Math.random() * 10);\n  }\n  return randomPassword;\n}\nfunction deleteLetters(name, element) {\n  let deleteElement = name.replace(new RegExp(element, \"g\"), \"\");\n  return deleteElement;\n}\nfunction convertCurrency(usd, uah) {\n  let usdCash = Number(usd.replace(\"$\", \"\"));\n  let uahCash = Number(uah.replace(\"UAH\", \"\"));\n  let usdCurrency;\n  let uahCurrency;\n  if (usd.endsWith('$')) {\n    usdCurrency = usdCash * 36.57;\n  } else {\n    console.log(\"Uncorrect currency. Only USD.\");\n  }\n  if (uah.endsWith('UAH')) {\n    uahCurrency = uahCash * 0.03;\n  } else {\n    console.log(\"Uncorrect currency. Only UAH.\");\n  }\n  return ['USD/UAH: ', usdCurrency, 'UAH/USD: ', uahCurrency];\n}\nconsole.log(getMaxDigit(123456789909876543));\nconsole.log(findLetter(\"gOOd MORNING, guys!\"));\nconsole.log(sum(18, 1.2, 25000));\nconsole.log(getRandomPassword(12));\nconsole.log(deleteLetters(\"Ішов Прокіп, кипів окріп, прийшов Прокіп — кипить окріп, як при Прокопі, так і при Прокопі і при Прокопенятах.\", \"к\"));\nconsole.log(convertCurrency(\"2000$\", \"2000UAH\"));\n\n//# sourceURL=webpack://task14/./homeworks/Task03/t3.js?");

/***/ }),

/***/ "./homeworks/Task04/t4.js":
/*!********************************!*\
  !*** ./homeworks/Task04/t4.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPairs: () => (/* binding */ getPairs)\n/* harmony export */ });\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\nconst marks = [4, 5, 5, 3, 4, 5];\nfunction getPairs(students) {\n  let isGirl = [];\n  let isBoy = [];\n  let studentsPairs = [];\n  for (let i = 0; i < students.length; i++) {\n    if (students[i].endsWith(\"а\")) {\n      isGirl.push(students[i]);\n    } else if (!students[i].endsWith(\"а\")) {\n      isBoy.push(students[i]);\n    }\n  }\n  while (isBoy.length > 0 && isGirl.length > 0) {\n    studentsPairs.push([isBoy.shift(), isGirl.shift()]);\n  }\n  return studentsPairs;\n}\n\nconst themesForStudent = getPairs(students);\nconsole.log(\"Got pairs of students: \", themesForStudent);\nfunction getThemes(themesForStudent, themes) {\n  let studentThemes = [];\n  for (let i = 0; i < themes.length; i++) {\n    let studentPairThemes = [themesForStudent[i][0], themesForStudent[i][1], themes[i]];\n    studentThemes.push(studentPairThemes);\n  }\n  return studentThemes;\n}\nconst studentProject = getThemes(themesForStudent, themes);\nconsole.log(\"Got theme of project of students: \", studentProject);\nfunction getMarks(students, marks) {\n  let studentsMarks = [];\n  for (let i = 0; i < students.length; i++) {\n    studentsMarks.push([students[i], marks[i]]);\n  }\n  return studentsMarks;\n}\nconsole.log(\"Got marks of students: \", getMarks(students, marks));\nfunction generalStudentResult(themesForStudent, studentProject) {\n  let generalStudentResult = [];\n  let correctResult;\n  for (let i = 0; i < studentProject.length; i++) {\n    let randomMarks = Math.floor(Math.random() * (6 - 1) + 1);\n    correctResult = [themesForStudent[i][0], themesForStudent[i][1], studentProject[i][2], randomMarks];\n    generalStudentResult.push(correctResult);\n  }\n  return generalStudentResult;\n}\nconsole.log(\"Got random marks of students for project work: \", generalStudentResult(themesForStudent, studentProject));\n\n//# sourceURL=webpack://task14/./homeworks/Task04/t4.js?");

/***/ }),

/***/ "./homeworks/Task05/t5.js":
/*!********************************!*\
  !*** ./homeworks/Task05/t5.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAverage: () => (/* binding */ getAverage)\n/* harmony export */ });\nfunction getModa(numbers) {\n  let result = numbers.sort(function (a, b) {\n    if (a < b) {\n      return -1;\n    }\n    if (a > b) {\n      return 1;\n    }\n    return 0;\n  });\n  let moda = [];\n  for (let i = 0; i < result.length; i++) {\n    if (Number.isInteger(result[i])) {\n      if (result[i] === result[i + 1]) {\n        moda.push(result[i]);\n      }\n    }\n  }\n  let modaAll = moda.filter(function (item, index) {\n    return moda.indexOf(item) === index;\n  });\n  if (moda.length === 0) {\n    return \"Our programm didn`t find a mode\";\n  }\n  return modaAll;\n}\nconsole.log(getModa([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));\nfunction getAverage(numbers) {\n  let averageResult = 0;\n  for (let i = 0; i < numbers.length; i++) {\n    if (Number.isInteger(numbers[i])) {\n      averageResult += numbers[i];\n    }\n  }\n  return averageResult / numbers.length;\n}\nconsole.log(getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));\n\nfunction getMedian(numbers) {\n  let result = numbers.sort(function (a, b) {\n    if (a < b) {\n      return -1;\n    }\n    if (a > b) {\n      return 1;\n    }\n    return 0;\n  });\n  let firstIndex = Math.floor((result.length - 1) / 2);\n  let secondIndex = Math.ceil((result.length - 1) / 2);\n  if (Number.isInteger(result[0]) && result.length % 2 === 0) {\n    let numberFirstValue = result[firstIndex];\n    let numberSecondValue = result[secondIndex];\n    let numberEven = (numberFirstValue + numberSecondValue) / 2;\n    return numberEven;\n  } else if (Number.isInteger(result[0]) && result.length % 2 !== 0) {\n    let numberNotEven = result[secondIndex];\n    return numberNotEven;\n  }\n}\nconsole.log(getMedian([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));\nfunction getDividedByFive(numbers) {\n  let fiveOnly = numbers.filter(function (item) {\n    let itemLast = item % 10;\n    return itemLast === 0 || itemLast === 5;\n  });\n  return fiveOnly;\n}\nconsole.log(getDividedByFive([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));\nfunction replaceBadWords(string) {\n  let toSplit = string.split(\" \");\n  let toReplace = toSplit.map(function (badWords) {\n    return badWords.replace(new RegExp('shit', 'g'), '****').replace(new RegExp('fuck', 'g'), '****');\n  });\n  return toReplace.join(\" \");\n}\nconsole.log(replaceBadWords(\"Holy shit! You are fucking.\"));\nfunction divideByThree(word) {\n  let stringThree = [];\n  for (let i = 0; i < word.length; i += 3) {\n    stringThree.push(word.substring(i, i + 3).toLowerCase().replace(new RegExp(' ', 'g'), ''));\n  }\n  return stringThree;\n}\nconsole.log(divideByThree(\"Commander\"));\n\n//# sourceURL=webpack://task14/./homeworks/Task05/t5.js?");

/***/ }),

/***/ "./homeworks/Task06/t6.js":
/*!********************************!*\
  !*** ./homeworks/Task06/t6.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSubjects: () => (/* binding */ getSubjects)\n/* harmony export */ });\nconst students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}];\nfunction getSubjects(students) {\n  const subjectToUpper = Object.keys(students.subjects).map(function (subject) {\n    return subject.replace(new RegExp(\"_\", \"g\"), \" \").split(\" \").map(function (word) {\n      return word.charAt(0).toUpperCase() + word.slice(1);\n    }).join(\" \");\n  });\n  return subjectToUpper;\n}\nconsole.log(getSubjects(students[1]));\n\nfunction getAverageMark(marks) {\n  const marksResult = Object.values(marks.subjects).map(function (item) {\n    let averageResult = item.reduce(function (total, mark) {\n      return total + mark;\n    }, 0) / item.length;\n    return averageResult;\n  });\n  let generalSum = marksResult.reduce(function (total, result) {\n    return total + result;\n  }, 0) / Object.keys(marks.subjects).length;\n  return generalSum.toFixed(2);\n}\nconsole.log(getAverageMark(students[2]));\nfunction getStudentInfo(inf) {\n  const course = inf.course;\n  const name = inf.name;\n  const resultMarks = getAverageMark(inf);\n  return {\n    course,\n    name,\n    averageMark: resultMarks\n  };\n}\nconsole.log(getStudentInfo(students[2]));\nfunction getStudentsNames(students) {\n  let nameStudents = students.map(function (student) {\n    return student.name;\n  });\n  let getNames = nameStudents.sort(function (a, b) {\n    if (a > b) {\n      return 1;\n    }\n    if (a < b) {\n      return -1;\n    }\n    return 0;\n  });\n  return getNames;\n}\nconsole.log(getStudentsNames(students));\nfunction getBestStudent(best) {\n  let bestStudent = 0;\n  let bestMarks = 0;\n  for (let i = 0; i < best.length; i++) {\n    let justMark = getAverageMark(best[i]);\n    if (justMark > bestMarks) {\n      bestMarks = justMark;\n      bestStudent = i;\n    }\n  }\n  return best[bestStudent].name;\n}\nconsole.log(getBestStudent(students));\nfunction calculateWordLetters(text) {\n  let calculateWord = text.split(\"\").reduce(function (acc, elem) {\n    acc[elem] = (acc[elem] || 0) + 1;\n    return acc;\n  }, {});\n  return calculateWord;\n}\nconsole.log(calculateWordLetters(\"тест\"));\n\n//# sourceURL=webpack://task14/./homeworks/Task06/t6.js?");

/***/ }),

/***/ "./homeworks/Task07/t7.js":
/*!********************************!*\
  !*** ./homeworks/Task07/t7.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTotalTaxes: () => (/* binding */ getTotalTaxes)\n/* harmony export */ });\nconst ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\nconst latvia = {\n  tax: 0.25,\n  middleSalary: 1586,\n  vacancies: 3921\n};\nconst litva = {\n  tax: 0.15,\n  middleSalary: 1509,\n  vacancies: 1114\n};\nfunction getMyTaxes(salary) {\n  return this.tax * salary;\n}\nconsole.log(getMyTaxes.call(ukraine, 5000));\nfunction getMiddleTaxes(country) {\n  return this.tax * this.middleSalary;\n}\nconsole.log(getMiddleTaxes.call(ukraine));\nfunction getTotalTaxes(country) {\n  return this.tax * this.middleSalary * this.vacancies;\n}\nconsole.log(getTotalTaxes.call(ukraine));\n\nfunction getMySalary(country) {\n  let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);\n  let taxes = this.tax * salary;\n  let profit = salary - taxes;\n  return {\n    salary,\n    taxes,\n    profit\n  };\n}\nsetInterval(function () {\n  console.log(getMySalary.call(ukraine));\n}, 10000);\n\n//# sourceURL=webpack://task14/./homeworks/Task07/t7.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _homeworks_Task01_t1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../homeworks/Task01/t1.js */ \"./homeworks/Task01/t1.js\");\n/* harmony import */ var _homeworks_Task03_t3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../homeworks/Task03/t3.js */ \"./homeworks/Task03/t3.js\");\n/* harmony import */ var _homeworks_Task04_t4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../homeworks/Task04/t4.js */ \"./homeworks/Task04/t4.js\");\n/* harmony import */ var _homeworks_Task05_t5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../homeworks/Task05/t5.js */ \"./homeworks/Task05/t5.js\");\n/* harmony import */ var _homeworks_Task06_t6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../homeworks/Task06/t6.js */ \"./homeworks/Task06/t6.js\");\n/* harmony import */ var _homeworks_Task07_t7_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../homeworks/Task07/t7.js */ \"./homeworks/Task07/t7.js\");\n\n\n\n\n\n\n\n(0,_homeworks_Task01_t1_js__WEBPACK_IMPORTED_MODULE_1__.Result)();\n(0,_homeworks_Task03_t3_js__WEBPACK_IMPORTED_MODULE_2__.findLetter)();\n(0,_homeworks_Task04_t4_js__WEBPACK_IMPORTED_MODULE_3__.getPairs)();\n(0,_homeworks_Task05_t5_js__WEBPACK_IMPORTED_MODULE_4__.getAverage)();\n(0,_homeworks_Task06_t6_js__WEBPACK_IMPORTED_MODULE_5__.getSubjects)();\n(0,_homeworks_Task07_t7_js__WEBPACK_IMPORTED_MODULE_6__.getTotalTaxes)();\n\n//# sourceURL=webpack://task14/./src/script.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-image: url(https://npr.brightspotcdn.com/dims4/default/88aa75e/2147483647/strip/true/crop/606x369+0+0/resize/880x536!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F0c%2F0a%2Ff536483840afa197f92a413d943e%2Fhank-williams-fest.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 100vh;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n}\n\ndiv {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\nh1 {\n  width: 40vw;\n  height: 10vh;\n  background-color: gray;\n  border: 2rem solid black;\n  color: orange;\n  font-size: 3em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task14/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://task14/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://task14/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://task14/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://task14/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://task14/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://task14/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://task14/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://task14/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://task14/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;