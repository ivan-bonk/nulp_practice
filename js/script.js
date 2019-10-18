
let money, time;

let startCalc = document.getElementById('start'),
    monthIncome = document.querySelector('.month-income-item'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItems = document.getElementsByClassName('expenses-item'),
    addExpensesBtn = document.querySelector('.add-expenses-btn'),
    removeExpBtn = document.querySelector('.remove-expenses-btn'),
    expItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpBtn = document.querySelector('.optionalexpenses-btn'),
    optionalExpItems = document.getElementsByClassName('optionalexpenses-item'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    monthIncomeBtn = document.querySelector('.month-income-bth'),
    addOptExpensesBtn = document.querySelector('.addOptExpensesBtn'),
    removeOptExpBtn = document.querySelector('.remove-opt-exp-btn'),
    resetScreen = document.querySelector('.reset');

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0); }

monthIncomeBtn.addEventListener('click', function() {
    money = +monthIncome.value;

    if ((isNumber(money)) && money != '' && money != null) {
        appData.budget = money;

        budgetValue.textContent = money.toFixed(2);
        // monthIncome.value = '';
        
    } else {
        alert("Введіть коректні дані!");
        monthIncome.value = '';
    }
});

startCalc.addEventListener('click', function() {
    daybudgetValue.textContent = ((appData.budget - 
        expensesValue.textContent - optionalexpensesValue.textContent)/30).toFixed(1);
});

resetScreen.addEventListener('click', function() {

    monthIncome.value = '';

   for(let i = 0; i < expensesItems.length; i++){
        expensesItems[i].value = '';
    }
    
    let child = document.querySelectorAll('.added-form');
    child.forEach(function(item) {
        item.remove();
    }); 

    for(let i = 0; i < optionalExpItems.length; i++){
        optionalExpItems[i].value = '';
    }
    
    let childTwo = document.querySelectorAll('.opt-added-form');
    childTwo.forEach(function(item) {
        item.remove();
    });


    chooseSum.textContent = "";
    choosePercent.textContent = "";

    budgetValue.textContent = 0;
    daybudgetValue.textContent = "";
    expensesValue.textContent = 0;
    optionalexpensesValue.textContent = 0;
    monthsavingsValue.textContent = "";
    yearsavingsValue.textContent = "";
});

addExpensesBtn.addEventListener('click', function() {
    let html = '<input class="expenses-item" type="text" id="expenses_1" placeholder="Найменування"> <input class="expenses-item" type="text" id="expenses_2" placeholder="Ціна">';
    let div = document.createElement('div');
    let removeDiv = document.querySelector('.exp-item-btns');
    div.classList.add('added-form');
    let parent = removeDiv.parentNode;   
    div.innerHTML = html;
    parent.insertBefore(div, removeDiv);
});
removeExpBtn.addEventListener('click', function() {
    let child = document.querySelectorAll('.added-form');
    child[child.length-1].remove();
});

expItemBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value;
        let b = expensesItems[++i].value;
        
        if ((typeof(a)) == 'string' && (typeof(a)) != null && 
            (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            alert('Поле не повинно бути порожнім!');
            i--;
        }
    }
    expensesValue.textContent = sum; 

    // for(let i = 0; i < expensesItems.length; i++){
    //     expensesItems[i].value = '';
    // }
    
    // let child = document.querySelectorAll('.added-form');
    // child.forEach(function(item) {
    //     item.remove();
    // });
});


addOptExpensesBtn.addEventListener('click', function() {
    let html = '<input class="optionalexpenses-item" type="text" placeholder="Найменування"> <input class="optionalexpenses-item" type="text" placeholder="Ціна">';
    let div = document.createElement('div');
    let removeDiv = document.querySelector('.opt-exp-item-btns');
    div.classList.add('opt-added-form');
    let parent = removeDiv.parentNode;   
    div.innerHTML = html;
    parent.insertBefore(div, removeDiv);
});
removeOptExpBtn.addEventListener('click', function() {
    let child = document.querySelectorAll('.opt-added-form');
    child[child.length-1].remove();
});

optionalExpBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < optionalExpItems.length; i++) {
        let a = optionalExpItems[i].value;
        let b = optionalExpItems[++i].value;
        
        if ((typeof(a)) == 'string' && (typeof(a)) != null && 
            (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            appData.optinalExpenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    optionalexpensesValue.textContent = sum; 

    // for(let i = 0; i < optionalExpItems.length; i++){
    //     optionalExpItems[i].value = '';
    // }
    
    // let child = document.querySelectorAll('.opt-added-form');
    // child.forEach(function(item) {
    //     item.remove();
    // });
});

checkSavings.addEventListener('click', function() {
    if(appData.saving == false){
        appData.saving = true;
        chooseSum.removeAttribute('disabled');
        choosePercent.removeAttribute('disabled');
        chooseSum.classList.remove('disabled-form');
        choosePercent.classList.remove('disabled-form');
    } else {
        appData.saving = false;
        chooseSum.setAttribute('disabled', 'disabled');
        choosePercent.setAttribute('disabled', 'disabled');
        chooseSum.classList.add('disabled-form');
        choosePercent.classList.add('disabled-form');
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.saving == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1); 
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.saving == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1); 
    }
});


let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optinalExpenses : {},
    income : [],
    saving : false,
};