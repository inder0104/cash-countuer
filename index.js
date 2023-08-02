const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,50,20,10,5,1];


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value > billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculatedChange(amountToBeReturned);

        } else {
            showMessage("the cash provided should atlest  be equal to  bill amount");
        } 

    } else {
        showMessage("Invaild amount");

    }

});

function calculatedChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}



function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;


}