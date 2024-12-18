// Use 'require' to import prompt-sync
// Create an instance of the class
var TicketBooking = /** @class */ (function () {
    function TicketBooking(namee, ticket_number, total_ticket) {
        this.namee = namee;
        this.ticket_number = ticket_number;
        this.total_ticket = total_ticket;
    }
    return TicketBooking;
}());
var ticket1 = new TicketBooking("Ram", 1212, 2);
var ticket2 = new TicketBooking("tom", 3434, 1);
console.log(ticket1);
console.log("User input:", ticket1);
console.log("User input:", ticket2);
console.log(ticket1.namee);
console.log(ticket2.namee);
