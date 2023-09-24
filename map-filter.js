const nums =[34,2,66,77,61];

const even =  nums.filter( (n) => {return n%2===0} )

console.log(even);

const prices = [345,8726,566,233,1100,1400];

const price = prices.filter(  (a) => { return a>=500 && a<=2000});

console.log(price);


// new example

const nums2 = [4,8,9,4,1,7,3];

 const result = nums2.map((n) =>{return n**2});

console.log(result);

const prices2 = ['$56.28','$888.99','$78.66'];
const numPrice2 = prices2.map((a) => {return parseInt(a.slice(1))});
console.log(numPrice2);

// new

const names = ['Dhruv chaurasiya','Aniket Tyagi','Satyam Srivastva'];
 const name = names.map((k)=>{return k.split(' ')[ 0]});
 console.log(name);

