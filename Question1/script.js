"use strict";
/*
<body>
    <div class="container">
        <div class="income">
            <h2>Income</h2>
            <div class="income-amount">
                <p>$0</p>
            </div>
            <div class="income-source">
                <select name="income-source" id="income-source">
                    <option value="Select Source">Select Source</option>
                    <option value="Salary">Salary</option>
                    <option value="Business">Business</option>
                    <option value="Investment">Investment</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="income-date">
                <input type="date" class="income-date-input">
            </div>
            <div class="income-amount-input">
                <input type="number" placeholder="Amount">
            </div>
            <button class="income-submit">Submit</button>
        </div>
        <div class="expense-tracker">
            <h2>Expense Tracker</h2>
            <div class="balance">
                <p>$0</p>
            </div>
            <div class="income-record">
                <div class="income-records"></div>
            </div>
            <div class="expense-record">
                <div class="expense-records"></div>
            </div>
        </div>
        <div class="expense">
            <h2>Expense</h2>
            <div class="expense-amount">
                <p>$0</p>
            </div>
            <div class="expense-type">
                <select name="expense-type" id="expense-type">
                    <option value="Select Type">Select Type</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Rent">Rent</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="expense-date">
                <input type="date" class="expense-date-input">
            </div>
            <div class="expense-amount-input">
                <input type="number" placeholder="Amount">
            </div>
            <button class="expense-submit">Submit</button>
        </div>
    </div>
    <script src="./script.js"></script>
</body>

*/
class Income {
    constructor() {
        this.balance = 0;
        this.records = [];
    }
    getBalance() {
        return this.balance;
    }
    updateBalance(amount) {
        this.balance += amount;
    }
    addRecord(record) {
        this.records.push(record);
    }
    getRecords() {
        return this.records;
    }
}
class Expense extends Income {
    constructor() {
        super();
    }
}
class IncomeTracker extends Income {
    constructor() {
        super();
    }
}
// DOM code
const incomeSource = document.getElementById("income-source");
const incomeAmount = document.querySelector(".income-amount-input input");
const incomeDate = document.querySelector(".income-date-input");
const incomeSubmit = document.querySelector(".income-submit");
const incomeAmountTag = document.querySelector(".income-amount p");
const expenseType = document.getElementById("expense-type");
const expenseAmount = document.querySelector(".expense-amount-input input");
const expenseDate = document.querySelector(".expense-date-input");
const expenseSubmit = document.querySelector(".expense-submit");
const expenseAmountTag = document.querySelector(".expense-amount p");
const balanceTag = document.querySelector(".balance p");
const incomeRecords = document.querySelector(".income-records");
const expenseRecords = document.querySelector(".expense-records");
const income = new IncomeTracker();
const expense = new Expense();
incomeSubmit.addEventListener("click", () => {
    const incomeRecord = {
        amount: Number(incomeAmount.value),
        date: incomeDate.value,
        category: incomeSource.value,
    };
    income.addRecord(incomeRecord);
    income.updateBalance(incomeRecord.amount);
    incomeAmountTag.innerText = "$" + income.getBalance().toString();
    balanceTag.innerText =
        "$" + (income.getBalance() - expense.getBalance()).toString();
    incomeAmount.value = "";
    incomeDate.value = "";
    incomeSource.value = "Select Source";
    const div = document.createElement("div");
    div.className = "income-record";
    div.innerHTML = `
        <p>${incomeRecord.category}</p>
        <p>${incomeRecord.amount}</p>
        <p>${incomeRecord.date}</p>
    `;
    incomeRecords.appendChild(div);
});
expenseSubmit.addEventListener("click", () => {
    const expenseRecord = {
        amount: Number(expenseAmount.value),
        date: expenseDate.value,
        category: expenseType.value,
    };
    expense.addRecord(expenseRecord);
    expense.updateBalance(expenseRecord.amount);
    expenseAmountTag.innerText = "$" + expense.getBalance().toString();
    balanceTag.innerText =
        "$" + (income.getBalance() - expense.getBalance()).toString();
    expenseAmount.value = "";
    expenseDate.value = "";
    expenseType.value = "Select Type";
    const div = document.createElement("div");
    div.className = "expense-record";
    div.innerHTML = `
        <p>${expenseRecord.category}</p>
        <p>${expenseRecord.amount}</p>
        <p>${expenseRecord.date}</p>
    `;
    expenseRecords.appendChild(div);
});
