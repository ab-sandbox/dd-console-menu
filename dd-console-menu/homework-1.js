const readline = require("node:readline/promises");

function ticketPrice(category) {
  switch (category) {
    case 1:
      return 300;
    case 2:
      return 500;
    case 3:
      return 900;
    default:
      return 0;
  }
}

function maxTickets(budget, price) {
  let count = 0;
  let remaining = budget;

  while (remaining >= price) {
    remaining -= price;
    count++;
  }

  return count;
}

function printTicketResult(category, budget) {
  const price = ticketPrice(category);

  if (price === 0) {
    console.log("Неизвестная категория");
    return;
  }

  const count = maxTickets(budget, price);

  console.log(
    `Категория ${category}, билет ${price} руб., ` +
      `бюджет ${budget} руб.: можно купить ${count} шт.`,
  );
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Выберите задачу:");
  console.log("1 — билетная касса");
  console.log("2 — доставка заказа");
  console.log("3 — лестница");

  const choice = Number(await rl.question("Ваш выбор: "));

  switch (choice) {
    case 1: {
      const category = Number(await rl.question("Категория билета: "));
      const budget = Number(await rl.question("Бюджет: "));

      printTicketResult(category, budget);
      break;
    }
    case 2: {
      console.log("Доставка заказа");
      break;
    }
    case 3: {
      console.log("Лестница");
      break;
    }
    default:
      console.log("Такой задачи нет");
  }

  rl.close();
}

main();
