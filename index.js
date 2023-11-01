let numbersInput;
let numbersArray;
let resultContainer = document.querySelector(".result");

window.addEventListener("DOMContentLoaded", (event) => {
    const spinnerContainer = document.querySelector(".spinner-container");
    const contentContainer = document.querySelector(".content-container");
    const body = document.body;
    setTimeout(() => {
        spinnerContainer.style.display = "none";

        contentContainer.classList.remove("hide-element");
        body.classList.remove("spinner-loader");
    }, 2000)

})

function calculateMeanAndStandardDeviation() {
    numbersInput = document.getElementById("numbers").value;
    numbersArray = numbersInput.split(",").map(number => number.trim()).filter(number => number !== "").map(Number);

    const pattern = /^[\d,\s]+$/;

    if (numbersArray.length < 3 || numbersArray.length > 10 || !(pattern.test(numbersInput))) {
        alert("Please enter numbers range from 3 to 10 with comma and it should not have text!");
        return;
    }

    let meanResult = mean(numbersArray);
    let standardDeviationResult = standardDeviation(numbersArray);

    document.getElementById("mean").textContent = meanResult.toFixed(2);
    document.getElementById("standard-deviation").textContent = standardDeviationResult.toFixed(2);
    resultContainer.classList.add("show");
}

function mean(arr) {
    let sum = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        sum += arr[i];
    }
    let mean = sum / length;

    return mean;
}

function standardDeviation(arr) {
    let meanValue = mean(arr);
    let length = arr.length;
    let variance = 0;

    for (let i = 0; i < arr.length; i++) {
        variance += Math.pow(arr[i] - meanValue, 2); //1,2,3,4
    }
    let standardDeviation = Math.sqrt(variance / length);//3

    return standardDeviation;
}

