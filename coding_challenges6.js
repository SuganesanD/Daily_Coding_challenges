var bookarray = ["book1", "book2", "book3", "book4", "book5", "book6", "book7", "book8", "book9", "book10"];
var users = [2, 5, 3];
console.log(users.length);
for (var i = 0; i < users.length; i++) {
    bookarray.splice(0, users[i]);
    if (bookarray.length == 0) {
        console.log("There is no book in the bookarray");
        break;
    }
    else {
        console.log("Still there is \" ".concat(bookarray.length, " \" more books!!!"));
    }
}
