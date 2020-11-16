Function.prototype.myBind = function (obj,...args) {
    const self = this
    return ()=> {
        return this.apply(obj,args)
    }
}

// test
const obj = {
    num:10
}
function a (a,b,c) {
    console.log(this.num)
    console.log(a,b,c)
}
const b = a.myBind(obj,1,2,3)
// console.log(a.bind(obj)())
console.log( b() )