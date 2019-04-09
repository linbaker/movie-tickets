// //Business Logic for TicketPrice
function TicketPrice) {
  this.prices = [],
}
//
// TicketPrice.prototype.addMoviePrice = function(price) {
//   this.prices.push(priceValue);
// }
//
var price = 0;

//Business Logic for Ticket
function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age,
  this.ticket = 8,
  this.ticketPrice();
}

Ticket.prototype.ticketPrice = function() {
  if (this.movie === "1"){
    this.ticket += 5;
  }
  if(this.time === "2"){
    this.ticket += 2;
  } else if (this.time === "3") {
    this.ticket += 5;
  }
  if (this.age === "2") {
    this.ticket += 2
  } else if (this.age === "3") {
    this.ticket -= 2;
  }
}
// function ticketPrice(movie, time, age) {
//   if (Ticket.movie === 1) {
//     price += 5;
//   }
// }

console.log(price);
// function TicketValue(movieValue, timeValue, ageValue) {
//   this.movieValue = movieValue,
//   this.timeValue = timeValue,
//   this.ageValue = ageValue
// }

//User Interface

// var ticket = new Ticket();


function displayTicketPrice(ticketPriceToDisplay) {
  var ticketInfo = $("#ticketInfo");
  var htmlForTicketInfo = "";
  ticketPriceToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var movie = $("#movie-select").val();
    var time = $("#time-select").val();
    var age = $("#age-select").val();
    //console.log(movie, time, age);
    // var total = add(movie, time, age);
    // alert(total)
    var ticket = new Ticket(movie, time, age);
    $("#ticketInfo").html(Ticket[3]);
    // var ticketPrice = ticket.addPrice;
    console.log(ticket);
  });
});
