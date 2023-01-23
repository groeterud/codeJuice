type Caffeine = { amount: number };

const writeCode = (coffee: Caffeine) => {
  while (coffee.amount > 0) {
    coffee.amount--;
    console.log('Writing code...');
  }
};
// in desiliters
writeCode({ amount: 3 });
