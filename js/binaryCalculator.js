let res = document.querySelector("#res");
let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");
let btnClr = document.querySelector("#btnClr");
let btnEql = document.querySelector("#btnEql");
let btnSum = document.querySelector("#btnSum");
let btnSub = document.querySelector("#btnSub");
let btnDiv = document.querySelector("#btnDiv");
let btnMul = document.querySelector("#btnMul");

btn0.addEventListener("click",function() {
    res.innerHTML += btn0.innerText;
})
btn1.addEventListener("click",function() {
    res.innerHTML += btn1.innerText;
})
btnClr.addEventListener("click",function() {
    res.innerHTML =''
})
btnSum.addEventListener("click",function() {
    res.innerHTML += btnSum.innerText;
})
btnSub.addEventListener("click",function() {
    res.innerHTML += btnSub.innerText;
})
btnDiv.addEventListener("click",function() {
    res.innerHTML += btnDiv.innerText;
})
btnMul.addEventListener("click",function() {
    res.innerHTML += btnMul.innerText;
})
btnEql.addEventListener("click",function() {
    let numString=res.innerText;
    let result=0;
    if(numString.includes("+")){
        let sumArray = res.innerText.split('+');
        result = parseInt(sumArray[0],2) + parseInt(sumArray[1],2);
    } else if(numString.includes("-")){
        let subArray  = res.innerText.split('-');
        result = parseInt(subArray[0],2) - parseInt(subArray[1],2);
    }else if(numString.includes("/")){
        let divArray = res.innerText.split('/');
        result = Math.floor(parseInt(divArray[0],2) / parseInt(divArray[1],2));
    }else if(numString.includes("*")){
        let mulArray = res.innerText.split('*');
        result= parseInt(mulArray[0],2) * parseInt(mulArray[1],2);
    }
    res.innerHTML=Number(result).toString(2);
})



// 11011 + 1000 = 100011
// 10001101 * 111 = 1111011011
