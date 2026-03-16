let a = prompt("Enter the first number")

let b = prompt("Enter the second number")

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum =parseInt(a)+parseInt(b)

function main(){
    let x=1;
try {
    console.log("the sum is :",sum*x)
    
} catch (error) {
    console.log("Error handled")
}
finally{
    console.log("Files are closed!!")
}}

let c=main()
