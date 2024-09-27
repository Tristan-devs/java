function add(x,y){
    return x + y
}
function subtract(x,y){
    return x - y
}
function multiply(x,y){
    return x * y
}
function task1(add1, add2, sub, mult){
    return (multiply(
        subtract(sub, add(add1,add2)), mult
    ))
}

console.log(task1(7, 3, 2, 5))

function multAdd(w,x,y,z){
    output = (w+x) * (y+z)
    return output
}

console.log(multAdd(3,2,6,5))

