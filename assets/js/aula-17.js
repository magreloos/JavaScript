let num = [10, 20, 30, 40, 50, 60];
const objs = document.getElementsByTagName("div");

// for (let i = 0; i < num.length; i++) {
//   console.log("Item: " + num[i]);
// }
// console.log("----------")

// for (n in num) {
//   console.log("For In Item: " + num[n]);
// }
// console.log("----------")

// for (n of num) {
//   console.log("For Of Item: " + n);
// }

for (o in objs) {
  console.log("For In Item: " + o);
}
console.log("=================================");

for (o of objs) {
  console.log("For Of Item = ", o);
}
