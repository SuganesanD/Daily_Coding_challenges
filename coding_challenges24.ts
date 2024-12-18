
// Create a class for ticket booking

let ticketarray:any[]=[]
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
let ticket3 = new TicketBooking("Ram", 5656, 4);
let ticket4 = new TicketBooking("ragu", 7878, 1);
ticketarray.push(ticket1);
ticketarray.push(ticket2);
ticketarray.push(ticket3);
ticketarray.push(ticket4);
for(let i=0;i<ticketarray.length;i++){
    if((ticketarray[i].namee=="Ram") || (ticketarray[i].ticket_number==1212 )){
        console.log(ticketarray[i].ticket_number,ticketarray[i].total_ticket);    
    }
}





