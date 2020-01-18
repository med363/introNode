//  x=3; y=4;
// console.log(x+y);
// // sum=o;
// // tab=[1,2,3];
// // tab.forEach(element => {sum+=element
    
// // });
// console.log(sum)
const array = process.argv;

const newArray = array.filter((item, index) => {
    return index > 1;
})

let sum = 0;
newArray.forEach((item) => {
    sum = sum + Number(item)
})
// console.log(newArray)

console.log(sum)

// console.log(process.argv);
