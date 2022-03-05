// apply():
// The apply() method calls a function with given values and arguments provided as an array. It is exactly the same as the call() method, just with a small difference call() takes the arguments individually but the apply() takes it as an array.

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


