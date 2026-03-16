async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
    
}

function sum(a,b,c){
    return a+b+c
}
(async function main() {
    var a1
    console.log(a1)
    // let a=await sleep()
    // console.log(a)
    // let b= await sleep()
    // console.log(b)

    // let[x,y]=[1,4]
    // console.log(x,y)

    // let [x,y]=[2,6,1]
    // console.log(x,y)

    // let[x,y,...rest]=[2,5,13,7,2,9,3]
    // console.log(x,y,rest)

    let obj={
        a:1,
        b:2,
        c:3
    }

    let{a,b}=obj
    console.log(a,b)

    let arr=[1,4,8]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))

})()
