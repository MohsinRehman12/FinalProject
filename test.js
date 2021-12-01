



const container = document.querySelector('.theatre-structure');
const seats = document.querySelectorAll('.row .seat:not(.taken');
const count = document.getElementById('count');
const total = document.getElementById('total');
const timeSelect = document.getElementById('showtime');
const seatPosition = document.getElementById ('seatPostion');
var countSeats =0;


const seatArray = Array.from(seats);

const bookedSeats = document.querySelectorAll('.row .seat.taken');

const bookedSeats1 = Array.from(bookedSeats);



const pickedSeatsSelector = e=> e.target.classList.toggle('picked');

populateUI();


function populateUI() {
  const bookedSeats = JSON.parse(localStorage.getItem('takenSeats'));
  if (bookedSeats !== null && bookedSeats.length > 0) {

  	for(var i=0; i<seatArray.length; i++){

  		if (bookedSeats[i]>-1) {

  			seatArray[i].classList.add('taken');


  		}


  	}
    
    };
  }



for(var i=0; i<seatArray.length; i++){
	seatArray[i].addEventListener('click',pickedSeatsSelector);
	if(seatArray[i].classList.contains('picked')){

		pickedSeatsArray[i] = seatArray[i];
		countSeats++;

	}
}

const bookSeats = document.getElementById('bookSeats');

takenSeats=Array.from(seats);

function bookSeatsButton(){

	for(var i=0; i<seatArray.length; i++){

		if(seatArray[i].classList.contains('picked')){
			seatArray[i].classList.add('taken');
			seatArray[i].classList.remove('picked');

			takenSeats[i] = seatArray[i];
			console.log(bookedSeats1);

			localStorage.setItem('takenSeats', JSON.stringify(takenSeats));

		}

	}

}

bookSeats.addEventListener('click',bookSeatsButton);




count.innerHTML = countSeats;











