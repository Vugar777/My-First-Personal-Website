const obj = {
 fullName:'Yasir',
 age:'23',
 isMarried:true
}

const rename = Object.assign(obj)

rename.fullName = 'Vugar'

console.log(rename)
console.log(obj)

const newObj = Object.create()


console.log(newObj.assign(rename))