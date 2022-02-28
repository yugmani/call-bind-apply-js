// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

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
  airline:"Atlanta",
  airCode: "AA",
  bookings:[],
};

const book = deltaAir.book;

// The method book belongs to deltaAir and it is called into airAtlanta below; 
book.call(airAtlanta, 23, "Jonathan");
console.log(airAtlanta);

book.call(deltaAir, 233, "Alexandar");
console.log(deltaAir);

const jetBlue = {
  airline:"Jet Blue",
  airCode:"JB",
  bookings:[],
}

// The method book belongs to deltaAir and it is called into jetBlue below;
book.call(jetBlue, 733, "Annie");
console.log(jetBlue);

