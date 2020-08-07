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

let relations = []
let heads = []
function parseRelation(parent, val) {
  if (isObject(val)) {
    let keys = Object.keys(val)
    let relList = []
    for (let k of keys) {
      // relList.push({
      //   parent,
      //   child: k
      // })
      // reverse
      relList.push({
        parent: k,
        child: parent
      })
      
      let _val = val[k]
      parseRelation(k, _val)
    }
    relations.push(relList)
  } else {
    // reverse
    heads.push({ parent: val, child: parent })
  }
}

function createObj2(it, relations, index) {
  if (it.child == "TAIL") {
    return it.parent
  }

  let child = relations[index].find(x => x.parent == it.child)
  if (child) {
    let next = index + 1
    return {
      [it.parent]: createObj2(child, relations, next)
    }
  } else {
    return createObj2(it, relations, index + 1)
  }
}

function reverse2(val) {
  parseRelation("TAIL", val)
  console.log('heads:', heads, 'relations:', relations)
  
  let output = {}
  for (let h of heads) {
    o = createObj2(h, relations, 0)

    let keys = Object.keys(o)
    for (let k of keys) {
      output[k] = o[k]
    }
  }

  return output
}

module.exports = {
  reverse2
}
//outputValue = reverse2(inputValue)
//console.log('reverse 2 = ', outputValue)