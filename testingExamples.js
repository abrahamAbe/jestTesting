function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function buildPersonObject(){
  let personObject = { name: 'Hodor' };
  personObject['lastName'] = 'Stark';

  return personObject;
}

function addPositiveNumbers(){
  var result = 0;
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      result = a + b;
    }
  }

  return result;
}

module.exports = { addNumbers, subtractNumbers, buildPersonObject, addPositiveNumbers };