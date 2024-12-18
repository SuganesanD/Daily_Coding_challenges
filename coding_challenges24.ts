
// Create a class for ticket booking
class TicketBooking {
    namee: string;
    ticket_number: number;
    total_ticket: number;

    constructor(namee: string, ticket_number: number, total_ticket: number) {
        this.namee = namee;
        this.ticket_number = ticket_number;
        this.total_ticket = total_ticket;
    }
}

let ticket1 = new TicketBooking("Ram", 1212, 2);
let ticket2 = new TicketBooking("tom", 3434, 1);

console.log(ticket1);
console.log("User input:", ticket1);
console.log("User input:", ticket2);

console.log(ticket1.namee);
console.log(ticket2.namee);


