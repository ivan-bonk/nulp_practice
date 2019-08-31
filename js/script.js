let money, time;

function start () {
    money = parseFloat(prompt("Ваш бюджет на месяц?", ''));

    while ((isNaN(money)) || money == '' || money == null) {
        alert('Неправильные значения');
        start();
    }  
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
}
start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optinalExpenses : {},
    income : [],
    saving : true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", '');
            let b = parseFloat(prompt("Во сколько обойдется?", ''));
            
            if ((typeof(a)) == 'string' && (typeof(a)) != null && 
                (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                alert('Строка не должна быть пустой или больше 50 символов!');
                i--;
            }
        } 
    },
    chooseeOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введите необязательную статью расходов", '');
            
            if ((typeof(a)) == 'string' && (typeof(a)) != null && 
                a != '' && a.length < 50) {
                appData.expenses[i] = a;
            } else {
                alert('Строка не должна быть пустой или больше 50 символов!');
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.budgetPerDay = (appData.budget/30).toFixed(2);
        alert('Дневной бюджет ' + appData.budgetPerDay);
    },
    detectLevel: function() {
        if (appData.budgetPerDay < 200) {
            console.log("Низкий уровень достатка!");
        } else if (appData.budgetPerDay > 200 && appData.budgetPerDay < 2000) {
            console.log("Средний уровень достатка!");
        } else if (appData.budgetPerDay > 2000) {
            console.log("Высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.saving == true) {
            let save = parseFloat(prompt("Введите суму накоплений!", ''));
            let percent = prompt("Введите процент!", '');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход с Вашего депозита в месяц: ' + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительний доход? (перечислите через запятую)', '');
        if(typeof(items) == 'string' && items != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
            alert('Способы доп. зароботка:');
            appData.income.forEach(function(items, i) {
                alert(i+1 + ': ' + items);
            });
        } else {
            alert('Строка не должна быть пустой');
            appData.chooseIncome();
        }
        
        
    }
};

console.log('Наша програма включает в себя:');
for (let key in appData) {
    console.log(key);
}
