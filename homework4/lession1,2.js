// lession1
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
//     };
//     for (let x in product) {
//     console.log(x)
//     }
// 1.1 What does x receives from product, property or value?
//     - x nhận được từ object product là các key của nó : name, price,brand,color.
// 1.2 Use the for loop to print/log out the following output 
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    };
    for (let x in product) {
    console.log(x,':',product[x])
    }
//lession 2
// use one line of code to destructure to obtain subject, dueDate and assignTo
// from this object:
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
    };

const {subject,dueDate,assignTo} = task;
console.log(subject + '\n',dueDate + '\n',assignTo);