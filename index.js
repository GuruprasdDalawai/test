function start(){
    console.log("Welcome")
}


function add(a,b){
    return a+b
}

function multiplication(a,b){
    return a*b;

}

function substraction(a,b){
    return a-b;
}

function division(a,b){
    return a/b;
}

function main(callback){
    let a=10, b=20
    callback(a,b)
}

main(add)
main(multiplication)
main(substraction)
main(division)

