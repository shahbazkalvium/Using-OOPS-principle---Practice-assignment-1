// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
    
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }
    
    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned and is now available.`);
    }
}

// User Class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }
    
    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}.`);
        } else {
            console.log(`${this.name} cannot borrow ${book.title} as it is unavailable.`);
        }
    }
    
    return(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned ${book.title}.`);
        } else {
            console.log(`${this.name} did not borrow ${book.title}.`);
        }
    }
}

// Testing the system
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456");
const book2 = new Book("1984", "George Orwell", "789012");
const user1 = new User("Alice", 1);

console.log("\n--- Library System Test ---");
user1.borrow(book1); // Borrowing a book
user1.borrow(book2); // Borrowing another book
user1.return(book1); // Returning a book
user1.borrow(book1); // Borrowing the book again
user1.return(book2); // Returning another book