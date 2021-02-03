//Run tests: yarn test
/*Run just one test: 
test('match string', () => {
  expect('Thrall').toBe('Thrall');
});*/

const testingExamples = require('./testingExamples');

test('adds two numbers and returns the result', () => {
  expect(testingExamples.addNumbers(1, 2)).toBe(3);
});

test('subtracts two numbers and returns the difference', () => {
  expect(testingExamples.subtractNumbers(2, 1)).toBe(1);
});

test('object assignment', () => {
  expect(testingExamples.buildPersonObject()).toEqual({ name: 'Hodor', lastName: 'Stark' });
});

test('adding positive numbers should not be zero', () => {
  expect(testingExamples.addPositiveNumbers()).not.toBe(0);
});

test('null', () => {
  let myNullVariable = null;
  expect(myNullVariable).toBeNull();
  expect(myNullVariable).toBeDefined();
  expect(myNullVariable).not.toBeUndefined();
  expect(myNullVariable).not.toBeTruthy();
  expect(myNullVariable).toBeFalsy();
});

test('zero', () => {
  let myZero = 0;
  expect(myZero).not.toBeNull();
  expect(myZero).toBeDefined();
  expect(myZero).not.toBeUndefined();
  expect(myZero).not.toBeTruthy();
  expect(myZero).toBeFalsy();
});

test('two plus two', () => {
  let myValue = 2 + 2;
  expect(myValue).toBeGreaterThan(3);
  expect(myValue).toBeGreaterThanOrEqual(3.5);
  expect(myValue).toBeLessThan(5);
  expect(myValue).toBeLessThanOrEqual(4.5);
  expect(myValue).toBe(4);
  expect(myValue).toEqual(4);
});

test('adding floating point numbers', () => {
  let myValue = 0.1 + 0.2;
  //expect(myValue).toBe(0.3);           This won't work because of rounding error
  expect(myValue).toBeCloseTo(0.3); // This works.
});

//Strings
test('hold The Door', () => {
  expect('Hodor').not.toMatch(/B/);
});

test('winter is coming', () => {
  expect('The night is dark and full of terrors').toMatch(/terrors/);
});

test('match string', () => {
  expect('Thrall').toBe('Thrall');
});

//Array
const houseLannister = [
  'Tywin',
  'Jaime',
  'Cersei',
  'Tyrion',
  'Joffrey'
];

test('test that array has Tyrion in it', () => {
  expect(houseLannister).toContain('Tyrion');
  expect(new Set(houseLannister)).toContain('Tyrion');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});