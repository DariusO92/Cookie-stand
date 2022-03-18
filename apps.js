'use strict';
let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm','3pm', '4pm', '5pm' ,'6pm', '7pm'];
let table = document.getElementById('salesT');
let myForm = document.getElementById('Cookie-Shop');
// *** HELPER FUNCTION THAT WILL GENERATE A RANDOM AGE ***
function random(min, max){
  // grabbed from MDN documentation
  return Math.floor(Math.random() * (max - min + 1) + min);
}

 let cookieshops = [];

function CookieShop(name, minCustomer, maxCustomer, avgCookieSale){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.totalCookies = 0;
  this.customerArray = [];
  this.cookiesEachHour = [];
  cookieshops.push(this);

  
  
}

CookieShop.prototype.getRandomCustomerNumber = function(){
  for(let i = 0; i < hours.length; i++){
    let number = random(this.minCustomer, this.maxCustomer);
    this.customerArray.push(number);
  }   
}
CookieShop.prototype.getRandomCookies = function(){
  this.getRandomCustomerNumber();
    for(let i = 0; i < hours.length; i++){
      let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
      this.cookiesEachHour.push(number);
      this.totalCookies += number
    }
}
CookieShop.prototype.render = function(){
  this.getRandomCookies();
    let row = document.createElement('tr');
    table.appendChild(row);
    let storeCell = document.createElement('td');
    storeCell.textContent = this.name;
    row.appendChild(storeCell);
    for(let i = 0; i < hours.length; i++){
      let item = document.createElement('td');
      item.textContent = this.cookiesEachHour[i];
      row.appendChild(item);
    }
    let totalItems = document.createElement('td');
    totalItems.textContent = this.totalCookies;
    row.appendChild(totalItems)
}
let headerTable = function(){
 //document.getElementById('salesT');
 let tableHeader = document.createElement('thead');
    table.appendChild(tableHeader);
    let tableHeaderRow = document.createElement('tr');
    tableHeader.appendChild(tableHeaderRow);
    //let storeCell = document.createElement('th');
    //storeCell.textContent = this.name;
   // row.appendChild(storeCell);
    let emptyCell = document.createElement('th');
    emptyCell.textContent = '';
    tableHeaderRow.appendChild(emptyCell);
    for(let i = 0; i < hours.length; i++){
      let item = document.createElement('th');
      item.textContent = hours[i];
      tableHeaderRow.appendChild(item);
    }
    //let totalItems = document.createElement('td');
    //totalItems.textContent = this.totalCookies;
    //row.appendChild(totalItems);
    let total = document.createElement('th');
    total.textContent = 'total sales';
    tableHeaderRow.appendChild(total);
}





  function handleSubmit(event){
  event.preventDefault();

  let name = event.target.Name.value;
  let minCustomer = number(event.target.minCustomer.value);
  let maxCustomer = number(event.target.maxCustomer.value);
  let avgCookieSale = number(event.target.avgCookieSale.value);

  let newCookieShop = new CookieShop(name, minCustomer, maxCustomer, avgCookieSale);


}




new CookieShop('seattle', '23', '65', '6.3');
new CookieShop('tokyo', '3', '24', '1.2');
new CookieShop('dubai', '11', '38', '3.7');
new CookieShop('paris', '20', '38', '2.3');
new CookieShop('lima', '2', '16', '4.6');

function renderAllCookieShops(){
  for(let i = 0; i < cookieshops.length; i++){
    
    cookieshops[i].render(); 
  }
};  

renderAllCookieShops();
headerTable();
Cookie-Shop.addEventListener('submit', handleSubmit);
newCookieShop()



//let seattleCookieShop ={
//   name: 'seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   customerArray: [],
//   cookiesEachHour: [],
//   totalCookies: 0,
//   getRandomCustomerNumber: function(){
//     // random customer number
//     for(let i = 0; i < hours.length; i++){
//       let number = random(this.minCustomer, this.maxCustomer);
//       this.customerArray.push(number)
//     }
//     //console.log(this.customerArray)
//   },
//   getRandomCookies: function(){
//     this.getRandomCustomerNumber();
//     for(let i = 0; i < hours.length; i++){
//       let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
//       this.cookiesEachHour.push(number);
//       this.totalCookies += number
//     } 
//     console.log(this.cookiesEachHour)
//     console.log(this.totalCookies)
//   }, 
//   render: function(){
//     this.getRandomCookies();
//     let list = document.getElementById('seattle')
//     for(let i = 0; i < hours.length; i++){
//       let item = document.createElement('li');
//       item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       list.appendChild(item);
//     }
//     let totalItems = document.createElement('li');
//     totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
//     list.appendChild(totalItems); 
//   } 
  
