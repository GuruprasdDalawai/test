function start(){
    console.log("Welcome")
}


function add(a,b){
    return a+b
}

function main(callback){
    let a=10, b=20
    callback(a,b)
}

main(add)
