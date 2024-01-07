// Daily Challenge: Groceries


const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

displayGroceries();

const cloneGroceries = () => {
  const user = client;
  client = "betty";
  console.log(`user: ${user}`);
  console.log(`client: ${client}`);
  const shopping = groceries;
  groceries.totalPrice = "$35";

  groceries.other.paid[0].paidagain = false;
  console.log(shopping);
};
cloneGroceries();

