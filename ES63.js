console.log("===== Task 1: Shape =====");

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log("Shape area:", shape.area());
console.log("Circle area:", circle.area().toFixed(2));
console.log("Rectangle area:", rectangle.area());

console.log("\n===== Task 2: BankAccount =====");

class BankAccount {
  constructor(accountNumber, balance) {
    let _accountNumber = accountNumber;
    let _balance = balance;

    this.getAccountDetails = function () {
      return { accountNumber: _accountNumber, balance: _balance };
    };

    this.deposit = function (amount) {
      if (amount > 0) {
        _balance += amount;
        console.log(`Deposited ${amount}`);
      } else {
        console.log("Deposit amount must be positive");
      }
    };

    this.withdraw = function (amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
        console.log(`Withdrew ${amount}`);
      } else {
        console.log("Invalid withdrawal amount");
      }
    };
  }

  displayBalance() {
    console.log(`Balance: ${this.getAccountDetails().balance}`);
  }
}

const account = new BankAccount("123456", 1000);
account.displayBalance();
account.deposit(500);
account.displayBalance();
account.withdraw(200);
account.displayBalance();
account.deposit(-50);
account.withdraw(5000);
console.log("Account details:", account.getAccountDetails());
console.log("Direct access to balance:", account.balance);

console.log("\n===== Task 3: Employee =====");

class Employee {
  #salary;

  constructor(salary = 0) {
    this.#salary = salary;
  }

  setSalary(amount) {
    if (amount > 0) {
      this.#salary = amount;
      console.log(`Salary updated to ${amount}`);
    } else {
      console.log("Salary must be positive");
    }
  }

  getSalary() {
    return this.#salary;
  }
}

const employee = new Employee();
employee.setSalary(5000);
console.log("Current salary:", employee.getSalary());
employee.setSalary(-100);
console.log("Salary after invalid update:", employee.getSalary());
console.log("Direct access to salary:", employee.salary);

console.log("\n===== Task 4: Product =====");

class Product {
  #name;
  #quantity;
  #price;

  constructor(name, quantity, price) {
    this.#name = name;
    this.#quantity = quantity;
    this.#price = price;
  }

  addStock(quantity) {
    if (quantity > 0) {
      this.#quantity += quantity;
      console.log(`Added ${quantity} to stock`);
    }
  }

  sell(quantity) {
    if (quantity > 0 && quantity <= this.#quantity) {
      this.#quantity -= quantity;
      console.log(`Sold ${quantity}`);
      return true;
    }
    console.log("Not enough stock");
    return false;
  }

  getDetails() {
    return {
      name: this.#name,
      price: this.#price,
      quantity: this.#quantity
    };
  }
}



const product = new Product("Laptop", 10, 1200);
console.log("Initial:", product.getDetails());
product.addStock(5);
console.log("After adding stock:", product.getDetails());
product.sell(3);
console.log("After selling:", product.getDetails());
product.sell(100);
console.log("Direct access to name:", product.name);




export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

import { add, subtract } from "./mathUtils.js";

console.log("===== Task 5: Math Utils =====");
console.log("10 + 5 =", add(10, 5));
console.log("10 - 5 =", subtract(10, 5));
console.log("(20 - 8) + 3 =", add(subtract(20, 8), 3));


export class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}



import { Task } from "./task.js";

export class TaskManager {
  #tasks = [];
  #nextId = 1;

  addTask(title) {
    const task = new Task(this.#nextId++, title);
    this.#tasks.push(task);
    console.log(`Added: ${title}`);
    return task;
  }

  completeTask(id) {
    const task = this.#tasks.find(t => t.id === id);
    if (task) {
      task.complete();
      console.log(`Completed: ${task.title}`);
    } else {
      console.log("Task not found");
    }
  }

  removeCompletedTasks() {
    const before = this.#tasks.length;
    this.#tasks = this.#tasks.filter(t => !t.completed);
    console.log(`Removed ${before - this.#tasks.length} completed task(s)`);
  }

  listTasks() {
    console.log("--- Task List ---");
    if (this.#tasks.length === 0) {

      console.log("No tasks");
      return;
    }
    this.#tasks.forEach(t => {
      console.log(`${t.id}. ${t.title} [${t.completed ? "done" : "pending"}]`);
    });
  }
}



import { Task } from "./task.js";
import { TaskManager } from "./taskManager.js";

console.log("===== Task 6: Task Manager =====");

const single = new Task(0, "Standalone task");
console.log("Created task object:", single);

const manager = new TaskManager();

manager.addTask("Study for exam");
manager.addTask("Finish lab 10");
manager.addTask("Buy groceries");
manager.listTasks();

manager.completeTask(2);
manager.listTasks();

manager.removeCompletedTasks();
manager.listTasks();

manager.completeTask(99);