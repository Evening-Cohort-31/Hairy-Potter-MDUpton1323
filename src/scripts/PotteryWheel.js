// Define a variable with the value of the primary key for each piece of pottery, should have an initial value of 1
let potteryId = 1;
// Define and export a function name makePottery, and have it accept parameters shape, weight, height
export const makePottery = (shape, weight, height) => {
  // Create a variable newPottery, that returns an object with the following properties id, shape, weight, and height
  const newPottery = {
    id: potteryId,
    shape: shape,
    weight: weight,
    height: height,
  };
  // Increment the id value each time the function is invoked
  potteryId++;

  return newPottery;
};
