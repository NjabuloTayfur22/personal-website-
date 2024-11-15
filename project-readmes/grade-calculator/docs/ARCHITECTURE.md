# Grade Calculator Architecture

## Overview

The Grade Calculator is built using a layered architecture pattern with clear separation of concerns:

```
GradeCalculator/
├── src/
│   ├── models/
│   │   ├── grade.py
│   │   ├── student.py
│   │   └── course.py
│   ├── ui/
│   │   ├── main_window.py
│   │   ├── grade_input.py
│   │   └── results_display.py
│   ├── services/
│   │   ├── calculator.py
│   │   ├── file_handler.py
│   │   └── statistics.py
│   └── utils/
│       ├── validators.py
│       └── constants.py
├── tests/
│   ├── test_calculator.py
│   ├── test_models.py
│   └── test_validators.py
└── resources/
    ├── styles/
    └── images/
```

## Components

### 1. Models Layer

#### Grade Model
```python
class Grade:
    def __init__(self, value: float, weight: float, category: str):
        self.value = value
        self.weight = weight
        self.category = category
        
    @property
    def weighted_value(self) -> float:
        return self.value * self.weight
```

#### Student Model
```python
class Student:
    def __init__(self, name: str, id: str):
        self.name = name
        self.id = id
        self.grades: List[Grade] = []
        
    def add_grade(self, grade: Grade):
        self.grades.append(grade)
        
    def calculate_average(self) -> float:
        return sum(g.weighted_value for g in self.grades)
```

### 2. UI Layer

#### Main Window
```python
class MainWindow(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Grade Calculator")
        self.setup_ui()
        
    def setup_ui(self):
        self.grade_input = GradeInput(self)
        self.results_display = ResultsDisplay(self)
```

### 3. Services Layer

#### Calculator Service
```python
class GradeCalculator:
    @staticmethod
    def calculate_final_grade(grades: List[Grade]) -> float:
        total_weight = sum(grade.weight for grade in grades)
        total_weighted_value = sum(grade.weighted_value for grade in grades)
        return total_weighted_value / total_weight if total_weight > 0 else 0
    
    @staticmethod
    def calculate_gpa(percentage: float) -> float:
        if percentage >= 90: return 4.0
        elif percentage >= 80: return 3.0
        elif percentage >= 70: return 2.0
        elif percentage >= 60: return 1.0
        else: return 0.0
```

## Data Flow

1. User inputs grades through the UI
2. Input is validated by validators
3. Grade objects are created and stored
4. Calculator service processes grades
5. Results are displayed in the UI

## Error Handling

```python
class GradeError(Exception):
    """Base class for grade-related errors"""
    pass

class InvalidGradeError(GradeError):
    """Raised when grade value is invalid"""
    pass

class InvalidWeightError(GradeError):
    """Raised when weight value is invalid"""
    pass
```

## File Storage

```python
class FileHandler:
    @staticmethod
    def save_grades(student: Student, filename: str):
        with open(filename, 'w') as f:
            json.dump({
                'name': student.name,
                'id': student.id,
                'grades': [vars(g) for g in student.grades]
            }, f)
    
    @staticmethod
    def load_grades(filename: str) -> Student:
        with open(filename, 'r') as f:
            data = json.load(f)
            student = Student(data['name'], data['id'])
            for g in data['grades']:
                student.add_grade(Grade(**g))
            return student
```

## Testing Strategy

1. Unit Tests: Test individual components
2. Integration Tests: Test component interactions
3. UI Tests: Test user interface functionality

Example test:
```python
def test_grade_calculation():
    grades = [
        Grade(90, 0.4, "Assignments"),
        Grade(85, 0.3, "Midterm"),
        Grade(95, 0.3, "Final")
    ]
    calculator = GradeCalculator()
    final_grade = calculator.calculate_final_grade(grades)
    assert abs(final_grade - 90) < 0.01
```
