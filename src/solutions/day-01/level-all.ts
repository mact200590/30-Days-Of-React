const array= [
  "Facebook",
  "Google",
  "Microsoft",
  " Apple",
  "IBM",
  "Oracle ",
  " Amazon",
];
// array.pop()  ;
//array[array.length-1]=["Oracle and Amazon are big IT companies "]

console.log(array.toString());

// const checkFunction = () => {
//   if (array.in("Microsoft")) return "Microsoft";
//   return "undefine";
// };

// console.log(checkFunction());

// Filter out companies which have more than one 'o' without the filter method
const moreOneO = (array) => {
  let arrayFilter = [];
  for (let i = 0; i < array.length - 1; i++) {
    let moment = array[i].toString();
    let sum = 0;
    console.log(`this is index`, moment);
    for (let a = 0; a < moment.length - 1; a++) {
      if (moment[a] == "o") {
        console.log(`here`);
        sum += 1;
      }
    }
    if (sum >= 2) arrayFilter.push(array[i]);
  }
  return arrayFilter;
};

console.log(moreOneO(array));

// Slice out the first 3 companies from the array
console.log(array.slice(0, 3));
console.log(array);
array.splice(0, array.length);
console.log(array);

//Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const minFunction = (values) => {
  let firts = values[0];
  values.map((value) => {
    if (value < firts) firts = value;
  });
  return firts;
};


minFunction(ages);
console.log(minFunction(ages))