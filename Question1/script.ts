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

// Typscript DOM code
/* 
Expenses Tracker
Build a expense tracker that takes inputs(income, category, amount, date) all except the category.
The category is a drop down list of common categories of expenses
Use three Classes and an interface for each.
1. Income class
This class has private properties:
balance (has the balance)
records to have all the records (income and expense records ) and use an interface.

2. Expense class
This is a derived class it deals with expenses only.

3. Income Class
This is also a derived class that deals with everything about income.
Add the user interface for this
*/

interface IRecord {
  amount: number;
  date: string;
  category: string;
}

class Income {
  private balance: number;
  private records: IRecord[];
  constructor() {
    this.balance = 0;
    this.records = [];
  }
  getBalance(): number {
    return this.balance;
  }
  updateBalance(amount: number): void {
    this.balance += amount;
  }
  addRecord(record: IRecord): void {
    this.records.push(record);
  }
  getRecords(): IRecord[] {
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
const incomeSource = document.getElementById(
  "income-source"
) as HTMLSelectElement;
const incomeAmount = document.querySelector(
  ".income-amount-input input"
) as HTMLInputElement;
const incomeDate = document.querySelector(
  ".income-date-input"
) as HTMLInputElement;
const incomeSubmit = document.querySelector(
  ".income-submit"
) as HTMLButtonElement;
const incomeAmountTag = document.querySelector(
  ".income-amount p"
) as HTMLParagraphElement;

const expenseType = document.getElementById(
  "expense-type"
) as HTMLSelectElement;
const expenseAmount = document.querySelector(
  ".expense-amount-input input"
) as HTMLInputElement;
const expenseDate = document.querySelector(
  ".expense-date-input"
) as HTMLInputElement;
const expenseSubmit = document.querySelector(
  ".expense-submit"
) as HTMLButtonElement;
const expenseAmountTag = document.querySelector(
  ".expense-amount p"
) as HTMLParagraphElement;

const balanceTag = document.querySelector(".balance p") as HTMLParagraphElement;

const incomeRecords = document.querySelector(
  ".income-records"
) as HTMLDivElement;
const expenseRecords = document.querySelector(
  ".expense-records"
) as HTMLDivElement;

const income = new IncomeTracker();
const expense = new Expense();

incomeSubmit.addEventListener("click", () => {
  const incomeRecord: IRecord = {
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
  const expenseRecord: IRecord = {
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
