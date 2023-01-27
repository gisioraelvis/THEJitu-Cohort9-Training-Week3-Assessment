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
