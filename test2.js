// SET A


// 1. 
const devices = [
    {
        id: 1, 
        name: "iPhone 14", 
        brand: "Apple", 
        price: 999, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "20"
        }
    },
    {
        id: 2, 
        name: "Galaxy S21", 
        brand: "Samsung", 
        price: 799, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "22 "
        }
    },
    {
        id: 3, 
        name: "Pixel 7", 
        brand: "Google", 
        price: 599, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "24 "
        }
    },
    {
        id: 4, 
        name: "Surface Laptop 4", 
        brand: "Microsoft", 
        price: 1499, 
        inStock: 'yes', 
        features: {
            storage: "512GB", 
            batteryLife: "15"
        }
    },
    {
        id: 5, 
        name: "MacBook Air", 
        brand: "Apple", 
        price: 999, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "18 "
        }
    }
];
// 1.Print all device names.
console.log("1.Print all device names:");
devices.forEach(d=>console.log(d.name));

// 2.Print all device names whose price is greater than $800.
console.log("2.Print all device names whose price is greater than $800:");
devices.sort((a,b)=>b.price-a.price).forEach(p=>console.log(`${p.name}`))

// 3.Print out-of-stock devices.
console.log("3.Print out-of-stock devices:");
devices.filter(d=>d.inStock=='No').forEach(d=>console.log(d.name));

// 4.Find the device names with battery life greater than 20 hours.
console.log("4.Find the device names with battery life greater than 20 hours:");
devices.filter(d=>Number(d.features.batteryLife)>20).forEach(d=>console.log(d.name));

// 5.Calculate the total revenue generated when all available devices are sold out.
console.log("5.Calculate the total revenue generated when all available devices are sold out:");
console.log(devices.filter(d=>d.inStock=='yes').reduce((sum,d)=>sum+d.price,0));


console.log("----------------------------------------------------------------");



// 2.
const employees = [
    { id: 1, name: "John", position: "Manager", salary: 60000, hired: true },
    { id: 2, name: "Sarah", position: "Developer", salary: 50000, hired: true },
    { id: 3, name: "Tom", position: "Designer", salary: 45000, hired: false },
    { id: 4, name: "Anna", position: "Tester", salary: 40000, hired: true },
    { id: 5, name: "Jack", position: "Developer", salary: 55000, hired: false },
];
// Questions:

// 1.Print all employee positions.
console.log("1.Print all employee positions:");
employees.forEach(emp => console.log(emp.position))

// 2.Find the name of the employee with the highest salary.
console.log(`2.Find the name of the employee with the highest salary:${employees.reduce((s1,s2)=>s1.salary>s2.salary?s1:s2).name}`);

// 3.List all employees who are not hired.
console.log("3.List all employees who are not hired:");
employees.filter(emp=>emp.hired==false).forEach(emp=>console.log(emp.name));

// 4.Write a function to add a new employee to the list.
// console.log("4.Write a function to add a new employee to the list:");
// function add(emp) {
//     employees.push(emp);
//     add=({ id: 6, name: "Patrick", position: "Tester", salary: 50000, hired: true });
// }




// 5.Write a function to remove an employee by their ID.
// console.log("5.Write a function to remove an employee by their ID:");

// 6.create a function to update an employee's salary
// console.log("6.create a function to update an employee's salary:");

// 7.List all employees with the position "Developer".
console.log("7.List all employees with the position is Developer:");
employees.filter(emp=>emp.position=="Developer").forEach(emp=>console.log(emp.name));

// 8.Calculate the total salary of all hired employees.
console.log("8.Calculate the total salary of all hired employees:");
console.log(employees.filter(emp=>emp.hired).reduce((sum,emp)=>sum+emp.salary,0));




console.log("----------------------------------------------------------------");


// 3. Find the sum of first N natural numbers using recursion

