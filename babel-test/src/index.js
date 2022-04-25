import a1 from './input/input1.js'
import a2 from './input/input2.js'
// import "core-js";

const dd = ()=>{
    new Promise(t=>{
        return 99
    }).then(t=>{
        console.log(t)
    })
}

dd()
var aaaa = a1()
console.log('aaaa', aaaa)

var bbbb = a2()

console.log('bbbb', bbbb)