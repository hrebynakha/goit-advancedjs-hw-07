/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  constructor(
    public name: string,
    protected salary: number,
    private department?: string
  ) {}
  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary + 10000, "Management");
  }
}

const emp = new Employee("Andrii", 20000, "IT");

console.log(emp.getEmployeeDetails()); // Name: Andrii, Department: IT, Salary: 20000

const mgr = new Manager("Anatolii", 20000); // Name: Anatolii, Department: Management, Salary: 30000
console.log(mgr.getEmployeeDetails());

export {};
