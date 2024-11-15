# Library System API Documentation

## Models

### Book
```csharp
public class Book
{
    public string ISBN { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public bool IsAvailable { get; set; }
    public DateTime PublishedDate { get; set; }
    public string Genre { get; set; }
    public int CopyCount { get; set; }
}
```

### Member
```csharp
public class Member
{
    public int MemberId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public List<Book> BorrowedBooks { get; set; }
    public DateTime MembershipDate { get; set; }
    public MembershipStatus Status { get; set; }
}
```

### Transaction
```csharp
public class Transaction
{
    public int TransactionId { get; set; }
    public int MemberId { get; set; }
    public string ISBN { get; set; }
    public DateTime BorrowDate { get; set; }
    public DateTime DueDate { get; set; }
    public DateTime? ReturnDate { get; set; }
    public decimal? FineAmount { get; set; }
}
```

## Services

### BookService
```csharp
public interface IBookService
{
    Book GetBookByISBN(string isbn);
    List<Book> SearchBooks(string query);
    void AddBook(Book book);
    void UpdateBook(Book book);
    void DeleteBook(string isbn);
    List<Book> GetAvailableBooks();
}
```

### MemberService
```csharp
public interface IMemberService
{
    Member GetMemberById(int id);
    void AddMember(Member member);
    void UpdateMember(Member member);
    void DeleteMember(int id);
    List<Book> GetBorrowedBooks(int memberId);
}
```

### TransactionService
```csharp
public interface ITransactionService
{
    void BorrowBook(int memberId, string isbn);
    void ReturnBook(int memberId, string isbn);
    decimal CalculateFine(DateTime dueDate, DateTime returnDate);
    List<Transaction> GetMemberHistory(int memberId);
}
```

## Usage Examples

### Adding a New Book
```csharp
var bookService = new BookService();
var book = new Book
{
    ISBN = "978-3-16-148410-0",
    Title = "Introduction to C#",
    Author = "John Doe",
    IsAvailable = true,
    PublishedDate = DateTime.Now,
    Genre = "Programming",
    CopyCount = 1
};
bookService.AddBook(book);
```

### Registering a New Member
```csharp
var memberService = new MemberService();
var member = new Member
{
    Name = "Jane Smith",
    Email = "jane.smith@email.com",
    MembershipDate = DateTime.Now,
    Status = MembershipStatus.Active
};
memberService.AddMember(member);
```

### Processing a Book Loan
```csharp
var transactionService = new TransactionService();
transactionService.BorrowBook(memberId: 1001, isbn: "978-3-16-148410-0");
```

## Error Handling

The system uses custom exceptions for different scenarios:

```csharp
public class BookNotFoundException : Exception
{
    public BookNotFoundException(string isbn) 
        : base($"Book with ISBN {isbn} not found.") { }
}

public class MemberNotFoundException : Exception
{
    public MemberNotFoundException(int id) 
        : base($"Member with ID {id} not found.") { }
}

public class BookNotAvailableException : Exception
{
    public BookNotAvailableException(string isbn) 
        : base($"Book with ISBN {isbn} is not available for borrowing.") { }
}
```
