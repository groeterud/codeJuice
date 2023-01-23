type Soda = { amount: number };

const writeCode = (pmax: Caffeine) => {
  while (pmax.amount > 0) {
    pmax.amount--;
    console.log('Writing code...');
  }
};
// in desiliters
writeCode({ amount: 5 });
