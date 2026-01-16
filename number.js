
const randomNumber = Math.floor((Math.random() * 100 ))+1;



const btn = document.getElementById("click");

const res = document.getElementById("result");

console.log(randomNumber , typeof randomNumber);
btn.addEventListener("click", () =>{
const input = Number(document.getElementById("guessinput").value);

if (!input) {
  res.textContent = "Enter a number";
  return;
}
else if(input ==randomNumber){
        res.textContent = "WON!"
    }else{
        res.textContent = "lOSE!"
    }
});

