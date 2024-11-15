# Student Grade Calculator

A Python GUI application built with Tkinter for calculating and analyzing student grades.

![Grade Calculator Screenshot](screenshot.png)

## Features
- 📊 Grade Calculation
- 📈 Grade Distribution
- 💯 GPA Calculator
- 📋 Grade History
- 📑 Report Generation

## Technologies Used
- Python 3.9+
- Tkinter for GUI
- Matplotlib for charts
- Pandas for data handling
- Custom styling with ttk

## Code Example
```python
class GradeCalculator:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Student Grade Calculator")
        self.setup_ui()
        
    def calculate_final_grade(self):
        assignments = float(self.assignments_entry.get()) * 0.4
        midterm = float(self.midterm_entry.get()) * 0.3
        final = float(self.final_entry.get()) * 0.3
        return assignments + midterm + final
        
    def display_result(self):
        final_grade = self.calculate_final_grade()
        grade_letter = self.convert_to_letter(final_grade)
        self.result_label.config(
            text=f"Final Grade: {final_grade:.1f}% ({grade_letter})"
        )
```

## UI Features
- Clean, modern interface
- Input validation
- Real-time calculation
- Grade history tracking
- Visual grade distribution

## Learning Outcomes
- GUI development with Tkinter
- Event handling in Python
- Data validation and processing
- User interface design
- File handling for grade storage

## Future Enhancements
- [ ] Multiple grading schemes
- [ ] Grade predictions
- [ ] Export to PDF
- [ ] Cloud backup
- [ ] Class statistics
