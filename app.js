'use strict'
/*
    1. Implement es6
    2. Return value after 2s
*/

// var john = {
//     name: 'John Doe', 
//     balance: 1500,
//     deduct: function(amount) {
//         this.balance = this.balance - amount;
//         return this.name + ' has a balance of ' + this.balance;
//     }
// }

// console.log(john.deduct(200))

const john = {
    name: 'John Doe',
    balance: 1500,
    deduct(amount) {
        let promise = new Promise((resolve, reject) => {
            this.balance = this.balance - amount;
            setTimeout(() => {
                resolve(`${john.name} has a balance of ${john.balance}`)
            }, 2000)
        })
        return promise
    }
}

// setTimeout(() => console.log(john.deduct(300)), 2000)

john.deduct(400).then((message) => console.log(message))