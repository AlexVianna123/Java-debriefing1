//primeiro exercicio

const myFruit = 'Apple';

const amountOfApples = 5;

if (amountOfApples === 5){
    console.log('WE have five apples!');
}

// segundo exercicio

const myfruit = 'watermelon';
const priceOfMelon = 99;

if (priceOfMelon >= 99){
    console.log('The price of melons are less than 1 dollar per Kg!')
}

//check point two
//number to check output
let numberToCheck = '';

if (numberToCheck < 20){
    console.log('Your number is less than 20.')
} else {
    console.log('Your number is greater than or equal to 20.')
}


//Check Point 3

let a = 10
let b = 50
if (a > b){
    console.log('a is bigger');
} else {
    console.log('b is bigger');
}


    //number 5

let month = 'January';

if ((month === 'December') || (month === 'January') || (month === 'February')){
    console.log(`${month} is Summer in Australia`);
} else if ((month === 'March') || (month === 'April') || (month === 'May')){
    console.log(`${month} is Autumn in Australia`);
} else if ((month === 'June') || (month === 'July') || (month === 'August')){
    console.log(`${month} is Winter in Australia`);
} else if ((month === 'September') || (month === 'October') || (month === 'November')){
    console.log(`${month} is spring in Australia`);
}else {
    console.log("please type a valid month name with first letter capital");
}

// number 6
let trafficLights = 'red';

switch (trafficLights) {
case 'green':
  console.log('You should go!');
  break;
case 'orange':
  console.log('you should slow down…');
  break;
case 'red':
  console.log('You should stop!');
  break;
default:
  console.log('Please enter a valid value');
  break;
}









