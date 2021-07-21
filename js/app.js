'use strict';
function Store(location, minHrCust, maxHrCust, avgCookiePerCust) {
  this.location = location;
  this.minHrCust = minHrCust;
  this.maxHrCust = maxHrCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.avgPurchasePH =[];
  this.cookieTotals = 0;
  this.getCookiesPerHour = function() {
    for (let i = 0; <hours.length; i++) {
      let custPerHour = Math.floor(Math.random() * (this.maxHrCust - this.minHrCust + 1) + this.minHrCust;
      this.avgCookiePerCust[i] = Math.floor(custPerHour * this.avgCookiePerCust);
    }
  };
  this.getCookieTotals = function(){
    for(let i=0; i < this this.cookiesPerHour.length: i++){
      this.cookieTotals = this.cookieTotals + this.cookiesPerHour[i];
    }
  };
}

Store.prototype.renderStoreData = function (tBodyElem) {
  const trElem = makeElem('tr', tBodyElem, null);
  makeElem('th', trElem, this.name);
  for (let i=0 <this.cookiesPerHour.lenth; i++) {
    makeElem('td', trElem, this.cookiesPerHour[i]);
  }
  makeElem('td', trElem, this.cookieTotals);
};

function addStore(location, minHrCust, maxHrCust, avgCookiePerCust){
  const store = new Store(location, minHrCust, maxHrCust, avgCookiePerCust);
  storeList.push(store)
}

function storeData(){
  for (i = 0; i < storeList.length; i++){
    storeList[i].getAvgCustomerPerHour();
    storeList[i].getCookiesPerHour();
  }
}


// Store.prototype.getAvgCustPerHour = function() {
//   this.avgCustPerHour = `${randomCustPerHour(this.minHrCust, this.maxHrCust)}  customers`;
//   // console.log(this.avgCustPerHour)
// }
// Store.prototype.cookiesPerHour = function(){
//   for (let i=0; i < arrayStoreHours.length; i++){
//     this.getAvgCustPerHour(); // Gets a new random number of customers
//     let cookiesPrHour= parseInt(this.avgCookiePerCust) * parseInt(this.avgCustPerHour); // result of * avgCookiePerCust * avgCustPerHour that you just got
//     console.log(cookiesPrHour);
//     this.avgPurchasePH.push(cookiesPrHour);
  }
}  
store.allStores.push(this);
store.allStores = [];
 
  // for (let i = 0; i <Store.allStores.length; i++) {
  //   Store.allstores[i].getAvgCustPerHour();
  //   renderStore(store.allStores[i]);
  // }

let arrayStoreHours= ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

const seattle = new Store('Seattle', 23, 65, 6.3,[arrayStoreHours]);
seattle.getAvgCustPerHour();
seattle.cookiesPerHour();
console.log(seattle);


const tokyo = new Store('Tokyo', 3, 24, 1.2,[arrayStoreHours]);
tokyo.getAvgCustPerHour();
tokyo.cookiesPerHour();
console.log(tokyo);

const dubai = new Store('Dubai', 11, 38, 3.7,[arrayStoreHours]);
dubai.getAvgCustPerHour();
dubai.cookiesPerHour();
console.log(dubai);

const paris = new Store('Paris', 20, 38, 2.3,[arrayStoreHours]);
paris.getAvgCustPerHour();
paris.cookiesPerHour();
console.log(paris);

const lima = new Store('Lima', 2, 16, 4.6,[arrayStoreHours]);
lima.getAvgCustPerHour();
lima.cookiesPerHour();
console.log(lima);

function randomCustPerHour(a,b){
  let avgCustPerHour= Math.floor(Math.random()*(b - a +1)+a);
  return avgCustPerHour;
}





const profileDivElem = document.getElementById('store')

function renderStore(storelocation) {
  storeLocation.getAvgCustomerPerHour();
      let articleElem = document.createElement('article');
      // parentElem.appendChild(childElem)
        profileDivElem.appendChild(articleElem);
    
      let h2Elem= document.createElement('h2');
        h2Elem.textContent = storeLocation.location;
        articleElem.appendChild(h2Elem)
        
        let ulElem = document.createElement('ul');
        articleElem.appendChild(ulElem);
        
        for (let i = 0; i < storeLocation.salesPerhr.length; i++) {
          let liElem = document.createElement('li');
          liElem.textContent = `${storeLocation.salesPerhr[i]}cookies sold a (hour)`;
          ulElem.appendChild(liElem)
        }
      }
      

  for (let i = 0; i <Store.allStores.length; i++) {
    Store.allstores[i].getAvgCustPerHour();
    renderStore(store.allStores[i]);
  }
      
      // function cookieTable()
      //   const tableElem = makeElement('table', articleElem, null);
      //     const rowElem = makeElement('tr', tableElem, null);
      //     makeElement('tr', rowElem, 'Seattle');
      //     makeElement('tr', row2Elem, 'Tokyo');
      //     makeElement('tr', row3Elem, 'Dubai');
      //     makeElement('tr', row4Elem, 'Paris');
      //     makeElement('tr', row5Elem, 'Lima');

// const tableElem = makeElement('table', articleElem, null);
//   const rowElem = makeElement('tr', tableElem, null);
//   makeElement('th', rowElem, 'Good with Cats');
//   makeElement('th', rowElem, 'Good with Dogs');
//   makeElement('th', rowElem, 'Good with Kids');
//   const row2Elem = makeElement('tr', tableElem, null);
//   makeElement('td', row2Elem, kitten.isGoodWithCats);
//   makeElement('td', row2Elem, kitten.isGoodWithDogs);
//   makeElement('td', row2Elem, kitten.isGoodWithKids);
// \
