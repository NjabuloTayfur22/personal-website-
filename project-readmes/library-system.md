# Library Management System

A C# console application demonstrating object-oriented programming principles through a library management system.

## Features
- 📚 Book Management
- 👥 Member Records
- 📖 Borrowing System
- 📊 Book Statistics
- 🔍 Search Functionality

## Code Structure
```csharp
public class Book
{
    public string ISBN { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public bool IsAvailable { get; set; }
    public DateTime PublishedDate { get; set; }
}

public class Member
{
    public int MemberId { get; set; }
    public string Name { get; set; }
    public List<Book> BorrowedBooks { get; set; }
    public DateTime MembershipDate { get; set; }
}
```

## File Structure
```
LibrarySystem/
├── Models/
│   ├── Book.cs
│   ├── Member.cs
│   └── Transaction.cs
├── Services/
│   ├── BookService.cs
│   ├── MemberService.cs
│   └── TransactionService.cs
├── Data/
│   └── FileManager.cs
└── Program.cs
```

## Learning Outcomes
- C# fundamentals
- Object-oriented programming
- File I/O operations
- Data structures
- Console UI design

## Sample Usage
```csharp
// Adding a new book
var book = new Book 
{
    ISBN = "978-3-16-148410-0",
    Title = "Introduction to C#",
    Author = "John Doe",
    IsAvailable = true,
    PublishedDate = DateTime.Now
};
librarySystem.AddBook(book);

// Borrowing a book
var member = librarySystem.GetMember(1001);
librarySystem.BorrowBook(member, "978-3-16-148410-0");
```

## Future Improvements
- [ ] Database integration
- [ ] GUI interface
- [ ] Reservation system
- [ ] Fine calculation
- [ ] Report generation
