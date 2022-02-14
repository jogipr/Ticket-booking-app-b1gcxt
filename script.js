function creatSeats() {
  let seats = [];
  for (let i = 0; i <= 100; i++) {
    seats.push({
      id: i,
      booked: false,
    });
  }
  return seats;
}
let seats = creatSeats();

function getSeatComponent({ id, booked }) {
  const bookClass = booked ? 'booked' : 'unbooked';
  return `<div id=${id} class='seat ${bookClass}'>${id}</div>`;
}

function drawSeats() {
  const seatComponents = seats.map((seat) => getSeatComponent(seat)).join(' ');
  const container = document.querySelector('.container');
  container.innerHTML = seatComponents;
}

function bookTicket(event) {
  const selectedSeat = event.target.id;
  if(!selectedSeat) return;
  seats = seats.map((seat) => {
    if (selectedSeat == seat.id) {
      return {
        ...seat,
        booked: !seat.booked,
      };
    }
    return seat;
  });
  drawSeats();
}

function resetBooking() {
  seats = creatSeats();
  drawSeats();
}

window.addEventListener('load', drawSeats);

const container = document.querySelector('.container');
container.addEventListener('click', bookTicket);

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetBooking);
