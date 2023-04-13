// #For (boshlanish, manzil, step)

// let i = 1;
// for (i = 1; i <= 12; i = i + 2) {
//   console.log(i);
// }

// ##For (break)
var sum = 0;
for (let i = 1; i <= 12; i++) {
  console.log((sum += i));
  if (sum === 10) break;
}
