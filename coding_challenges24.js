// Create a class for ticket booking
var ticketarray = [];
var TicketBooking = /** @class */ (function () {
    function TicketBooking(namee, ticket_number, total_ticket) {
        this.namee = namee;
        this.ticket_number = ticket_number;
        this.total_ticket = total_ticket;
    }
    return TicketBooking;
}());
var id = 1212;
var ticket1 = new TicketBooking("Ram1", id, 2);
var ticket2 = new TicketBooking("tom", 3434, 1);
var ticket3 = new TicketBooking("Ram", 5656, 4);
var ticket4 = new TicketBooking("ragu", 7878, 1);
ticketarray.push(ticket1);
ticketarray.push(ticket2);
ticketarray.push(ticket3);
ticketarray.push(ticket4);
for (var i = 0; i < ticketarray.length; i++) {
    if ((ticketarray[i].namee == "Ram3") || (ticketarray[i].ticket_number == id)) {
        console.log(ticketarray[i].ticket_number, ticketarray[i].total_ticket);
    }
}
