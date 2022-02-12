
function getInputValue(inputId) {
    //Catch deposit input field and Get Inputs
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //Input field Clear
    inputField.value = '';

    return amountValue;
}
//
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    //Set deposit Total
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}

//Catch Button by id and add event listener
document.getElementById('deposit-button').addEventListener('click', function () {
    //Input Deposit
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        //Update Balance
        updateBalance(depositAmount, true);
    }
})

//Catch Withdraw Event button
document.getElementById('withdraw-button').addEventListener('click', function () {
    //Input Withdraw
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        //Update Balance
        updateBalance(withdrawAmount, false);
    }
})

