let newString = "";
let buttons = document.querySelectorAll('.btn');
let display = document.querySelector(".display");

Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            newString=eval(newString)
            display.value=newString;
        }
        else if (e.target.innerHTML == "C") {
            newString = newString.slice(0, -1);
            display.value = newString;            
        } else if (e.target.innerHTML == "AC") {
          newString = "";
            display.value=newString;
        } else {
          console.log(e.target);
          newString = newString + e.target.innerHTML;
            display.value=newString;
        }
    })
});