// } 

// let toykoCookieShop ={
//   name: 'toyko',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   customerArray: [],
//   cookiesEachHour: [],
//   totalCookies: 0,
//   getRandomCustomerNumber: function(){
//     // random customer number
//     for(let i = 0; i < hours.length; i++){
//       let number = random(this.minCustomer, this.maxCustomer);
//       this.customerArray.push(number)
//     }
//     console.log(this.customerArray)
//   },
//   getRandomCookies: function(){
//     this.getRandomCustomerNumber();
//     for(let i = 0; i < hours.length; i++){
//       let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
//       this.cookiesEachHour.push(number);
//       this.totalCookies += number
//     } 
//     console.log(this.cookiesEachHour)
//     console.log(this.totalCookies)
//   }, 
//   render: function(){
//     this.getRandomCookies();
//     let list = document.getElementById('tokyo')
//     for(let i = 0; i < hours.length; i++){
//       let item = document.createElement('li');
//       item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       list.appendChild(item);
//     }
//     let totalItems = document.createElement('li');
//     totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
//     list.appendChild(totalItems); 
//   } 
    
// } 

// let dubaiCookieShop ={
//   name: 'dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   customerArray: [],
//   cookiesEachHour: [],
//   totalCookies: 0,
//   getRandomCustomerNumber: function(){
//     // random customer number
//     for(let i = 0; i < hours.length; i++){
//       let number = random(this.minCustomer, this.maxCustomer);
//       this.customerArray.push(number)
//     }
//     console.log(this.customerArray)
//   },
//   getRandomCookies: function(){
//     this.getRandomCustomerNumber();
//     for(let i = 0; i < hours.length; i++){
//       let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
//       this.cookiesEachHour.push(number);
//       this.totalCookies += number
//     } 
//     console.log(this.cookiesEachHour)
//     console.log(this.totalCookies)
//   }, 
//   render: function(){
//     this.getRandomCookies();
//     let list = document.getElementById('dubai')
//     for(let i = 0; i < hours.length; i++){
//       let item = document.createElement('li');
//       item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       list.appendChild(item);
//     }
//     let totalItems = document.createElement('li');
//     totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
//     list.appendChild(totalItems); 
//   } 
    
// } 

// let parisCookieShop ={
//   name: 'paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   customerArray: [],
//   cookiesEachHour: [],
//   totalCookies: 0,
//   getRandomCustomerNumber: function(){
//     // random customer number
//     for(let i = 0; i < hours.length; i++){
//       let number = random(this.minCustomer, this.maxCustomer);
//       this.customerArray.push(number)
//     }
//     console.log(this.customerArray)
//   },
//   getRandomCookies: function(){
//     this.getRandomCustomerNumber();
//     for(let i = 0; i < hours.length; i++){
//       let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
//       this.cookiesEachHour.push(number);
//       this.totalCookies += number
//     } 
//     console.log(this.cookiesEachHour)
//     console.log(this.totalCookies)
//   }, 
//   render: function(){
//     this.getRandomCookies();
//     let list = document.getElementById('paris')
//     for(let i = 0; i < hours.length; i++){
//       let item = document.createElement('li');
//       item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       list.appendChild(item);
//     }
//     let totalItems = document.createElement('li');
//     totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
//     list.appendChild(totalItems); 
//   } 
    
// } 

// let limaCookieShop ={
//   name: 'lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,
//   customerArray: [],
//   cookiesEachHour: [],
//   totalCookies: 0,
//   getRandomCustomerNumber: function(){
//     // random customer number
//     for(let i = 0; i < hours.length; i++){
//       let number = random(this.minCustomer, this.maxCustomer);
//       this.customerArray.push(number)
//     }
//     console.log(this.customerArray)
//   },
//   getRandomCookies: function(){
//     this.getRandomCustomerNumber();
//     for(let i = 0; i < hours.length; i++){
//       let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
//       this.cookiesEachHour.push(number);
//       this.totalCookies += number
//     } 
//     console.log(this.cookiesEachHour)
//     console.log(this.totalCookies)
//   }, 
//   render: function(){
//     this.getRandomCookies();
//     let list = document.getElementById('lima')
//     for(let i = 0; i < hours.length; i++){
//       let item = document.createElement('li');
//       item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//       list.appendChild(item);
//     }
//     let totalItems = document.createElement('li');
//     totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
//     list.appendChild(totalItems); 
//   } 
    
// } 
// seattleCookieShop.render();
// toykoCookieShop.render();
// dubaiCookieShop.render();
// parisCookieShop.render();
// limaCookieShop.render();






