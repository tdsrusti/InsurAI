    // Class 1: Student class
class Student {
    String name;
    int age;
}

// Class 2: Class with method
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
}

// Class 3: Class with constructor
class Car {
    String model;
    int year;

    Car(String m, int y) {
        model = m;
        year = y;
    }

    void display() {
        System.out.println("Model: " + model + ", Year: " + year);
    }
}

public class ClassPrograms {
    public static void main(String[] args) {
        // Object for Student
        Student s1 = new Student();
        s1.name = "Srusti";
        s1.age = 21;
        System.out.println(s1.name + " is " + s1.age + " years old.");
        System.out.println("------");

        // Object for Calculator
        Calculator calc = new Calculator();
        System.out.println("Sum = " + calc.add(10, 20));
        System.out.println("------");

        // Object for Car
        Car c1 = new Car("Honda City", 2023);
        c1.display();
    }
}    

