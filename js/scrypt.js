let money = parseFloat(prompt("Ваш бюджет на месяц?", '')),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let answerOne = 
    prompt("Введите обязательную статью расходов в этом месяце", ''),
    answerTwo = parseFloat(prompt("Во сколько обойдется?", '')),
    answerThree = 
    prompt("Введите обязательную статью расходов в этом месяце", ''),
    answerFour = parseFloat(prompt("Во сколько обойдется?", ''));

let appData = {
    budget : money,
    timeData : time,
    expences : {
        answerOne : answerTwo,
        answerThree : answerFour
    },
    optinalExpences : {

    },
    income : [],
    saving : false
};

alert(((money - (answerTwo + answerFour))/30).toFixed(2));
