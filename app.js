const dob=document.querySelector("#date-of-birth");

const luckyNumber=document.querySelector("#lucky-number");

const checkButton = document.querySelector("#check");

const outputBox = document.querySelector("#output-box");

// console.log(dob.value,luckyNumber.value);

checkButton.addEventListener('click',checkBirthdayIsLucky);

function calculateSum(bd)
{
   bdate=bd.replaceAll("-","");
   let sum=0;
   for(let i=0;i<bdate.length;i++)
   {
      sum+=Number(bdate.charAt(i));
   }

   return sum;
}

function finalCheck(sum,luckyNumber)
{
    if(sum%luckyNumber===0){
        outputBox.innerText="Your birthday is lucky 🚀";
      }else {
        outputBox.innerText="Your birthday is not lucky 🤒";
      }
}

function checkBirthdayIsLucky()
{
    // console.log("Hi");
    const bd=dob.value;
    const sum=calculateSum(bd);
    if(sum&&dob)
    finalCheck(sum,luckyNumber.value)
  else 
  outputBox.innerText="Please enter both the fields 😡";
}