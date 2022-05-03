let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let stampElement = document.querySelector(".js-stamp")

const rateEUR = 4.63;
const rateUSD = 4.28;
const rateGBP = 5.53;

const currencyStampEUR = "[EUR]";
const currencyStampUSD = "[USD]";
const currencyStampGBP = "[GBP]";

formElement.addEventListener("input", () => {
    
    let amount = amountElement.value;
    let result;

    if (document.querySelector(".js-euro").checked) {
        result = amount / rateEUR;
        stamp = currencyStampEUR;
    }

    else if (document.querySelector(".js-dolar").checked) {
        result = amount / rateUSD
        stamp = currencyStampUSD;
    }
    else if (document.querySelector(".js-swiss").checked) {
        result = amount / rateGBP;
        stamp = currencyStampGBP;
    }

    resultElement.value = result.toFixed(2);
    stampElement.innerText = stamp;
});
