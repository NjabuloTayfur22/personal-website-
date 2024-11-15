# Student Task Manager

A Windows Forms application built with C# to help students manage their academic tasks and deadlines.

![Student Task Manager Screenshot](screenshot.png)

## Features
- ✅ Task Creation and Management
- 📅 Deadline Tracking
- 📊 Progress Monitoring
- 🔔 Reminder System
- 💾 SQLite Database Storage

## Technologies Used
- C# (.NET Framework)
- Windows Forms
- SQLite Database
- Entity Framework

## Learning Outcomes
- Implemented CRUD operations with SQLite
- Built responsive Windows Forms UI
- Practiced C# object-oriented programming
- Managed data persistence and state

## Setup Instructions
1. Clone the repository
2. Open in Visual Studio
3. Restore NuGet packages
4. Build and run the application

## Database Schema
```sql
CREATE TABLE Tasks (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL,
    Description TEXT,
    DueDate DATETIME,
    Priority INTEGER,
    Status TEXT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Screenshots
[Add screenshots of your application here]

## Future Improvements
- [ ] Cloud synchronization
- [ ] Mobile companion app
- [ ] Study time analytics
- [ ] Integration with calendar apps
