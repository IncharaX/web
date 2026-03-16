// console.log("Hey Inchara you are nice")
// console.log("Hey Inchara you are good")
// console.log("Hey Inchara your dress is beautiful")

function nice(name) {
    console.log("Hey " +name+ " you are nice")
    console.log("Hey " +name+ " you are good")
    console.log("Hey  " +name+ " your dress is good")
}
nice("Sathyam")
nice("Shivam")

function sum(a,b,c=3){
    console.log(a,b,c)
    return a+b+c
}
result1 = sum(3,6)
result2 = sum(2,8)
result3= sum(1,4,1)
console.log("The sum of these numbers is:",result1)
console.log("The sum of these numbers is:",result2)
console.log("The sum of these numbers is:",result3)

const func1 =(x)=>{
    console.log("I am an arrow function", x)
}
func1(22);
func1(65);
func1(73);