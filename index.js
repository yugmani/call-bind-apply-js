// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// call():
// The call() method calls the function with a given this value and the arguments provided individually.

const deltaAir = {
  airline: 'Delta',
  airCode: 'DA',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} and flight ${flightNum}`
    );

    this.bookings.push({ flight: `${this.airCode}${flightNum}, ${name}` });
  },
};

const airAtlanta = {
  airline: 'Atlanta',
  airCode: 'AA',
  bookings: [],
};

const book = deltaAir.book;

// The method book belongs to deltaAir and it is called into airAtlanta below;
book.call(airAtlanta, 23, 'Jonathan');
console.log(airAtlanta);

book.call(deltaAir, 233, 'Alexandar');
console.log(deltaAir);

const jetBlue = {
  airline: 'Jet Blue',
  airCode: 'JB',
  bookings: [],
};

// The method book belongs to deltaAir and it is called into jetBlue below;
book.call(jetBlue, 733, 'Annie');
console.log(jetBlue);

// Apply method
const flightData = [101, 'Benjamin'];
book.apply(airAtlanta, flightData);
console.log(airAtlanta);

book.apply(jetBlue, flightData);

// bind():
// The bind() method creates a new function that when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any thing provided when new function called.

const bookDA = book.bind(deltaAir);
const bookAA = book.bind(airAtlanta);
const bookJB = book.bind(jetBlue);

bookDA(201, 'Danielle');
console.log(deltaAir);

bookAA(301, 'Davidson');
console.log(airAtlanta);

bookJB(401, 'Taylor');
console.log(jetBlue);
