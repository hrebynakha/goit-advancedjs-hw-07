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
  constructor(public name: string, protected salary: number, private department?: string) {}
  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(public name: string, protected salary: number) {
    super(name, salary = salary + 10000)
  }
}

const emp = new Employee("Andrii", 7890, "IT")

console.log(emp.getEmployeeDetails());

const mgr = new Manager("Anatolii", 2000)

console.log(mgr.getEmployeeDetails())

export {};