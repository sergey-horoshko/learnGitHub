let money = prompt("Ваш бюджет на месяц", 40000);
let time = prompt("Введите дату в формате YYYY-MM-DD", "1999-07-06");
let expenses = {};

let questionFirst = prompt(
	"Введите обязательную статью расходов в этом месяце",
	"Еда"
);

let questionFirstPrice = prompt("Во сколько обойдется?", "20000");

let questionSecond = prompt(
	"Введите обязательную статью расходов в этом месяце",
	"Транспорт"
);

let questionSecondPrice = prompt("Во сколько обойдется?", "10000");

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};

appData.expenses[questionFirst] = questionFirstPrice;
appData.expenses[questionSecond] = questionSecondPrice;

alert(appData.budget / 30);

console.log(appData);
console.log(appData.expenses);
