


const container = document.querySelector('.theatre-structure');
const seats = document.querySelectorAll('.row .seat:not(.taken');
const count = document.getElementById('count');
const total = document.getElementById('total');
const timeSelect = document.getElementById('showtime');
const seatPosition = document.getElementById ('seatPostion');
var stringS = "";


populateUI();
let ticketPrice = +timeSelect.value;

// Save selected movie index and price
function setTimeData(timeIndex, timePrice) {
  localStorage.setItem('selectedTimeIndex', timeIndex);
  localStorage.setItem('selectedTimePrice', timePrice);
}

// update total and count
function updatePickedCount() {
  const pickedSeats = document.querySelectorAll('.row .seat.picked');

  const seatsIndex = [...pickedSeats].map((seat) => [...seats].indexOf(seat));



  localStorage.setItem('pickedSeats', JSON.stringify(seatsIndex));

    

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const pickedSeatsCount = pickedSeats.length;

  count.innerText = pickedSeatsCount;
  total.innerText = pickedSeatsCount * ticketPrice;

let x = pickedSeatsCount;


for(let i =0; i<x; i++){

  
  stringS += seatsIndex[i];

    
  }

  seatPosition.innerText = stringS;

  return pickedSeatsCount;

  
}


// get data from localstorage and populate ui
function populateUI() {
  const pickedSeats = JSON.parse(localStorage.getItem('pickedSeats'));
  if (pickedSeats !== null && pickedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (pickedSeats.indexOf(index) > -1) {
        seat.classList.add('picked');
      }
    });
  }

  const pickedTimeIndex = localStorage.getItem('pickedTimeIndex');

  if (pickedTimeIndex !== null) {
    timeSelect.pickedIndex = pickedTimeIndex;
  }
}

// Movie select event
timeSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setTimeData(e.target.pickedIndex, e.target.value);
  updatePickedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('taken')) {
    e.target.classList.toggle('picked');

    updatePickedCount();
  }
});

const bookSeats = document.getElementById('bookSeats');



bookSeats.addEventListener('click', (e) => {

  if(seat.classList.contains('picked'));{

    seat.classList.add('taken');
    seat.classList.remove('picked');

  }

});



// intial count and total





