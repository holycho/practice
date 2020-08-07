let sol1 = require('./solution1')
let sol2 = require('./solution2')

let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};
  
let outputValue = {
  I: {
    deserve: {
      to: {
        be: 'hired'
      }
    }
  }
};

test('Check reverse 1', () => {
    expect(sol1.reverse(inputValue)).toEqual(outputValue)
})

test('Check reverse 2', () => {
    expect(sol2.reverse2(inputValue)).toEqual(outputValue)
})