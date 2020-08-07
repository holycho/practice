// let inputValue = {
//   hired: {
//     be: {
//       to: {
//         deserve: 'I'
//       }
//     }
//   }
// };

function isObject(o) {
  return o !== null && typeof o === 'object' && Array.isArray(o) === false;
}

let nestedObjs = []
function parse(val) {
  if (isObject(val)) {
    let keys = Object.keys(val)
    if (keys.length > 0) {
      let k = keys[0]
      // console.log('key: ', k)
      let obj = val[k]
      nestedObjs.push(obj)
      parse(obj)
    }
  }
}

function createObj(list, index) {
  if (index >= list.length - 1) {
    let finalItem = list[index]
    // console.log(list[index])
    if (isObject(finalItem)) {
      return Object.keys(finalItem)[0]
    }

    return finalItem
  }

  let it = list[index]
  let key = undefined
  if (!isObject(it)) {
    key = it
  } else {
    key = Object.keys(it)[0]
  }

  let next = index + 1
  return { [key]: createObj(list, next) }
}

function reverse(val) {
  let output = undefined
  nestedObjs.push(val)
  parse(val)
  nestedObjs.reverse()
  console.log(nestedObjs)

  output = createObj(nestedObjs, 0)
  return output
}

module.exports = {
  reverse
}
//let outputValue = reverse(inputValue)
//console.log('reverse 1 = ', outputValue)