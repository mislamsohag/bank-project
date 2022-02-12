
//Catch Button by id and add event listener
document.getElementById('deposit-button').addEventListener('click', function () {
    //Catch deposit input field and Get Inputs
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);
    //Catch deposit Set field and Get old Deposit
    const depositSetText = document.getElementById('total-deposit');
    const oldDepositAmountText = depositSetText.innerText;
    const oldDepositAmount = parseFloat(oldDepositAmountText);
    //Set deposit Total
    const depositTotal = oldDepositAmount + depositInputAmount;
    depositSetText.innerText = depositTotal;
    //Input field Clear
    depositInput.value = '';

    const balanceField = document.getElementById('total-balance');
    const oldBalanceText = balanceField.innerText;
    const oldBalance = parseFloat(oldBalanceText);

    const balanceTotal = oldBalance + depositInputAmount;
    balanceField.innerText = balanceTotal;
})

//Catch Withdraw Event button
document.getElementById('withdrow-button').addEventListener('click', function () {

    const withdrawInputField = document.getElementById('withdrow-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    //Total Withdraw
    const withdrawSetField = document.getElementById('total-withdrow');
    const withdrawAmountText = withdrawSetField.innerText;
    const withdrawOldAmount = parseFloat(withdrawAmountText);

    const withdrawTotalAmount = withdrawOldAmount + withdrawInputAmount;
    withdrawSetField.innerText = withdrawTotalAmount;

    withdrawInputField.value = '';

    //Balance Update
    const balanceSetField = document.getElementById('total-balance');
    const balanceOldAmountText = balanceSetField.innerText;
    const balanceOldAmount = parseFloat(balanceOldAmountText);
    const balanceTotal = balanceOldAmount - withdrawTotalAmount;
    balanceSetField.innerText = balanceTotal;
})

