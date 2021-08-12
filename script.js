let principal = document.getElementById("principal");
let rateOfInterest = document.getElementById("rate");
let result = document.querySelector("#result");


let noOfYears;
let form = document.querySelector("form");

window.onload = () => {
  principal.focus();
  // setting value of range slider to display on page
  document.getElementById("rangeValue").innerHTML = rateOfInterest.value + "%";  
  result.style.display = "none";

  // setting value of slider on change event
  rateOfInterest.addEventListener("change", () => {
    document.getElementById("rangeValue").innerHTML = parseFloat(rateOfInterest.value) + "%";
  });

  // binding submit event with form
  form.addEventListener("submit", compute);
  
};

function compute(e) {
    e.preventDefault();
    
    noOfYears = document.getElementById("years");
    let years = parseInt(noOfYears.options[noOfYears.selectedIndex].text);
    let principalAmount  = principal.value;
    if(principalAmount <= 0){
      alert("Please enter the positive amount as principal");
      principal.focus();
      return;
    }
    let output = principalAmount * ( parseFloat(rateOfInterest.value) / 100) * years;
    result.style.display = "block";
    let message = `If you deposit <span>${principal.value}</span>,
                    at the interest rate of <span>${rateOfInterest.value}</span>%. 
                    You will receive an amount of <span>${output}</span>,
                    in the year <span>${new Date().getFullYear() + years}</span>.`


    



    document.getElementById("result").innerHTML = message;

  
  }