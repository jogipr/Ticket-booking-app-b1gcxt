function creatSeats() {
  let seats = [];
  for (let i = 1; i <= 100; i++) {
    seats.push({
      id: i,
      booked: false,
    });
  }
  return seats;
}
let seats = creatSeats();
let bookedSeat = '0';

function getSeatComponent({ id, booked }) {
  const bookClass = booked ? 'booked' : 'unbooked';
  return `<div id=${id} class='seat ${bookClass}'>${id}</div>`;
}

function drawSeats() {
  const seatComponents = seats.map((seat) => getSeatComponent(seat)).join(' ');
  const container = document.querySelector('.container');
  container.innerHTML = seatComponents;
  updateBookedSeat();
}

function bookTicket(event) {
  const selectedSeat = event.target.id;
  if (!selectedSeat) return;
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
  updateBookedSeat();
}

function updateBookedSeat() {
  bookedSeat = seats.filter((s) => s.booked).length;
  const bookedSeatContainer = document.querySelector('#booked-ticket');
  bookedSeatContainer.innerHTML = bookedSeat;
}

function resetBooking() {
  seats = creatSeats();
  drawSeats();
  updateBookedSeat();
}

window.addEventListener('load', drawSeats);

const container = document.querySelector('.container');
container.addEventListener('click', bookTicket);

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetBooking);
