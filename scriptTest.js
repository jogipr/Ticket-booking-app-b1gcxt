function handleClick1() {
  setTimeout(() => console.log('#1 first timeout'), 2000);

  Promise.resolve().then(() => console.log('#1  first Promise'));

  const promise = Promise.resolve();

  setTimeout(() => promise.then(() => console.log('#1 second Promise')), 1000);

  console.log('#1 last console log');
}

function handleClick2() {
  setTimeout(() => console.log('#2 first timeout'), 2000);

  Promise.resolve().then(() => console.log('#2  first Promise'));

  const promise = Promise.resolve();

  setTimeout(() => promise.then(() => console.log('#2 second Promise')), 1000);

  console.log('#2  last console log');
}
const resetButton1 = document.querySelector('#resetButton');

resetButton1.addEventListener('click', handleClick1);
resetButton1.addEventListener('click', handleClick2);
