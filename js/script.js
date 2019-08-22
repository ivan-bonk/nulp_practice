let money = parseFloat(prompt("Ваш бюджет на месяц?", '')),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget : money,
    timeData : time,
    expences : {},
    optinalExpences : {},
    income : [],
    saving : false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = parseFloat(prompt("Во сколько обойдется?", ''));
    
    if ((typeof(a)) == 'string' && (typeof(a)) != null && 
        (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expences[a] = b;
    } else {
        alert('Строка не должна быть пустой или больше 50 символов!');
        i--;
    }
}
// let j = 0;
// while (j < 2) {

//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = parseFloat(prompt("Во сколько обойдется?", ''));
    
//     if ((typeof(a)) == 'string' && (typeof(a)) != null && 
//         (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expences[a] = b;
//     } else {
//         alert('Строка не должна быть пустой или больше 50 символов!');
//         j--;
//     }
//     j++;
// }

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = parseFloat(prompt("Во сколько обойдется?", ''));
    
//     if ((typeof(a)) == 'string' && (typeof(a)) != null && 
//         (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expences[a] = b;
//     } else {
//         alert('Строка не должна быть пустой или больше 50 символов!');
//         j--;
//     }
//     j++;

// } while (j < 2);


appData.budgetPerDay = (appData.budget/30).toFixed(2);

if (appData.budgetPerDay < 200) {
    console.log("Низкий уровень достатка!");
} else if (appData.budgetPerDay > 200 && appData.budgetPerDay < 2000) {
    console.log("Средний уровень достатка!");
} else if (appData.budgetPerDay > 2000) {
    console.log("Высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
}