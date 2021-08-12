let principal = document.getElementById("principal");
let rateOfInterest = document.getElementById("rate");
let noOfYears;
let form = document.querySelector("form");

window.onload = () => {
  
  // setting value of range slider to display on page
  document.getElementById("rangeValue").innerHTML = rateOfInterest.value + "%";  

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
    
    let output = principal.value * ( parseFloat(rateOfInterest.value) / 100) * years;
    let message = `If you deposit ${principal.value},
                    at the interest rate of ${rateOfInterest.value}%. 
                    You will receive an amount of ${output},
                    in the year ${new Date().getFullYear() + years}.`

    document.getElementById("result").innerHTML = message;

  
  }