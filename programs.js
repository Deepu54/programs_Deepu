//5th
/* function removevowels(str)
{
    let vowels = [ 'a', 'e', 'i', 'o', 'u', 
               'A', 'E', 'I', 'O', 'U' ];
    let result = "";
      
    for(let i = 0; i < str.length; i++) 
    {
          
        if (!vowels.includes(str[i]))
        {
            result += str[i];
        }
    }
    return result;
}
let  str=("ElephanthorseMAn")
console.log(removevowels(str));

 */

//qno-4
/* 
//capitilizefirstword
function capatilizefirstword(str) {
  let words = str.split();

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join("");
}
let str = "my name";
let capatilize = capatilizefirstword(str);
console.log(capatilize); */

//qno 3
//Repeating chars
/* function getCharstring(str) {
  const map = {};
  str.split("").forEach((element) => {
    map[element] = map[element] ? map[element] + 1 : 1;
  });
  let max = 1;
  char = str[0];
  for (let k in map) {
    if (map[k] > max) {
      max = map[k];
      char = k;
    }
  }
  return char;
}
const times = getCharstring("hellllooooo world");
console.log(times); */

/* n=5

//Fizzbuzz

for(i=1;i<=n;i++) {
    for(j=1;j<=i;j++) {
        console.log(i)
    }
    console.log('\n')

} */

//FIrstwordcapitilize

//function capitalizeFirstLetter(str) {

//     // upr cse
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

//     return capitalized;
// }

// //inp

// const string = prompt('Enter a string: ');

// const result = capitalizeFirstLetter(string);

// console.log(result);

//Fizzbuzz

//for(var i=1;i<=100;i++) {

//     if(i%3===0 && i%5===0) {

//         console.log(i+ "Fizbuzz")

//     }

//     else if(i%3==0) {

//         console.log(i +"fizz")

//     }

//     else if(i%5==0) {

//         console.log(i + "buzz")

//     }

//     else{

//         console.log(i)

//     }

// }

// }

//increasing triangle
// let rows = 6;
// let char = "";

// for (let i = 1; i <= rows; i++) {
//   for (let j = 0; j < i; j++) {
//     char += "*";
//   }
//   char += "\n";
// }
// console.log(char);

//pallindrome
// var string = prompt("enter the string");

// var len = string.length;

// for (i = 0; i < len / 2; i++) {

//     if(string[i]===string[len-i-1]) {

//         console.log("it is a pallindrome")

//     }

//     else{

//         console.log('it is not a pallindrome')

//     }

// }

//pancard generation

// function pancardgen () {
//     let pan=""
//     let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let num ="0123456789"

//     for(i=0;i<5;i++) {
//          pan+=  alpha.charAt(Math.floor(Math.random()*alpha.length))

//     }

//     for(j=0;j<4;j++) {
//          pan+= num.charAt(Math.floor(Math.random()*num.length))

//     }

//     for(k=0;k<1;k++) {
//         pan+= alpha.charAt(Math.floor(Math.random()*alpha.length))

//     }

//     return pan;

// }
// console.log(pancardgen())

//randomnumbergenerator
// function guessrandom() {

//     let random="";

//     let number = "0123456789"

//     for(i=0;i<2;i++) {

//         random+= number.charAt(Math.floor(Math.random()*number.length))

//     }
//     return random;

// }

// console.log("Random number is"+guessrandom())

//remove vowels
// function removevowels(str) {

//     let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//     let result = "";

//     for (let i = 0; i < str.length; i++) {

//       if (!vowels.includes(str[i])) {

//         result +=str[i];

//       }

//     }

//     return result;

//   }

//   let str = "hellohowareyouiamfine"

//   console.log(removevowels(str))

//Right traingle star pattern

// let n = 6;

// let char = "";

// for (let i = 1; i <= n; i++) {

//   //spcs
//   for (let j = 0; j < n - i; j++) {

//     char += " ";

//   }

//   //str
//   for (let k = 0; k < i; k++) {

//     char += "*";
//   }

//   char += "\n";
// }

// console.log(char);

//to check wheather it is a  substring or not
// let string = "apple is a fruit"

// let substr = "fruit"

// if (!substr.includes(string)) {

//   console.log(`${substr} is not part of ${string}`);

// } else {

//   console.log(`${substr} is a part of ${string}`);

// }

//multiplication of 3 maximum elems
// function getmaxproduct(arr) {

//     arr.sort((a,b) => b-a);

//     return arr[0]*arr[1]*arr[2]

// }

// let arr =[2,4,6,8,10,12]

// const maxproduct=getmaxproduct(arr)

// console.log(maxproduct)
