'use strict';
let hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm','3pm', '4pm', '5pm' ,'6pm', '7pm'];
// *** HELPER FUNCTION THAT WILL GENERATE A RANDOM AGE ***
function random(min, max){
  // grabbed from MDN documentation
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let seattleCookieShop ={
  name: 'seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  customerArray: [],
  cookiesEachHour: [],
  totalCookies: 0,
  getRandomCustomerNumber: function(){
    // random customer number
    for(let i = 0; i < hours.length; i++){
      let number = random(this.minCustomer, this.maxCustomer);
      this.customerArray.push(number)
    }
    console.log(this.customerArray)
  },
  getRandomCookies: function(){
    this.getRandomCustomerNumber();
    for(let i = 0; i < hours.length; i++){
      let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
      this.cookiesEachHour.push(number);
      this.totalCookies += number
    } 
    console.log(this.cookiesEachHour)
    console.log(this.totalCookies)
  }, 
  render: function(){
    this.getRandomCookies();
    let list = document.getElementById('seattle')
    for(let i = 0; i < hours.length; i++){
      let item = document.createElement('li');
      item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      list.appendChild(item);
    }
    let totalItems = document.createElement('li');
    totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
    list.appendChild(totalItems); 
  } 
  
} 

let toykoCookieShop ={
  name: 'toyko',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  customerArray: [],
  cookiesEachHour: [],
  totalCookies: 0,
  getRandomCustomerNumber: function(){
    // random customer number
    for(let i = 0; i < hours.length; i++){
      let number = random(this.minCustomer, this.maxCustomer);
      this.customerArray.push(number)
    }
    console.log(this.customerArray)
  },
  getRandomCookies: function(){
    this.getRandomCustomerNumber();
    for(let i = 0; i < hours.length; i++){
      let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
      this.cookiesEachHour.push(number);
      this.totalCookies += number
    } 
    console.log(this.cookiesEachHour)
    console.log(this.totalCookies)
  }, 
  render: function(){
    this.getRandomCookies();
    let list = document.getElementById('tokyo')
    for(let i = 0; i < hours.length; i++){
      let item = document.createElement('li');
      item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      list.appendChild(item);
    }
    let totalItems = document.createElement('li');
    totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
    list.appendChild(totalItems); 
  } 
    
} 

let dubaiCookieShop ={
  name: 'dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  customerArray: [],
  cookiesEachHour: [],
  totalCookies: 0,
  getRandomCustomerNumber: function(){
    // random customer number
    for(let i = 0; i < hours.length; i++){
      let number = random(this.minCustomer, this.maxCustomer);
      this.customerArray.push(number)
    }
    console.log(this.customerArray)
  },
  getRandomCookies: function(){
    this.getRandomCustomerNumber();
    for(let i = 0; i < hours.length; i++){
      let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
      this.cookiesEachHour.push(number);
      this.totalCookies += number
    } 
    console.log(this.cookiesEachHour)
    console.log(this.totalCookies)
  }, 
  render: function(){
    this.getRandomCookies();
    let list = document.getElementById('dubai')
    for(let i = 0; i < hours.length; i++){
      let item = document.createElement('li');
      item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      list.appendChild(item);
    }
    let totalItems = document.createElement('li');
    totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
    list.appendChild(totalItems); 
  } 
    
} 

let parisCookieShop ={
  name: 'paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  customerArray: [],
  cookiesEachHour: [],
  totalCookies: 0,
  getRandomCustomerNumber: function(){
    // random customer number
    for(let i = 0; i < hours.length; i++){
      let number = random(this.minCustomer, this.maxCustomer);
      this.customerArray.push(number)
    }
    console.log(this.customerArray)
  },
  getRandomCookies: function(){
    this.getRandomCustomerNumber();
    for(let i = 0; i < hours.length; i++){
      let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
      this.cookiesEachHour.push(number);
      this.totalCookies += number
    } 
    console.log(this.cookiesEachHour)
    console.log(this.totalCookies)
  }, 
  render: function(){
    this.getRandomCookies();
    let list = document.getElementById('paris')
    for(let i = 0; i < hours.length; i++){
      let item = document.createElement('li');
      item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      list.appendChild(item);
    }
    let totalItems = document.createElement('li');
    totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
    list.appendChild(totalItems); 
  } 
    
} 

let limaCookieShop ={
  name: 'lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  customerArray: [],
  cookiesEachHour: [],
  totalCookies: 0,
  getRandomCustomerNumber: function(){
    // random customer number
    for(let i = 0; i < hours.length; i++){
      let number = random(this.minCustomer, this.maxCustomer);
      this.customerArray.push(number)
    }
    console.log(this.customerArray)
  },
  getRandomCookies: function(){
    this.getRandomCustomerNumber();
    for(let i = 0; i < hours.length; i++){
      let number = Math.floor(this.avgCookieSale * this.customerArray[i]);
      this.cookiesEachHour.push(number);
      this.totalCookies += number
    } 
    console.log(this.cookiesEachHour)
    console.log(this.totalCookies)
  }, 
  render: function(){
    this.getRandomCookies();
    let list = document.getElementById('lima')
    for(let i = 0; i < hours.length; i++){
      let item = document.createElement('li');
      item.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      list.appendChild(item);
    }
    let totalItems = document.createElement('li');
    totalItems.textContent = 'total: ' + this.totalCookies + 'cookies';
    list.appendChild(totalItems); 
  } 
    
} 
seattleCookieShop.render();
toykoCookieShop.render();
dubaiCookieShop.render();
parisCookieShop.render();
limaCookieShop.render();











