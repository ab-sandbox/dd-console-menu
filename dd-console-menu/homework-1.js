const readline = require("node:readline/promises");

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
      console.log("Билетная касса");
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
