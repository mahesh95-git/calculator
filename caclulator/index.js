let inputoutput = document.querySelector("#i-o");
let button = document.querySelectorAll(".buttonvalue");
button.forEach((buttonvalue) => {
  buttonvalue.addEventListener("click", (e) => {
    inputoutput.value += buttonvalue.value;

    e.preventDefault();
  });
});

let calcualation = (e) => {
  let result = eval(inputoutput.value);
  return result;
 
};

let result = document.querySelector("#result");
result.addEventListener("click", (e) => {
  let value = calcualation();
  inputoutput.value = value;
  e.preventDefault();
});

document.querySelector("#alldetele").addEventListener("click", () => {
  inputoutput.value = " ";
});

let removevalue=(inputoutputvalue)=>{
let len=inputoutput.value
let array=Array.from(len)
console.log(array)
console.log(len.length)

return array
}
let updata=(a)=>{
inputoutput.value=a
console.log(a)
}


document.querySelector(".onedetele").addEventListener("click", () => {
let newstring=inputoutput.value.toString()
console.log(newstring)
let a=newstring.slice(0,-1)
updata(a)
console.log(a)

});
