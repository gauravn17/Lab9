// FORM HANDLER (from starter)
let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

// BUTTONS ARRAY
let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// START BUTTON FUNCTIONS

// 0 - Console Log
errorBtns[0].addEventListener('click', () => {
  console.log('This is a console.log demo');
});

// 1 - Console Error
errorBtns[1].addEventListener('click', () => {
  console.error('This is a console.error demo');
});

// 2 - Console Count
errorBtns[2].addEventListener('click', () => {
  console.count('Count Button');
});

// 3 - Console Warn
errorBtns[3].addEventListener('click', () => {
  console.warn('This is a console.warn demo');
});

// 4 - Console Assert
errorBtns[4].addEventListener('click', () => {
  console.assert(false, 'This is a failed assertion!');
});

// 5 - Console Clear
errorBtns[5].addEventListener('click', () => {
  console.clear();
});

// 6 - Console Dir
errorBtns[6].addEventListener('click', () => {
  console.dir(document.body);
});

// 7 - Console DirXML
errorBtns[7].addEventListener('click', () => {
  console.dirxml(document.body);
});

// 8 - Console Group Start
errorBtns[8].addEventListener('click', () => {
  console.group('Group Start');
  console.log('Inside group');
});

// 9 - Console Group End
errorBtns[9].addEventListener('click', () => {
  console.groupEnd();
});

// 10 - Console Table
errorBtns[10].addEventListener('click', () => {
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  console.table(data);
});

// 11 - Start Timer
errorBtns[11].addEventListener('click', () => {
  console.time('Timer');
});

// 12 - End Timer
errorBtns[12].addEventListener('click', () => {
  console.timeEnd('Timer');
});

// 13 - Console Trace
errorBtns[13].addEventListener('click', () => {
  function a() { b(); }
  function b() { c(); }
  function c() { console.trace('Trace Example'); }
  a();
});

// 14 - Trigger Global Error
errorBtns[14].addEventListener('click', () => {
  // This will trigger a ReferenceError
  nonexistentFunction();
});

// 15 - Try/Catch Demo
errorBtns[15].addEventListener('click', () => {
  try {
    let element = document.querySelector('#nonexistent');
    console.log(element.innerText);  // Will throw if element is null
  } catch (err) {
    console.error('Caught error in try/catch:', err);
  } finally {
    console.log('Finally block ran.');
  }
});

// 16 - Throw Custom Error
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyCustomError';
  }
}

errorBtns[16].addEventListener('click', () => {
  try {
    throw new MyCustomError('Custom error triggered from button');
  } catch (err) {
    console.error('Caught custom error:', err);
  }
});

// GLOBAL ERROR HANDLER (Step 5)

window.addEventListener('error', function (event) {
  console.log('Global error caught:', event.message);
});
