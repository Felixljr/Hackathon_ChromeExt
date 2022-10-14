let baseColor = document.getElementById("main-color").style.color;

document.getElementById("comp-color").color = hsl()

//This was commented out to take care of the error chrome

{/* <div id="main-color">main color</div>
<div id="comp-color">complementary color</div>
<div id="triad-1">triadic color 1</div>
<div id="triad-2">triadic color 2</div> */}

//This is the algo for RGB/HEX conversion just in case we need it*************************************************

// function rgb(r, g, b) {
//   //intialize empty string to store HEX values
//   let convertedHEX = '';

//   //intiailize empty array to store the args to be looped through
//   const args = [r, g, b];

//   //initialize an object with the Dec-Hex values from 10-15; 0-9 are the same.
//   const hexFrom10to15 = {
//     10: 'A',
//     11: 'B',
//     12: 'C',
//     13: 'D',
//     14: 'E',
//     15: 'F',
//   };

//   //initialize 2 variables to store the remainders of division from the loop below.
//   let wholeNumber;
//   let remainderNum;

//   //Loop through args
//   for (const element of args) {
//     //if an input is invalid: negative or over 255; 00/FF
//     if (element < 0) {
//       convertedHEX += '00';
//     } else if (element > 255) {
//       convertedHEX += 'FF';
//     } else {
//       //If valid, assign the following 2 variables
//       wholeNumber = Math.floor(element / 16);
//       remainderNum = element % 16;

//       //First value with the whole number from division
//       if (wholeNumber < 10) {
//         //If less than 10, add the number directly as a string
//         convertedHEX += String(wholeNumber);
//       } else {
//         //If greater than 10, use as key to use the value
//         convertedHEX += hexFrom10to15[wholeNumber];
//       }
//       //Second value from modulo
//       if (remainderNum < 10) {
//         //If less than 10, add the number directly as a string
//         convertedHEX += String(remainderNum);
//       } else {
//         //If greater than 10, use as key to use the value
//         convertedHEX += hexFrom10to15[remainderNum];
//       }
//     }
//   }
//   //Return HEX string:
//   return convertedHEX;
// }
