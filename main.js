const plusButton = document.getElementById("addButton");
const minusButton = document.getElementById("subButton");
const mulButton = document.getElementById("mulButton");
const divButton = document.getElementById("divButton");



const addOperation = () => {
    const num1 = document.getElementById("number1");
    const num2 = document.getElementById("number2");

     sum = parseInt(num1.value) + parseInt(num2.value);
      

    result = document.getElementById("result");
     result.innerHTML=sum;
}
plusButton.addEventListener("click", addOperation);

const subOperation = () => {
    const num1 = document.getElementById("number1");
    const num2 = document.getElementById("number2");

     minus = parseInt(num1.value) - parseInt(num2.value);
    result = document.getElementById("result");
     result.innerHTML=minus;
}
minusButton.addEventListener("click", subOperation);

const divOperation = () => {
    const num1 = document.getElementById("number1");
    const num2 = document.getElementById("number2");

     division = parseInt(num1.value) / parseInt(num2.value);
    result = document.getElementById("result");
     result.innerHTML=division;
}
  divButton.addEventListener("click", divOperation);

  const mulOperation = () => {
    const num1 = document.getElementById("number1");
    const num2 = document.getElementById("number2");

     mul = parseInt(num1.value) * parseInt(num2.value);
    result = document.getElementById("result");
     result.innerHTML=mul;
}
 mulButton.addEventListener("click",mulOperation);




const clearFunction = () => {
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    result.textContent ="";

}