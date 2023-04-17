//  переменные
let money, time;
const btnStart = document.querySelector('#start');
const budget = document.querySelector('.budget-value');
const budgetDay = document.querySelector('.daybudget-value');
const levelValue = document.getElementsByClassName('.level-value')[0];
const expensesValue = document.querySelector('.expenses-value');
const optionalExpensesValue = document.querySelector('.optionalexpenses-value');
const incomeValue = document.querySelector('.income-value');
const monthsavingsValue = document.querySelector('.monthsavings-value');
const yearsavingsValue = document.querySelector('.yearsavings-value');
const expensesItemS = document.getElementsByClassName('expenses-item');
const expensesItemBtn = document.getElementsByTagName('button')[0];
const optionalExpensesBtn = document.getElementsByTagName('button')[1];
const countBudgetBtn = document.getElementsByTagName('button')[2];
const optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
const chooseIncomeInput = document.querySelector('.choose-income');
const checkBoxSaving = document.querySelector('#savings');
const sumValue = document.querySelector('#sum');
const percentValue = document.querySelector('#percent');
const yearValue = document.querySelector('.year-value');
const monthValue = document.querySelector('.month-value');
const dayValue = document.querySelector('.day-value');


expensesItemBtn.disabled = true;
 optionalExpensesBtn.disabled = true;
 countBudgetBtn.disabled = true;
//  логика устоновки бюджета на месяц и даты
btnStart.addEventListener('click', function() {
 time = prompt('Введите дату в формате YYYY-MM-DD', '');
 money = +prompt('Ваш бюджет на месяц?', '');
 while(isNaN(money) || money == null || money == '') {
  money = +prompt('Ваш бюджет на месяц?', '');
 }
 appData.budget = money;
 appData.timeData = time;
 budget.textContent = money.toFixed();
 yearValue.value = new Date(Date.parse(time)).getFullYear();
 monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
 dayValue.value = new Date(Date.parse(time)).getDate();

 expensesItemBtn.disabled = false;
 optionalExpensesBtn.disabled = false;
 countBudgetBtn.disabled = false;
})
//  логика рассчета трат в месяц
expensesItemBtn.addEventListener('click', function() {
  let sum = 0;
    for (let i = 0; i < expensesItemS.length; i++) {
        let a = expensesItemS[i].value,
            b = expensesItemS[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
        expensesValue.textContent = sum;
      }
})

optionalExpensesBtn.addEventListener('click', function() {
for(let i = 0; i < optionalexpensesItem.length; i++) {
    let expensesOptions = optionalexpensesItem[i].value
    appData.optionExpenses[i] = expensesOptions;
    optionalExpensesValue.textContent += appData.optionExpenses[i] + ' ';
  }
})

countBudgetBtn.addEventListener('click', function() {
  if(appData.budget != undefined) {
appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
budgetDay.textContent = appData.moneyPerDay;
  }else {
    budgetDay.textContent = 'Введите данные!';
  }
});

chooseIncomeInput.addEventListener('input', function() {
  let items = chooseIncomeInput.value;
   appData.income = items.split(", ");
   incomeValue.textContent = appData.income;
});

checkBoxSaving.addEventListener('click', function() {
  if(appData.savings == false) {
    appData.savings = true
  }else {
    appData.savings = false
  }
});

sumValue.addEventListener('input', function() {
  if(appData.savings == true) {
let sum = +sumValue.value;
let percent = +percentValue.value;

appData.mothInCome = sum / 100 / 12 * percent;
appData.yearInCome = sum / 100 * percent;

monthsavingsValue.textContent = appData.mothInCome.toFixed(1);
yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
 if(appData.savings == true){
  let sum = +sumValue.value;
let percent = +percentValue.value;

appData.mothInCome = sum / 100 / 12 * percent;
appData.yearInCome = sum / 100 * percent;

monthsavingsValue.textContent = appData.mothInCome.toFixed(1);
yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
 }
});




// объект с данными
let appData =  {
  budget: money,
  timeData: time,
  expenses: {},
  optionExpenses: {},
  income:[],
  savings: false,
  
}
