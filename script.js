errorBtns[0].addEventListener('click', () => {
  console.log('This is a console.log demo');
});

errorBtns[1].addEventListener('click', () => {
  console.error('This is a console.error demo');
});

errorBtns[2].addEventListener('click', () => {
  console.count('Count Button');
});

errorBtns[3].addEventListener('click', () => {
  console.warn('This is a console.warn demo');
});

errorBtns[4].addEventListener('click', () => {
  console.assert(false, 'This is a failed assertion!');
});

errorBtns[5].addEventListener('click', () => {
  console.clear();
});

errorBtns[6].addEventListener('click', () => {
  console.dir(document.body);
});

errorBtns[7].addEventListener('click', () => {
  console.dirxml(document.body);
});

errorBtns[8].addEventListener('click', () => {
  console.group('Group Start');
  console.log('Inside group');
});

errorBtns[9].addEventListener('click', () => {
  console.groupEnd();
});

errorBtns[10].addEventListener('click', () => {
  const data = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
  console.table(data);
});

errorBtns[11].addEventListener('click', () => {
  console.time('Timer');
});

errorBtns[12].addEventListener('click', () => {
  console.timeEnd('Timer');
});

errorBtns[13].addEventListener('click', () => {
  function a() { b(); }
  function b() { c(); }
  function c() { console.trace('Trace Example'); }
  a();
});

errorBtns[14].addEventListener('click', () => {
  // Trigger global error
  nonexistentFunction();
});
