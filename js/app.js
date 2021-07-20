'use strict';

console.log('hello world');

// 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties

// 2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location

// 5. Display the values of each array as unordered lists in the browser

// 6. Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle
// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies

// Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

// Here are the starting numbers that you’ll need to build these objects:

// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
// These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.





let arrayStoreHours= ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

const locSeattle = {
  location: 'Seattle',
  minHrCust: 23,
  maxHrCust: 65,
  avgCookiePerCust: 6.3,
  avgCustPerHour: 0,
  getAvgCustomerPerHour: function(){
    this.avgCustPerHour=randomCustPerHour(23, 65) + ' Seattle Customers Per Hour';
    console.log(this.avgCustPerHour);
  },
  salesPerhr: [],
  results: []
}
// locSeattle.getAvgCustomerPerHour();

function randomCustPerHour(a,b){
  let avgCustPerHour= Math.floor(Math.random()*(b - a +1)+a);
  return avgCustPerHour;
}

function cookiePurchPerHour(storeLoc){
    for (let i=0; i < arrayStoreHours.length; i++){
      storeLoc.getAvgCustomerPerHour();
      let cookiesPerHour= parseInt(storeLoc.avgCookiePerCust) * parseInt(storeLoc.avgCustPerHour);
      console.log(cookiesPerHour);
      storeLoc.salesPerhr.push(cookiesPerHour);

  }
}



const locTokyo = {
  location: 'Tokyo',
  minHrCust: 3,
  maxHrCust: 24,
  avgCookiePerCust: 1.2,
  avgCustPerHour: 0,
  getAvgCustomerPerHour: function(){
    this.avgCustPerHour=randomCustPerHour(3, 24) + ' Tokyo Customers Per Hour'
    console.log(this.avgCustPerHour);
  },
  salesPerhr: [],
  results: []
}
// locTokyo.getAvgCustomerPerHour();


// function randomCustPerHour(a,b){
//   let avgCustPerHour= Math.floor(Math.random()*(b - a +1)+a);
//   return avgCustPerHour;
// }

const locDubai = {
  location: 'Dubai',
  minHrCust: 11,
  maxHrCust: 38,
  avgCookiePerCust: 3.7,
  avgCustPerHour: 0,
  getAvgCustomerPerHour: function(){
    this.avgCustPerHour=randomCustPerHour(11, 38) + ' Dubai Customers Per Hour'
    console.log(this.avgCustPerHour);
  },
  salesPerhr: [],
  results: []
}
// locDubai.getAvgCustomerPerHour();


// function randomCustPerHour(a,b){
//   let avgCustPerHour= Math.floor(Math.random()*(b - a +1)+a);
//   return avgCustPerHour;
// }

const locParis = {
  location: 'Paris',
  minHrCust: 20,
  maxHrCust: 38,
  avgCookiePerCust: 2.3,
  avgCustPerHour: 0,
  getAvgCustomerPerHour: function(){
    this.avgCustPerHour=randomCustPerHour(11, 38) + ' Paris Customers Per Hour'
    console.log(this.avgCustPerHour);
  },
  salesPerhr: [],
  results: []
}
// locParis.getAvgCustomerPerHour();


// function randomCustPerHour(a,b){
//   let avgCustPerHour= Math.floor(Math.random()*(b - a +1)+a);
//   return avgCustPerHour;
// }

const locLima = {
  location: 'Lima',
  minHrCust: 2,
  maxHrCust: 16,
  avgCookiePerCust: 4.6,
  avgCustPerHour: 0,
  getAvgCustomerPerHour: function(){
    this.avgCustPerHour=randomCustPerHour(11, 38) + ' Lima Customers Per Hour'
    console.log(this.avgCustPerHour);
  },
  salesPerhr: [],
  results: []
}
// locLima.getAvgCustomerPerHour();


const storeLocations = [locSeattle, locTokyo, locDubai, locParis, locLima];
// cookiePurchPerHour(locSeattle)
// console.log(locSeattle)
for(let i=0; i < storeLocations.length; i++){
  cookiePurchPerHour(storeLocations[i]);
  storeLocations[i].results.push(cookiePurchPerHour)
  
}

// function randomCustPerHour(a,b){
//   let avgCustPerHour= Math.floor(Math.random()*(b - a +1)+a);
//   return avgCustPerHour;
// }

const profileDivElem=document.getElementById('store')

function renderStore(storeLocation) {
  storeLocation.getAvgCustomerPerHour();
  let articleElem = document.createElement('article');
  // parentElem.appendChild(childElem)
  profileDivElem.appendChild(articleElem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < arrayStoreHours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = arrayStoreHours.lenth[i];
    ulElem.appendChild(liElem)
  }
}

for (let i = 0; i < storeLocations.length; i++) {
  renderStore(storeLocations[i]);
}