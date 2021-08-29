const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');

let totalExpense = 0;
totalExpenses.textContent = totalExpense;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

const presentAlert = () => {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid inputs';
    alert.message = 'Please enter valid amount and reason';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    alert.present();
}

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().length <= 0 
            || enteredAmount <= 0 
            || enteredAmount.trim().length <= 0
    ){
        presentAlert();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);
    totalExpense += +enteredAmount;
    totalExpenses.textContent = totalExpense;
    clear();
});

cancelBtn.addEventListener('click', clear);